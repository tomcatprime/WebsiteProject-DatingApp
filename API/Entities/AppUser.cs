namespace API.Entities //logical represantion of the user in the application
{
    public class AppUser
    {

        public string Id { get; set; } = Guid.NewGuid().ToString(); // Unique identifier for the user, generated as a new GUID
        //private would mean it is only available in this class - AppUser
        // Protected means it's available in this class and any class that inherits from it
    }
}
