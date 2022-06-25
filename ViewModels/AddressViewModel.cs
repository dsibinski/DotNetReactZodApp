namespace DotNetReactZodApp.ViewModels;

public record AddressViewModel(Guid Id, string Country, string City, string Street, int StreetNumber, string? PostalCode = null);