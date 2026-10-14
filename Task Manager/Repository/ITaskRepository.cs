using Task_Manager.Models;

namespace Task_Manager.Repository
{
    public interface ITaskRepository
    {
        Task<List<TaskItem>> GetAllAsync();

        Task<TaskItem?> GetByIdAsync(int id);

        Task<TaskItem> CreateAsync(TaskItem task);

        Task UpdateAsync(TaskItem task);

        Task DeleteAsync(int id);
    }
}
