using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ModelAPI.Controllers
{
    public class Data
    {
        public float YearsExperience { get; set; }

        public float Salary { get; set; }
    }

    [Produces("application/json")]
    [Route("api/Data")]
    public class DataController : Controller
    {
        [HttpGet]
        public IEnumerable<Data> Get()
        {
            var data = System.IO.File.ReadAllLines("SalaryData.csv").Skip(1).Select(ParseLine).ToList();

            return data;
        }

        private Data ParseLine(string line)
        {
            var split = line.Split(',');

            return new Data { YearsExperience = float.Parse(split[0]), Salary = float.Parse(split[1]) };
        }
    }
}