using Bondo_Challenge.Services;
using Bondo_Challenge.Services_Layer.Service_Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bondo_Challenge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StarshipsController(IStarShipService _starShipService, ILogger<StarshipsController> _logger) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllStarships()
        {
            _logger.LogInformation("Fetching All StarShips");
            var content = await _starShipService.GetAllStarships();
            return Content(content, "application/json");
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStarshipById(int id)
        {
            _logger.LogInformation($"Fetching starship with ID {id}");
            var content = await _starShipService.GetStarshipById(id);
            return Content(content, "application/json");
        }

    }
}
