using Microsoft.EntityFrameworkCore;
using Task_Manager.Models;

namespace Task_Manager.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(
        DbContextOptions<ApplicationDBContext> options)
        : base(options)
        {
        }

        public DbSet<TaskItem> Tasks { get; set; }
    }
}
