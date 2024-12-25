year = 4
interest_rate = 0.1
capital = 5000
interest_earned = 0

for i in range(year):
    interest_earned += capital * interest_rate
    print(f'第{i+1}年末的本息合是: {interest_earned + capital}元')
    