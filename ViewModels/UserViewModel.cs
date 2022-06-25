namespace DotNetReactZodApp.ViewModels;

public record UserViewModel(Guid Id, string Name, string LastName, string Login, bool IsActive, int LoyaltyPoints, AddressViewModel? Address = null);