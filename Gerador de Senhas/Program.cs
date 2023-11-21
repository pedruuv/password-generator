const string CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&(){}/|\\+-=_<>?[]";

void Menu()
{
    Console.WriteLine("Digite o tamanho da senha:");
    var length = Convert.ToInt32(Console.ReadLine());

    var password = GeneratePassword(length);
    Console.WriteLine(password);
}

string GeneratePassword(int length)
{
    if(length < 8) { length = 8; }

    var password = "";

    for(int i = 0; i < length; i++)
    {
        Random random = new();
        var index = random.Next(0, CHARS.Length - 1);
        password += CHARS[index];
    }

    return password;
}

Menu();