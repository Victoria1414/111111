#include <iostream>
#include <algorithm>

using namespace std;

// Функция для нахождения НОД (наибольшего общего делителя) с использованием алгоритма Евклида
long long gcd(long long x, long long y) {
    while (y != 0) {
      long long temp = y;
       y = x % y;
        x = temp;
    }
         return x;
}

int main() {
    ios::sync_with_stdio(false);
     cin.tie(nullptr);

    long long a, b;
     cin >> a >> b;

    long long g = gcd(a, b);

    // Максимальное количество команд будет равно НОД(a, b)
      long long max_teams = g;

    // Количество мальчиков и девочек в каждой команде
    long long boys_per_team = a / g;
    long long girls_per_team = b / g;

     cout << max_teams << endl;
      cout << boys_per_team << " " << girls_per_team << endl;

    return 0;
}
