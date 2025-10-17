namespace Bondo_Challenge.Services_Layer.Service_Abstractions
{
    public interface IStarShipService
    {
        Task<string> GetAllStarships();
        Task<string> GetStarshipById(int id);
    }
}
