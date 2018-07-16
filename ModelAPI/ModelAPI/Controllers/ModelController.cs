using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.ML;
using Microsoft.ML.Runtime.Api;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.IO;
using System.Threading.Tasks;

namespace ModelAPI.Controllers
{
    public class SalaryData
    {
        [Column("0")]
        public float YearsExperience;

        [Column("1", name: "Label")]
        public float Salary;
    }

    public class SalaryPrediction
    {
        [ColumnName("Score")]
        public float PredictedSalary;
    }

    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ModelController : Controller
    {
        public IConfiguration _configuration;
        private CloudBlockBlob _blockBlob;

        public ModelController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("{yearsExperience}")]
        public async Task<float> Get(int yearsExperience)
        {
            var model = await LoadModel();

            var prediction = model.Predict(new SalaryData { YearsExperience = yearsExperience });

            return prediction.PredictedSalary;
        }

        private async Task<PredictionModel<SalaryData, SalaryPrediction>> LoadModel()
        {
            if (!System.IO.File.Exists("model.zip"))
            {
                var account = CloudStorageAccount.Parse(_configuration["BlobConnection"]);
                var client = account.CreateCloudBlobClient();

                var modelContainer = client.GetContainerReference("models");
                _blockBlob = modelContainer.GetBlockBlobReference("model.zip");

                await _blockBlob.DownloadToFileAsync("model.zip", FileMode.Create);
            }

            return await PredictionModel.ReadAsync<SalaryData, SalaryPrediction>("model.zip");
        }
    }
}