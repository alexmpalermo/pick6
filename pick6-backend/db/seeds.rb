# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

alex = User.create(name: "Alex", email: "alexmpalermo@gmail.com", password: "password", venmo: "alexp73")
donna = User.create(name: "Donna", email: "donna.lowe@henryschein.com", password: "password", venmo: "dlowe616")
bob = User.create(name: "Bob", email: "bob@gmail.com", password: "password")

groupschein = Group.create(name: "Team Schein", price: 5, code: "1e044a08f", adminid: 2)


######## Teams

Team.create(name: "Arizona Cardinals", abrv: "ARI")   #1
Team.create(name: "Atlanta Falcons", abrv: "ATL")     #2
Team.create(name: "Baltimore Ravens", abrv: "BAL")    #3
Team.create(name: "Buffalo Bills", abrv: "BUF")       #4
Team.create(name: "Carolina Panthers", abrv: "CAR")   #5
Team.create(name: "Chicago Bears", abrv: "CHI")       #6
Team.create(name: "Cincinnati Bengals", abrv: "CIN")  #7
Team.create(name: "Cleveland Browns", abrv: "CLE")    #8
Team.create(name: "Dallas Cowboys", abrv: "DAL")      #9
Team.create(name: "Denver Broncos", abrv: "DEN")      #10
Team.create(name: "Detroit Lions", abrv: "DET")       #11
Team.create(name: "Green Bay Packers", abrv: "GB")    #12
Team.create(name: "Houston Texans", abrv: "HOU")      #13
Team.create(name: "Indianapolis Colts", abrv: "IND")  #14
Team.create(name: "Jacksonville Jaguars", abrv: "JAX")#15
Team.create(name: "Kansas City Chiefs", abrv: "KC")   #16
Team.create(name: "Los Angeles Chargers", abrv: "LAC")#17
Team.create(name: "Los Angeles Rams", abrv: "LAR")    #18
Team.create(name: "Miami Dolphins", abrv: "MIA")      #19
Team.create(name: "Minnesota Vikings", abrv: "MIN")   #20
Team.create(name: "New England Patriots", abrv: "NE") #21
Team.create(name: "New Orleans Saints", abrv: "NO")   #22
Team.create(name: "New York Giants", abrv: "NYG")     #23
Team.create(name: "New York Jets", abrv: "NYJ")       #24
Team.create(name: "Oakland Raiders", abrv: "OAK")     #25
Team.create(name: "Philadelphia Eagles", abrv: "PHI") #26
Team.create(name: "Pittsburgh Steelers", abrv: "PIT") #27
Team.create(name: "San Francisco 49ers", abrv: "SF")  #28
Team.create(name: "Seattle Seahawks", abrv: "SEA")    #29
Team.create(name: "Tampa Bay Buccaneers", abrv: "TB") #30
Team.create(name: "Tennessee Titans", abrv: "TEN")    #31
Team.create(name: "Washington Redskins", abrv: "WAS") #32

######  Games
#week1
Game.create(day: "2019-09-05", time: "20:20", away: Team.find_by_id(12), home: Team.find_by_id(6))
Game.create(day: "2019-09-08", time: "13:00", away: Team.find_by_id(18), home: Team.find_by_id(5))
Game.create(day: "2019-09-08", time: "13:00", away: Team.find_by_id(32), home: Team.find_by_id(26))
Game.create(day: "2019-09-08", time: "13:00", away: Team.find_by_id(4), home: Team.find_by_id(24))
Game.create(day: "2019-09-08", time: "13:00", away: Team.find_by_id(2), home: Team.find_by_id(20))
Game.create(day: "2019-09-08", time: "13:00", away: Team.find_by_id(3), home: Team.find_by_id(19))
Game.create(day: "2019-09-08", time: "13:00", away: Team.find_by_id(16), home: Team.find_by_id(15))
Game.create(day: "2019-09-08", time: "13:00", away: Team.find_by_id(31), home: Team.find_by_id(8))
Game.create(day: "2019-09-08", time: "16:05", away: Team.find_by_id(14), home: Team.find_by_id(17))
Game.create(day: "2019-09-08", time: "16:05", away: Team.find_by_id(7), home: Team.find_by_id(29))
Game.create(day: "2019-09-08", time: "16:25", away: Team.find_by_id(28), home: Team.find_by_id(30))
Game.create(day: "2019-09-08", time: "16:25", away: Team.find_by_id(23), home: Team.find_by_id(9))
Game.create(day: "2019-09-08", time: "16:25", away: Team.find_by_id(11), home: Team.find_by_id(1))
Game.create(day: "2019-09-08", time: "20:20", away: Team.find_by_id(27), home: Team.find_by_id(21))
Game.create(day: "2019-09-09", time: "19:10", away: Team.find_by_id(13), home: Team.find_by_id(22))
Game.create(day: "2019-09-09", time: "21:20", away: Team.find_by_id(10), home: Team.find_by_id(25))

#week2
Game.create(day: "2019-09-12", time: "20:20", away: Team.find_by_id(30), home: Team.find_by_id(5))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(1), home: Team.find_by_id(3))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(9), home: Team.find_by_id(32))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(14), home: Team.find_by_id(31))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(29), home: Team.find_by_id(27))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(4), home: Team.find_by_id(23))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(28), home: Team.find_by_id(7))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(17), home: Team.find_by_id(11))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(20), home: Team.find_by_id(12))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(15), home: Team.find_by_id(13))
Game.create(day: "2019-09-15", time: "13:00", away: Team.find_by_id(21), home: Team.find_by_id(19))
Game.create(day: "2019-09-15", time: "16:05", away: Team.find_by_id(16), home: Team.find_by_id(25))
Game.create(day: "2019-09-15", time: "16:25", away: Team.find_by_id(22), home: Team.find_by_id(18))
Game.create(day: "2019-09-15", time: "16:25", away: Team.find_by_id(6), home: Team.find_by_id(10))
Game.create(day: "2019-09-15", time: "20:20", away: Team.find_by_id(26), home: Team.find_by_id(2))
Game.create(day: "2019-09-16", time: "20:15", away: Team.find_by_id(8), home: Team.find_by_id(24))

#week3
Game.create(day: "2019-09-19", time: "20:20", away: Team.find_by_id(31), home: Team.find_by_id(15))
Game.create(day: "2019-09-22", time: "13:00", away: Team.find_by_id(7), home: Team.find_by_id(4))
Game.create(day: "2019-09-22", time: "13:00", away: Team.find_by_id(11), home: Team.find_by_id(26))
Game.create(day: "2019-09-22", time: "13:00", away: Team.find_by_id(24), home: Team.find_by_id(21))
Game.create(day: "2019-09-22", time: "13:00", away: Team.find_by_id(25), home: Team.find_by_id(20))
Game.create(day: "2019-09-22", time: "13:00", away: Team.find_by_id(3), home: Team.find_by_id(16))
Game.create(day: "2019-09-22", time: "13:00", away: Team.find_by_id(2), home: Team.find_by_id(14))
Game.create(day: "2019-09-22", time: "13:00", away: Team.find_by_id(10), home: Team.find_by_id(12))
Game.create(day: "2019-09-22", time: "13:00", away: Team.find_by_id(19), home: Team.find_by_id(9))
Game.create(day: "2019-09-22", time: "16:05", away: Team.find_by_id(23), home: Team.find_by_id(30))
Game.create(day: "2019-09-22", time: "16:05", away: Team.find_by_id(5), home: Team.find_by_id(1))
Game.create(day: "2019-09-22", time: "16:25", away: Team.find_by_id(27), home: Team.find_by_id(28))
Game.create(day: "2019-09-22", time: "16:25", away: Team.find_by_id(22), home: Team.find_by_id(29))
Game.create(day: "2019-09-22", time: "16:25", away: Team.find_by_id(13), home: Team.find_by_id(17))
Game.create(day: "2019-09-22", time: "20:20", away: Team.find_by_id(18), home: Team.find_by_id(8))
Game.create(day: "2019-09-23", time: "20:15", away: Team.find_by_id(6), home: Team.find_by_id(32))

#week4
Game.create(day: "2019-09-26", time: "20:20", away: Team.find_by_id(26), home: Team.find_by_id(12))
Game.create(day: "2019-09-29", time: "13:00", away: Team.find_by_id(31), home: Team.find_by_id(2))
Game.create(day: "2019-09-29", time: "13:00", away: Team.find_by_id(32), home: Team.find_by_id(23))
Game.create(day: "2019-09-29", time: "13:00", away: Team.find_by_id(17), home: Team.find_by_id(19))
Game.create(day: "2019-09-29", time: "13:00", away: Team.find_by_id(25), home: Team.find_by_id(14))
Game.create(day: "2019-09-29", time: "13:00", away: Team.find_by_id(5), home: Team.find_by_id(13))
Game.create(day: "2019-09-29", time: "13:00", away: Team.find_by_id(16), home: Team.find_by_id(11))
Game.create(day: "2019-09-29", time: "13:00", away: Team.find_by_id(8), home: Team.find_by_id(3))
Game.create(day: "2019-09-29", time: "13:00", away: Team.find_by_id(21), home: Team.find_by_id(4))
Game.create(day: "2019-09-29", time: "16:05", away: Team.find_by_id(30), home: Team.find_by_id(18))
Game.create(day: "2019-09-29", time: "16:05", away: Team.find_by_id(29), home: Team.find_by_id(1))
Game.create(day: "2019-09-29", time: "16:25", away: Team.find_by_id(20), home: Team.find_by_id(6))
Game.create(day: "2019-09-29", time: "16:25", away: Team.find_by_id(15), home: Team.find_by_id(10))
Game.create(day: "2019-09-29", time: "20:20", away: Team.find_by_id(9), home: Team.find_by_id(22))
Game.create(day: "2019-09-30", time: "20:15", away: Team.find_by_id(7), home: Team.find_by_id(27))

#week5
Game.create(day: "2019-10-03", time: "20:20", away: Team.find_by_id(18), home: Team.find_by_id(29))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(15), home: Team.find_by_id(5))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(21), home: Team.find_by_id(32))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(4), home: Team.find_by_id(31))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(3), home: Team.find_by_id(27))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(1), home: Team.find_by_id(7))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(2), home: Team.find_by_id(13))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(30), home: Team.find_by_id(22))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(20), home: Team.find_by_id(23))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(6), home: Team.find_by_id(25))
Game.create(day: "2019-10-06", time: "13:00", away: Team.find_by_id(24), home: Team.find_by_id(26))
Game.create(day: "2019-10-06", time: "16:05", away: Team.find_by_id(10), home: Team.find_by_id(17))
Game.create(day: "2019-10-06", time: "16:25", away: Team.find_by_id(12), home: Team.find_by_id(9))
Game.create(day: "2019-10-06", time: "20:20", away: Team.find_by_id(14), home: Team.find_by_id(16))
Game.create(day: "2019-10-07", time: "20:15", away: Team.find_by_id(8), home: Team.find_by_id(28))

#week6
Game.create(day: "2019-10-10", time: "20:20", away: Team.find_by_id(23), home: Team.find_by_id(21))
Game.create(day: "2019-10-13", time: "09:30", away: Team.find_by_id(5), home: Team.find_by_id(30))
Game.create(day: "2019-10-13", time: "13:00", away: Team.find_by_id(32), home: Team.find_by_id(19))
Game.create(day: "2019-10-13", time: "13:00", away: Team.find_by_id(26), home: Team.find_by_id(20))
Game.create(day: "2019-10-13", time: "13:00", away: Team.find_by_id(13), home: Team.find_by_id(16))
Game.create(day: "2019-10-13", time: "13:00", away: Team.find_by_id(22), home: Team.find_by_id(15))
Game.create(day: "2019-10-13", time: "13:00", away: Team.find_by_id(29), home: Team.find_by_id(8))
Game.create(day: "2019-10-13", time: "13:00", away: Team.find_by_id(7), home: Team.find_by_id(3))
Game.create(day: "2019-10-13", time: "16:05", away: Team.find_by_id(28), home: Team.find_by_id(18))
Game.create(day: "2019-10-13", time: "16:05", away: Team.find_by_id(2), home: Team.find_by_id(1))
Game.create(day: "2019-10-13", time: "16:25", away: Team.find_by_id(9), home: Team.find_by_id(24))
Game.create(day: "2019-10-13", time: "16:25", away: Team.find_by_id(31), home: Team.find_by_id(10))
Game.create(day: "2019-10-13", time: "20:20", away: Team.find_by_id(27), home: Team.find_by_id(17))
Game.create(day: "2019-10-14", time: "20:15", away: Team.find_by_id(11), home: Team.find_by_id(12))

#week7
Game.create(day: "2019-10-17", time: "20:20", away: Team.find_by_id(16), home: Team.find_by_id(10))
Game.create(day: "2019-10-20", time: "13:00", away: Team.find_by_id(19), home: Team.find_by_id(4))
Game.create(day: "2019-10-20", time: "13:00", away: Team.find_by_id(15), home: Team.find_by_id(7))
Game.create(day: "2019-10-20", time: "13:00", away: Team.find_by_id(20), home: Team.find_by_id(11))
Game.create(day: "2019-10-20", time: "13:00", away: Team.find_by_id(25), home: Team.find_by_id(12))
Game.create(day: "2019-10-20", time: "13:00", away: Team.find_by_id(18), home: Team.find_by_id(2))
Game.create(day: "2019-10-20", time: "13:00", away: Team.find_by_id(13), home: Team.find_by_id(14))
Game.create(day: "2019-10-20", time: "13:00", away: Team.find_by_id(28), home: Team.find_by_id(32))
Game.create(day: "2019-10-20", time: "13:00", away: Team.find_by_id(1), home: Team.find_by_id(23))
Game.create(day: "2019-10-20", time: "16:05", away: Team.find_by_id(17), home: Team.find_by_id(31))
Game.create(day: "2019-10-20", time: "16:25", away: Team.find_by_id(22), home: Team.find_by_id(6))
Game.create(day: "2019-10-20", time: "16:25", away: Team.find_by_id(3), home: Team.find_by_id(29))
Game.create(day: "2019-10-20", time: "20:20", away: Team.find_by_id(26), home: Team.find_by_id(9))
Game.create(day: "2019-10-21", time: "20:15", away: Team.find_by_id(21), home: Team.find_by_id(24))


#week8
Game.create(day: "2019-10-24", time: "20:20", away: Team.find_by_id(32), home: Team.find_by_id(20))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(29), home: Team.find_by_id(2))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(30), home: Team.find_by_id(31))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(1), home: Team.find_by_id(22))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(7), home: Team.find_by_id(18))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(24), home: Team.find_by_id(15))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(26), home: Team.find_by_id(4))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(17), home: Team.find_by_id(6))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(23), home: Team.find_by_id(11))
Game.create(day: "2019-10-27", time: "13:00", away: Team.find_by_id(25), home: Team.find_by_id(13))
Game.create(day: "2019-10-27", time: "16:05", away: Team.find_by_id(5), home: Team.find_by_id(28))
Game.create(day: "2019-10-27", time: "16:25", away: Team.find_by_id(8), home: Team.find_by_id(21))
Game.create(day: "2019-10-27", time: "16:25", away: Team.find_by_id(10), home: Team.find_by_id(14))
Game.create(day: "2019-10-27", time: "20:20", away: Team.find_by_id(12), home: Team.find_by_id(16))
Game.create(day: "2019-10-28", time: "20:15", away: Team.find_by_id(19), home: Team.find_by_id(27))

#week9
Game.create(day: "2019-10-31", time: "20:20", away: Team.find_by_id(28), home: Team.find_by_id(1))
Game.create(day: "2019-11-03", time: "09:30", away: Team.find_by_id(13), home: Team.find_by_id(15))
Game.create(day: "2019-11-03", time: "13:00", away: Team.find_by_id(6), home: Team.find_by_id(26))
Game.create(day: "2019-11-03", time: "13:00", away: Team.find_by_id(14), home: Team.find_by_id(27))
Game.create(day: "2019-11-03", time: "13:00", away: Team.find_by_id(24), home: Team.find_by_id(19))
Game.create(day: "2019-11-03", time: "13:00", away: Team.find_by_id(20), home: Team.find_by_id(16))
Game.create(day: "2019-11-03", time: "13:00", away: Team.find_by_id(31), home: Team.find_by_id(5))
Game.create(day: "2019-11-03", time: "13:00", away: Team.find_by_id(32), home: Team.find_by_id(4))
Game.create(day: "2019-11-03", time: "16:05", away: Team.find_by_id(30), home: Team.find_by_id(29))
Game.create(day: "2019-11-03", time: "16:05", away: Team.find_by_id(11), home: Team.find_by_id(25))
Game.create(day: "2019-11-03", time: "16:25", away: Team.find_by_id(12), home: Team.find_by_id(17))
Game.create(day: "2019-11-03", time: "16:25", away: Team.find_by_id(8), home: Team.find_by_id(10))
Game.create(day: "2019-11-03", time: "20:20", away: Team.find_by_id(21), home: Team.find_by_id(3))
Game.create(day: "2019-11-04", time: "20:15", away: Team.find_by_id(9), home: Team.find_by_id(23))

#week10
Game.create(day: "2019-11-07", time: "20:20", away: Team.find_by_id(17), home: Team.find_by_id(25))
Game.create(day: "2019-11-10", time: "13:00", away: Team.find_by_id(3), home: Team.find_by_id(7))
Game.create(day: "2019-11-10", time: "13:00", away: Team.find_by_id(4), home: Team.find_by_id(8))
Game.create(day: "2019-11-10", time: "13:00", away: Team.find_by_id(5), home: Team.find_by_id(12))
Game.create(day: "2019-11-10", time: "13:00", away: Team.find_by_id(2), home: Team.find_by_id(22))
Game.create(day: "2019-11-10", time: "13:00", away: Team.find_by_id(11), home: Team.find_by_id(6))
Game.create(day: "2019-11-10", time: "13:00", away: Team.find_by_id(23), home: Team.find_by_id(24))
Game.create(day: "2019-11-10", time: "13:00", away: Team.find_by_id(16), home: Team.find_by_id(31))
Game.create(day: "2019-11-10", time: "13:00", away: Team.find_by_id(1), home: Team.find_by_id(30))
Game.create(day: "2019-11-10", time: "16:05", away: Team.find_by_id(19), home: Team.find_by_id(14))
Game.create(day: "2019-11-10", time: "16:25", away: Team.find_by_id(18), home: Team.find_by_id(27))
Game.create(day: "2019-11-10", time: "20:20", away: Team.find_by_id(20), home: Team.find_by_id(9))
Game.create(day: "2019-11-11", time: "20:15", away: Team.find_by_id(29), home: Team.find_by_id(28))


#week11
Game.create(day: "2019-11-14", time: "20:20", away: Team.find_by_id(27), home: Team.find_by_id(8))
Game.create(day: "2019-11-17", time: "13:00", away: Team.find_by_id(2), home: Team.find_by_id(5))
Game.create(day: "2019-11-17", time: "13:00", away: Team.find_by_id(9), home: Team.find_by_id(11))
Game.create(day: "2019-11-17", time: "13:00", away: Team.find_by_id(15), home: Team.find_by_id(14))
Game.create(day: "2019-11-17", time: "13:00", away: Team.find_by_id(4), home: Team.find_by_id(19))
Game.create(day: "2019-11-17", time: "13:00", away: Team.find_by_id(13), home: Team.find_by_id(3))
Game.create(day: "2019-11-17", time: "13:00", away: Team.find_by_id(10), home: Team.find_by_id(20))
Game.create(day: "2019-11-17", time: "13:00", away: Team.find_by_id(24), home: Team.find_by_id(32))
Game.create(day: "2019-11-17", time: "13:00", away: Team.find_by_id(22), home: Team.find_by_id(30))
Game.create(day: "2019-11-17", time: "16:05", away: Team.find_by_id(1), home: Team.find_by_id(28))
Game.create(day: "2019-11-17", time: "16:25", away: Team.find_by_id(7), home: Team.find_by_id(25))
Game.create(day: "2019-11-17", time: "16:25", away: Team.find_by_id(21), home: Team.find_by_id(26))
Game.create(day: "2019-11-17", time: "20:20", away: Team.find_by_id(6), home: Team.find_by_id(18))
Game.create(day: "2019-11-18", time: "20:15", away: Team.find_by_id(16), home: Team.find_by_id(17))


#week12
Game.create(day: "2019-11-21", time: "20:20", away: Team.find_by_id(14), home: Team.find_by_id(13))
Game.create(day: "2019-11-24", time: "13:00", away: Team.find_by_id(10), home: Team.find_by_id(4))
Game.create(day: "2019-11-24", time: "13:00", away: Team.find_by_id(23), home: Team.find_by_id(6))
Game.create(day: "2019-11-24", time: "13:00", away: Team.find_by_id(27), home: Team.find_by_id(7))
Game.create(day: "2019-11-24", time: "13:00", away: Team.find_by_id(19), home: Team.find_by_id(8))
Game.create(day: "2019-11-24", time: "13:00", away: Team.find_by_id(30), home: Team.find_by_id(2))
Game.create(day: "2019-11-24", time: "13:00", away: Team.find_by_id(5), home: Team.find_by_id(22))
Game.create(day: "2019-11-24", time: "13:00", away: Team.find_by_id(11), home: Team.find_by_id(32))
Game.create(day: "2019-11-24", time: "13:00", away: Team.find_by_id(25), home: Team.find_by_id(24))
Game.create(day: "2019-11-24", time: "16:05", away: Team.find_by_id(15), home: Team.find_by_id(31))
Game.create(day: "2019-11-24", time: "16:25", away: Team.find_by_id(9), home: Team.find_by_id(21))
Game.create(day: "2019-11-24", time: "16:25", away: Team.find_by_id(12), home: Team.find_by_id(28))
Game.create(day: "2019-11-24", time: "20:20", away: Team.find_by_id(29), home: Team.find_by_id(26))
Game.create(day: "2019-11-25", time: "20:15", away: Team.find_by_id(3), home: Team.find_by_id(18))


#week13
Game.create(day: "2019-11-28", time: "12:30", away: Team.find_by_id(6), home: Team.find_by_id(11))
Game.create(day: "2019-11-28", time: "16:30", away: Team.find_by_id(4), home: Team.find_by_id(9))
Game.create(day: "2019-11-28", time: "20:20", away: Team.find_by_id(22), home: Team.find_by_id(2))
Game.create(day: "2019-12-01", time: "13:00", away: Team.find_by_id(31), home: Team.find_by_id(14))
Game.create(day: "2019-12-01", time: "13:00", away: Team.find_by_id(24), home: Team.find_by_id(7))
Game.create(day: "2019-12-01", time: "13:00", away: Team.find_by_id(32), home: Team.find_by_id(5))
Game.create(day: "2019-12-01", time: "13:00", away: Team.find_by_id(28), home: Team.find_by_id(3))
Game.create(day: "2019-12-01", time: "13:00", away: Team.find_by_id(30), home: Team.find_by_id(15))
Game.create(day: "2019-12-01", time: "13:00", away: Team.find_by_id(12), home: Team.find_by_id(23))
Game.create(day: "2019-12-01", time: "13:00", away: Team.find_by_id(26), home: Team.find_by_id(19))
Game.create(day: "2019-12-01", time: "13:00", away: Team.find_by_id(25), home: Team.find_by_id(16))
Game.create(day: "2019-12-01", time: "16:05", away: Team.find_by_id(18), home: Team.find_by_id(1))
Game.create(day: "2019-12-01", time: "16:25", away: Team.find_by_id(8), home: Team.find_by_id(27))
Game.create(day: "2019-12-01", time: "16:25", away: Team.find_by_id(17), home: Team.find_by_id(10))
Game.create(day: "2019-12-01", time: "20:20", away: Team.find_by_id(21), home: Team.find_by_id(13))
Game.create(day: "2019-12-02", time: "20:15", away: Team.find_by_id(20), home: Team.find_by_id(29))

#week14
Game.create(day: "2019-12-05", time: "20:20", away: Team.find_by_id(9), home: Team.find_by_id(6))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(5), home: Team.find_by_id(2))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(14), home: Team.find_by_id(30))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(19), home: Team.find_by_id(24))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(28), home: Team.find_by_id(22))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(11), home: Team.find_by_id(20))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(10), home: Team.find_by_id(13))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(3), home: Team.find_by_id(4))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(7), home: Team.find_by_id(8))
Game.create(day: "2019-12-08", time: "13:00", away: Team.find_by_id(32), home: Team.find_by_id(12))
Game.create(day: "2019-12-08", time: "16:05", away: Team.find_by_id(17), home: Team.find_by_id(15))
Game.create(day: "2019-12-08", time: "16:25", away: Team.find_by_id(27), home: Team.find_by_id(1))
Game.create(day: "2019-12-08", time: "16:25", away: Team.find_by_id(31), home: Team.find_by_id(25))
Game.create(day: "2019-12-08", time: "16:25", away: Team.find_by_id(16), home: Team.find_by_id(21))
Game.create(day: "2019-12-08", time: "20:20", away: Team.find_by_id(29), home: Team.find_by_id(18))
Game.create(day: "2019-12-09", time: "20:15", away: Team.find_by_id(23), home: Team.find_by_id(26))

#week15
Game.create(day: "2019-12-12", time: "20:20", away: Team.find_by_id(24), home: Team.find_by_id(3))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(29), home: Team.find_by_id(5))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(26), home: Team.find_by_id(32))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(13), home: Team.find_by_id(31))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(4), home: Team.find_by_id(27))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(19), home: Team.find_by_id(23))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(10), home: Team.find_by_id(16))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(21), home: Team.find_by_id(7))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(30), home: Team.find_by_id(11))
Game.create(day: "2019-12-15", time: "13:00", away: Team.find_by_id(6), home: Team.find_by_id(12))
Game.create(day: "2019-12-15", time: "16:05", away: Team.find_by_id(15), home: Team.find_by_id(25))
Game.create(day: "2019-12-15", time: "16:05", away: Team.find_by_id(8), home: Team.find_by_id(1))
Game.create(day: "2019-12-15", time: "16:25", away: Team.find_by_id(2), home: Team.find_by_id(28))
Game.create(day: "2019-12-15", time: "16:25", away: Team.find_by_id(18), home: Team.find_by_id(9))
Game.create(day: "2019-12-15", time: "20:20", away: Team.find_by_id(20), home: Team.find_by_id(17))
Game.create(day: "2019-12-16", time: "20:15", away: Team.find_by_id(14), home: Team.find_by_id(22))

#week16
Game.create(day: "2019-12-21", time: "13:00", away: Team.find_by_id(11), home: Team.find_by_id(10))
Game.create(day: "2019-12-21", time: "16:30", away: Team.find_by_id(25), home: Team.find_by_id(17))
Game.create(day: "2019-12-21", time: "20:20", away: Team.find_by_id(23), home: Team.find_by_id(32))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(22), home: Team.find_by_id(31))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(27), home: Team.find_by_id(24))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(4), home: Team.find_by_id(21))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(18), home: Team.find_by_id(28))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(13), home: Team.find_by_id(30))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(15), home: Team.find_by_id(2))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(3), home: Team.find_by_id(8))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(5), home: Team.find_by_id(14))
Game.create(day: "2019-12-22", time: "13:00", away: Team.find_by_id(7), home: Team.find_by_id(19))
Game.create(day: "2019-12-22", time: "16:25", away: Team.find_by_id(1), home: Team.find_by_id(29))
Game.create(day: "2019-12-22", time: "16:25", away: Team.find_by_id(9), home: Team.find_by_id(26))
Game.create(day: "2019-12-22", time: "20:20", away: Team.find_by_id(16), home: Team.find_by_id(6))
Game.create(day: "2019-12-23", time: "20:15", away: Team.find_by_id(12), home: Team.find_by_id(20))

#week17
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(27), home: Team.find_by_id(3))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(24), home: Team.find_by_id(4))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(2), home: Team.find_by_id(30))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(26), home: Team.find_by_id(23))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(22), home: Team.find_by_id(5))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(8), home: Team.find_by_id(7))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(32), home: Team.find_by_id(9))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(12), home: Team.find_by_id(11))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(31), home: Team.find_by_id(13))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(14), home: Team.find_by_id(15))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(17), home: Team.find_by_id(16))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(6), home: Team.find_by_id(20))
Game.create(day: "2019-12-29", time: "13:00", away: Team.find_by_id(19), home: Team.find_by_id(21))
Game.create(day: "2019-12-29", time: "16:25", away: Team.find_by_id(25), home: Team.find_by_id(10))
Game.create(day: "2019-12-29", time: "16:25", away: Team.find_by_id(1), home: Team.find_by_id(18))
Game.create(day: "2019-12-29", time: "16:25", away: Team.find_by_id(28), home: Team.find_by_id(29))
