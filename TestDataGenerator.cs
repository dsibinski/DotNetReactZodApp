using DotNetReactZodApp.ViewModels;

namespace DotNetReactZodApp;

public static class TestDataGenerator
{
    public static List<UserViewModel> GetTestUsers()
    {
        var address1 = new AddressViewModel(Guid.NewGuid(), "Poland","Warsaw", "Wroclawska", 15, "00-002");
        var address2 = new AddressViewModel(Guid.NewGuid(), "USA", "New York", "13th Street", 47);

        var user1 = new UserViewModel(Guid.NewGuid(), "Andrzej", "Kowalski", "akowalski", true, 0, address1);
        var user2 = new UserViewModel(Guid.NewGuid(), "John", "Spencer", "j_spencer", false, 1500, address2);
        var user3 = new UserViewModel(Guid.NewGuid(), "Lydia", "Cleveland", "lydia.cleveland", true, 700);
        var user4 = new UserViewModel(Guid.NewGuid(), "Osian", "Cotton", "osiancot", true, 2000);
        var user5 = new UserViewModel(Guid.NewGuid(), "Lucy", "Spencer", "l_spencer", true, 2000, address2);

        var usersArray = new [] {user1, user2, user3, user4, user5};
        var userIndexToSkip = new Random().Next(3);

        return usersArray.Where((t, i) => i != userIndexToSkip).ToList();
    }
}