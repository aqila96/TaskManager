namespace Task_Manager.Models
{
    public class TaskItem
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }

        public string Priority { get; set; } = "Medium";

        public DateTime? DueDate { get; set; }

        public string Status { get; set; } = "Todo";

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}
