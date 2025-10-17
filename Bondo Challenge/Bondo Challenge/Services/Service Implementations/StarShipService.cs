using Bondo_Challenge.Services_Layer.Service_Abstractions;

namespace Bondo_Challenge.Services
{
    public class StarShipService(HttpClient _httpClient,ILogger<StarShipService> logger) : IStarShipService
    {
        public async Task<string> GetAllStarships()
        {
            try
            {
                var response = await _httpClient.GetAsync("https://swapi.dev/api/starships");

                if (!response.IsSuccessStatusCode)
                {
                    logger.LogWarning($"An Error Eccours. Status Code: {response.StatusCode}");
                    return "An Error Eccours";
                }
                return await response.Content.ReadAsStringAsync();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error fetching starships from SWAPI");
                throw;
            }
        }

        public async Task<string> GetStarshipById(int id)
        {
            try
            {
                var response = await _httpClient.GetAsync($"https://swapi.dev/api/starships/{id}/");
                if (!response.IsSuccessStatusCode)
                {
                    logger.LogWarning($"Starship with ID {id} not found. Status Code: {response.StatusCode}");
                    return "An Error Eccours"; 
                }

                return await response.Content.ReadAsStringAsync();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, $"Error Fetching Starship with ID {id}");
                throw;
            }
        }
    }
}
