# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Game.find_by_id(1584).update(winner: "12")
# Game.find_by_id(1585).update(winner: "26")
# Game.find_by_id(1586).update(winner: "4")
# Game.find_by_id(1587).update(winner: "20")
# Game.find_by_id(1588).update(winner: "3")
# Game.find_by_id(1589).update(winner: "16")
# Game.find_by_id(1590).update(winner: "31")
# Game.find_by_id(1591).update(winner: "17")
# Game.find_by_id(1592).update(winner: "29")
# Game.find_by_id(1593).update(winner: "28")
# Game.find_by_id(1594).update(winner: "9")
# Game.find_by_id(1595).update(winner: "0")
# Game.find_by_id(1596).update(winner: "21")
# Game.find_by_id(1597).update(winner: "22")
# Game.find_by_id(1598).update(winner: "25")


######## Teams
#
# Team.create(number: 1, name: "Arizona Cardinals", abrv: "ARI")   #1
# Team.create(number: 2, name: "Atlanta Falcons", abrv: "ATL")     #2
# Team.create(number: 3, name: "Baltimore Ravens", abrv: "BAL")    #3
# Team.create(number: 4, name: "Buffalo Bills", abrv: "BUF")       #4
# Team.create(number: 5, name: "Carolina Panthers", abrv: "CAR")   #5
# Team.create(number: 6, name: "Chicago Bears", abrv: "CHI")       #6
# Team.create(number: 7, name: "Cincinnati Bengals", abrv: "CIN")  #7
# Team.create(number: 8, name: "Cleveland Browns", abrv: "CLE")    #8
# Team.create(number: 9, name: "Dallas Cowboys", abrv: "DAL")      #9
# Team.create(number: 10, name: "Denver Broncos", abrv: "DEN")      #10
# Team.create(number: 11, name: "Detroit Lions", abrv: "DET")       #11
# Team.create(number: 12, name: "Green Bay Packers", abrv: "GB")    #12
# Team.create(number: 13, name: "Houston Texans", abrv: "HOU")      #13
# Team.create(number: 14, name: "Indianapolis Colts", abrv: "IND")  #14
# Team.create(number: 15, name: "Jacksonville Jaguars", abrv: "JAX")#15
# Team.create(number: 16, name: "Kansas City Chiefs", abrv: "KC")   #16
# Team.create(number: 17, name: "Los Angeles Chargers", abrv: "LAC")#17
# Team.create(number: 18, name: "Los Angeles Rams", abrv: "LAR")    #18
# Team.create(number: 19, name: "Miami Dolphins", abrv: "MIA")      #19
# Team.create(number: 20, name: "Minnesota Vikings", abrv: "MIN")   #20
# Team.create(number: 21, name: "New England Patriots", abrv: "NE") #21
# Team.create(number: 22, name: "New Orleans Saints", abrv: "NO")   #22
# Team.create(number: 23, name: "New York Giants", abrv: "NYG")     #23
# Team.create(number: 24, name: "New York Jets", abrv: "NYJ")       #24
# Team.create(number: 25, name: "Oakland Raiders", abrv: "OAK")     #25
# Team.create(number: 26, name: "Philadelphia Eagles", abrv: "PHI") #26
# Team.create(number: 27, name: "Pittsburgh Steelers", abrv: "PIT") #27
# Team.create(number: 28, name: "San Francisco 49ers", abrv: "SF")  #28
# Team.create(number: 29, name: "Seattle Seahawks", abrv: "SEA")    #29
# Team.create(number: 30, name: "Tampa Bay Buccaneers", abrv: "TB") #30
# Team.create(number: 31, name: "Tennessee Titans", abrv: "TEN")    #31
# Team.create(number: 32, name: "Washington Redskins", abrv: "WAS") #32
#
# ######  Games
# #week1
# Game.create(handicap: 3, day: "2019-09-05", time: "20:20", away: "12", home: "6")
# Game.create(handicap: 3, day: "2019-09-08", time: "13:00", away: "32", home: "26")
# Game.create(handicap: 3, day: "2019-09-08", time: "13:00", away: "4", home: "24")
# Game.create(handicap: 3, day: "2019-09-08", time: "13:00", away: "2", home: "20")
# Game.create(handicap: 3, day: "2019-09-08", time: "13:00", away: "3", home: "19")
# Game.create(handicap: 3, day: "2019-09-08", time: "13:00", away: "16", home: "15")
# Game.create(handicap: 3, day: "2019-09-08", time: "13:00", away: "31", home: "8")
# Game.create(handicap: 3, day: "2019-09-08", time: "16:05", away: "14", home: "17")
# Game.create(handicap: 3, day: "2019-09-08", time: "16:05", away: "7", home: "29")
# Game.create(handicap: 3, day: "2019-09-08", time: "16:25", away: "28", home: "30")
# Game.create(handicap: 3, day: "2019-09-08", time: "16:25", away: "23", home: "9")
# Game.create(handicap: 3, day: "2019-09-08", time: "16:25", away: "11", home: "1")
# Game.create(handicap: 3, day: "2019-09-08", time: "20:20", away: "27", home: "21")
# Game.create(handicap: 3, day: "2019-09-09", time: "19:10", away: "13", home: "22")
# Game.create(handicap: 3, day: "2019-09-09", time: "21:20", away: "10", home: "25")
#
# #week2
# Game.create(handicap: -6.5, day: "2019-09-12", time: "20:20", away: "30", home: "5")
# Game.create(handicap: -13.5, day: "2019-09-15", time: "13:00", away: "1", home: "3")
# Game.create(handicap: 5, day: "2019-09-15", time: "13:00", away: "9", home: "32")
# Game.create(handicap: -3, day: "2019-09-15", time: "13:00", away: "14", home: "31")
# Game.create(handicap: -3.5, day: "2019-09-15", time: "13:00", away: "29", home: "27")
# Game.create(handicap: 1.5, day: "2019-09-15", time: "13:00", away: "4", home: "23")
# Game.create(handicap: -1.5, day: "2019-09-15", time: "13:00", away: "28", home: "7")
# Game.create(handicap: 2.5, day: "2019-09-15", time: "13:00", away: "17", home: "11")
# Game.create(handicap: -3, day: "2019-09-15", time: "13:00", away: "20", home: "12")
# Game.create(handicap: -9, day: "2019-09-15", time: "13:00", away: "15", home: "13")
# Game.create(handicap: 19, day: "2019-09-15", time: "13:00", away: "21", home: "19")
# Game.create(handicap: 7.5, day: "2019-09-15", time: "16:05", away: "16", home: "25")
# Game.create(handicap: -2.5, day: "2019-09-15", time: "16:25", away: "22", home: "18")
# Game.create(handicap: 2.5, day: "2019-09-15", time: "16:25", away: "6", home: "10")
# Game.create(handicap: 1.5, day: "2019-09-15", time: "20:20", away: "26", home: "2")
# Game.create(handicap: 2.5, day: "2019-09-16", time: "20:15", away: "8", home: "24")
#
# #week3
# Game.create(handicap: 3, day: "2019-09-19", time: "20:20", away: "31", home: "15")
# Game.create(handicap: 3, day: "2019-09-22", time: "13:00", away: "7", home: "4")
# Game.create(handicap: 3, day: "2019-09-22", time: "13:00", away: "11", home: "26")
# Game.create(handicap: 3, day: "2019-09-22", time: "13:00", away: "24", home: "21")
# Game.create(handicap: 3, day: "2019-09-22", time: "13:00", away: "25", home: "20")
# Game.create(handicap: 3, day: "2019-09-22", time: "13:00", away: "3", home: "16")
# Game.create(handicap: 3, day: "2019-09-22", time: "13:00", away: "2", home: "14")
# Game.create(handicap: 3, day: "2019-09-22", time: "13:00", away: "10", home: "12")
# Game.create(handicap: 3, day: "2019-09-22", time: "13:00", away: "19", home: "9")
# Game.create(handicap: 3, day: "2019-09-22", time: "16:05", away: "23", home: "30")
# Game.create(handicap: 3, day: "2019-09-22", time: "16:05", away: "5", home: "1")
# Game.create(handicap: 3, day: "2019-09-22", time: "16:25", away: "27", home: "28")
# Game.create(handicap: 3, day: "2019-09-22", time: "16:25", away: "22", home: "29")
# Game.create(handicap: 3, day: "2019-09-22", time: "16:25", away: "13", home: "17")
# Game.create(handicap: 3, day: "2019-09-22", time: "20:20", away: "18", home: "8")
# Game.create(handicap: 3, day: "2019-09-23", time: "20:15", away: "6", home: "32")
#
# #week4
# Game.create(handicap: 3, day: "2019-09-26", time: "20:20", away: "26", home: "12")
# Game.create(handicap: 3, day: "2019-09-29", time: "13:00", away: "31", home: "2")
# Game.create(handicap: 3, day: "2019-09-29", time: "13:00", away: "32", home: "23")
# Game.create(handicap: 3, day: "2019-09-29", time: "13:00", away: "17", home: "19")
# Game.create(handicap: 3, day: "2019-09-29", time: "13:00", away: "25", home: "14")
# Game.create(handicap: 3, day: "2019-09-29", time: "13:00", away: "5", home: "13")
# Game.create(handicap: 3, day: "2019-09-29", time: "13:00", away: "16", home: "11")
# Game.create(handicap: 3, day: "2019-09-29", time: "13:00", away: "8", home: "3")
# Game.create(handicap: 3, day: "2019-09-29", time: "13:00", away: "21", home: "4")
# Game.create(handicap: 3, day: "2019-09-29", time: "16:05", away: "30", home: "18")
# Game.create(handicap: 3, day: "2019-09-29", time: "16:05", away: "29", home: "1")
# Game.create(handicap: 3, day: "2019-09-29", time: "16:25", away: "20", home: "6")
# Game.create(handicap: 3, day: "2019-09-29", time: "16:25", away: "15", home: "10")
# Game.create(handicap: 3, day: "2019-09-29", time: "20:20", away: "9", home: "22")
# Game.create(handicap: 3, day: "2019-09-30", time: "20:15", away: "7", home: "27")
#
# #week5
# Game.create(handicap: 3, day: "2019-10-03", time: "20:20", away: "18", home: "29")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "15", home: "5")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "21", home: "32")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "4", home: "31")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "3", home: "27")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "1", home: "7")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "2", home: "13")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "30", home: "22")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "20", home: "23")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "6", home: "25")
# Game.create(handicap: 3, day: "2019-10-06", time: "13:00", away: "24", home: "26")
# Game.create(handicap: 3, day: "2019-10-06", time: "16:05", away: "10", home: "17")
# Game.create(handicap: 3, day: "2019-10-06", time: "16:25", away: "12", home: "9")
# Game.create(handicap: 3, day: "2019-10-06", time: "20:20", away: "14", home: "16")
# Game.create(handicap: 3, day: "2019-10-07", time: "20:15", away: "8", home: "28")
#
# #week6
# Game.create(handicap: 3, day: "2019-10-10", time: "20:20", away: "23", home: "21")
# Game.create(handicap: 3, day: "2019-10-13", time: "09:30", away: "5", home: "30")
# Game.create(handicap: 3, day: "2019-10-13", time: "13:00", away: "32", home: "19")
# Game.create(handicap: 3, day: "2019-10-13", time: "13:00", away: "26", home: "20")
# Game.create(handicap: 3, day: "2019-10-13", time: "13:00", away: "13", home: "16")
# Game.create(handicap: 3, day: "2019-10-13", time: "13:00", away: "22", home: "15")
# Game.create(handicap: 3, day: "2019-10-13", time: "13:00", away: "29", home: "8")
# Game.create(handicap: 3, day: "2019-10-13", time: "13:00", away: "7", home: "3")
# Game.create(handicap: 3, day: "2019-10-13", time: "16:05", away: "28", home: "18")
# Game.create(handicap: 3, day: "2019-10-13", time: "16:05", away: "2", home: "1")
# Game.create(handicap: 3, day: "2019-10-13", time: "16:25", away: "9", home: "24")
# Game.create(handicap: 3, day: "2019-10-13", time: "16:25", away: "31", home: "10")
# Game.create(handicap: 3, day: "2019-10-13", time: "20:20", away: "27", home: "17")
# Game.create(handicap: 3, day: "2019-10-14", time: "20:15", away: "11", home: "12")
#
# #week7
# Game.create(handicap: 3, day: "2019-10-17", time: "20:20", away: "16", home: "10")
# Game.create(handicap: 3, day: "2019-10-20", time: "13:00", away: "19", home: "4")
# Game.create(handicap: 3, day: "2019-10-20", time: "13:00", away: "15", home: "7")
# Game.create(handicap: 3, day: "2019-10-20", time: "13:00", away: "20", home: "11")
# Game.create(handicap: 3, day: "2019-10-20", time: "13:00", away: "25", home: "12")
# Game.create(handicap: 3, day: "2019-10-20", time: "13:00", away: "18", home: "2")
# Game.create(handicap: 3, day: "2019-10-20", time: "13:00", away: "13", home: "14")
# Game.create(handicap: 3, day: "2019-10-20", time: "13:00", away: "28", home: "32")
# Game.create(handicap: 3, day: "2019-10-20", time: "13:00", away: "1", home: "23")
# Game.create(handicap: 3, day: "2019-10-20", time: "16:05", away: "17", home: "31")
# Game.create(handicap: 3, day: "2019-10-20", time: "16:25", away: "22", home: "6")
# Game.create(handicap: 3, day: "2019-10-20", time: "16:25", away: "3", home: "29")
# Game.create(handicap: 3, day: "2019-10-20", time: "20:20", away: "26", home: "9")
# Game.create(handicap: 3, day: "2019-10-21", time: "20:15", away: "21", home: "24")
#
#
# #week8
# Game.create(handicap: 3, day: "2019-10-24", time: "20:20", away: "32", home: "20")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "29", home: "2")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "30", home: "31")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "1", home: "22")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "7", home: "18")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "24", home: "15")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "26", home: "4")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "17", home: "6")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "23", home: "11")
# Game.create(handicap: 3, day: "2019-10-27", time: "13:00", away: "25", home: "13")
# Game.create(handicap: 3, day: "2019-10-27", time: "16:05", away: "5", home: "28")
# Game.create(handicap: 3, day: "2019-10-27", time: "16:25", away: "8", home: "21")
# Game.create(handicap: 3, day: "2019-10-27", time: "16:25", away: "10", home: "14")
# Game.create(handicap: 3, day: "2019-10-27", time: "20:20", away: "12", home: "16")
# Game.create(handicap: 3, day: "2019-10-28", time: "20:15", away: "19", home: "27")
#
# #week9
# Game.create(handicap: 3, day: "2019-10-31", time: "20:20", away: "28", home: "1")
# Game.create(handicap: 3, day: "2019-11-03", time: "09:30", away: "13", home: "15")
# Game.create(handicap: 3, day: "2019-11-03", time: "13:00", away: "6", home: "26")
# Game.create(handicap: 3, day: "2019-11-03", time: "13:00", away: "14", home: "27")
# Game.create(handicap: 3, day: "2019-11-03", time: "13:00", away: "24", home: "19")
# Game.create(handicap: 3, day: "2019-11-03", time: "13:00", away: "20", home: "16")
# Game.create(handicap: 3, day: "2019-11-03", time: "13:00", away: "31", home: "5")
# Game.create(handicap: 3, day: "2019-11-03", time: "13:00", away: "32", home: "4")
# Game.create(handicap: 3, day: "2019-11-03", time: "16:05", away: "30", home: "29")
# Game.create(handicap: 3, day: "2019-11-03", time: "16:05", away: "11", home: "25")
# Game.create(handicap: 3, day: "2019-11-03", time: "16:25", away: "12", home: "17")
# Game.create(handicap: 3, day: "2019-11-03", time: "16:25", away: "8", home: "10")
# Game.create(handicap: 3, day: "2019-11-03", time: "20:20", away: "21", home: "3")
# Game.create(handicap: 3, day: "2019-11-04", time: "20:15", away: "9", home: "23")
#
# #week10
# Game.create(handicap: 3, day: "2019-11-07", time: "20:20", away: "17", home: "25")
# Game.create(handicap: 3, day: "2019-11-10", time: "13:00", away: "3", home: "7")
# Game.create(handicap: 3, day: "2019-11-10", time: "13:00", away: "4", home: "8")
# Game.create(handicap: 3, day: "2019-11-10", time: "13:00", away: "5", home: "12")
# Game.create(handicap: 3, day: "2019-11-10", time: "13:00", away: "2", home: "22")
# Game.create(handicap: 3, day: "2019-11-10", time: "13:00", away: "11", home: "6")
# Game.create(handicap: 3, day: "2019-11-10", time: "13:00", away: "23", home: "24")
# Game.create(handicap: 3, day: "2019-11-10", time: "13:00", away: "16", home: "31")
# Game.create(handicap: 3, day: "2019-11-10", time: "13:00", away: "1", home: "30")
# Game.create(handicap: 3, day: "2019-11-10", time: "16:05", away: "19", home: "14")
# Game.create(handicap: 3, day: "2019-11-10", time: "16:25", away: "18", home: "27")
# Game.create(handicap: 3, day: "2019-11-10", time: "20:20", away: "20", home: "9")
# Game.create(handicap: 3, day: "2019-11-11", time: "20:15", away: "29", home: "28")
#
#
# #week11
# Game.create(handicap: 3, day: "2019-11-14", time: "20:20", away: "27", home: "8")
# Game.create(handicap: 3, day: "2019-11-17", time: "13:00", away: "2", home: "5")
# Game.create(handicap: 3, day: "2019-11-17", time: "13:00", away: "9", home: "11")
# Game.create(handicap: 3, day: "2019-11-17", time: "13:00", away: "15", home: "14")
# Game.create(handicap: 3, day: "2019-11-17", time: "13:00", away: "4", home: "19")
# Game.create(handicap: 3, day: "2019-11-17", time: "13:00", away: "13", home: "3")
# Game.create(handicap: 3, day: "2019-11-17", time: "13:00", away: "10", home: "20")
# Game.create(handicap: 3, day: "2019-11-17", time: "13:00", away: "24", home: "32")
# Game.create(handicap: 3, day: "2019-11-17", time: "13:00", away: "22", home: "30")
# Game.create(handicap: 3, day: "2019-11-17", time: "16:05", away: "1", home: "28")
# Game.create(handicap: 3, day: "2019-11-17", time: "16:25", away: "7", home: "25")
# Game.create(handicap: 3, day: "2019-11-17", time: "16:25", away: "21", home: "26")
# Game.create(handicap: 3, day: "2019-11-17", time: "20:20", away: "6", home: "18")
# Game.create(handicap: 3, day: "2019-11-18", time: "20:15", away: "16", home: "17")
#
#
# #week12
# Game.create(handicap: 3, day: "2019-11-21", time: "20:20", away: "14", home: "13")
# Game.create(handicap: 3, day: "2019-11-24", time: "13:00", away: "10", home: "4")
# Game.create(handicap: 3, day: "2019-11-24", time: "13:00", away: "23", home: "6")
# Game.create(handicap: 3, day: "2019-11-24", time: "13:00", away: "27", home: "7")
# Game.create(handicap: 3, day: "2019-11-24", time: "13:00", away: "19", home: "8")
# Game.create(handicap: 3, day: "2019-11-24", time: "13:00", away: "30", home: "2")
# Game.create(handicap: 3, day: "2019-11-24", time: "13:00", away: "5", home: "22")
# Game.create(handicap: 3, day: "2019-11-24", time: "13:00", away: "11", home: "32")
# Game.create(handicap: 3, day: "2019-11-24", time: "13:00", away: "25", home: "24")
# Game.create(handicap: 3, day: "2019-11-24", time: "16:05", away: "15", home: "31")
# Game.create(handicap: 3, day: "2019-11-24", time: "16:25", away: "9", home: "21")
# Game.create(handicap: 3, day: "2019-11-24", time: "16:25", away: "12", home: "28")
# Game.create(handicap: 3, day: "2019-11-24", time: "20:20", away: "29", home: "26")
# Game.create(handicap: 3, day: "2019-11-25", time: "20:15", away: "3", home: "18")
#
#
# #week13
# Game.create(handicap: 3, day: "2019-11-28", time: "12:30", away: "6", home: "11")
# Game.create(handicap: 3, day: "2019-11-28", time: "16:30", away: "4", home: "9")
# Game.create(handicap: 3, day: "2019-11-28", time: "20:20", away: "22", home: "2")
# Game.create(handicap: 3, day: "2019-12-01", time: "13:00", away: "31", home: "14")
# Game.create(handicap: 3, day: "2019-12-01", time: "13:00", away: "24", home: "7")
# Game.create(handicap: 3, day: "2019-12-01", time: "13:00", away: "32", home: "5")
# Game.create(handicap: 3, day: "2019-12-01", time: "13:00", away: "28", home: "3")
# Game.create(handicap: 3, day: "2019-12-01", time: "13:00", away: "30", home: "15")
# Game.create(handicap: 3, day: "2019-12-01", time: "13:00", away: "12", home: "23")
# Game.create(handicap: 3, day: "2019-12-01", time: "13:00", away: "26", home: "19")
# Game.create(handicap: 3, day: "2019-12-01", time: "13:00", away: "25", home: "16")
# Game.create(handicap: 3, day: "2019-12-01", time: "16:05", away: "18", home: "1")
# Game.create(handicap: 3, day: "2019-12-01", time: "16:25", away: "8", home: "27")
# Game.create(handicap: 3, day: "2019-12-01", time: "16:25", away: "17", home: "10")
# Game.create(handicap: 3, day: "2019-12-01", time: "20:20", away: "21", home: "13")
# Game.create(handicap: 3, day: "2019-12-02", time: "20:15", away: "20", home: "29")
#
# #week14
# Game.create(handicap: 3, day: "2019-12-05", time: "20:20", away: "9", home: "6")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "5", home: "2")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "14", home: "30")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "19", home: "24")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "28", home: "22")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "11", home: "20")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "10", home: "13")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "3", home: "4")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "7", home: "8")
# Game.create(handicap: 3, day: "2019-12-08", time: "13:00", away: "32", home: "12")
# Game.create(handicap: 3, day: "2019-12-08", time: "16:05", away: "17", home: "15")
# Game.create(handicap: 3, day: "2019-12-08", time: "16:25", away: "27", home: "1")
# Game.create(handicap: 3, day: "2019-12-08", time: "16:25", away: "31", home: "25")
# Game.create(handicap: 3, day: "2019-12-08", time: "16:25", away: "16", home: "21")
# Game.create(handicap: 3, day: "2019-12-08", time: "20:20", away: "29", home: "18")
# Game.create(handicap: 3, day: "2019-12-09", time: "20:15", away: "23", home: "26")
#
# #week15
# Game.create(handicap: 3, day: "2019-12-12", time: "20:20", away: "24", home: "3")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "29", home: "5")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "26", home: "32")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "13", home: "31")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "4", home: "27")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "19", home: "23")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "10", home: "16")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "21", home: "7")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "30", home: "11")
# Game.create(handicap: 3, day: "2019-12-15", time: "13:00", away: "6", home: "12")
# Game.create(handicap: 3, day: "2019-12-15", time: "16:05", away: "15", home: "25")
# Game.create(handicap: 3, day: "2019-12-15", time: "16:05", away: "8", home: "1")
# Game.create(handicap: 3, day: "2019-12-15", time: "16:25", away: "2", home: "28")
# Game.create(handicap: 3, day: "2019-12-15", time: "16:25", away: "18", home: "9")
# Game.create(handicap: 3, day: "2019-12-15", time: "20:20", away: "20", home: "17")
# Game.create(handicap: 3, day: "2019-12-16", time: "20:15", away: "14", home: "22")
#
# #week16
# Game.create(handicap: 3, day: "2019-12-21", time: "13:00", away: "11", home: "10")
# Game.create(handicap: 3, day: "2019-12-21", time: "16:30", away: "25", home: "17")
# Game.create(handicap: 3, day: "2019-12-21", time: "20:20", away: "23", home: "32")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "22", home: "31")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "27", home: "24")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "4", home: "21")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "18", home: "28")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "13", home: "30")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "15", home: "2")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "3", home: "8")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "5", home: "14")
# Game.create(handicap: 3, day: "2019-12-22", time: "13:00", away: "7", home: "19")
# Game.create(handicap: 3, day: "2019-12-22", time: "16:25", away: "1", home: "29")
# Game.create(handicap: 3, day: "2019-12-22", time: "16:25", away: "9", home: "26")
# Game.create(handicap: 3, day: "2019-12-22", time: "20:20", away: "16", home: "6")
# Game.create(handicap: 3, day: "2019-12-23", time: "20:15", away: "12", home: "20")
#
# #week17
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "27", home: "3")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "24", home: "4")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "2", home: "30")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "26", home: "23")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "22", home: "5")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "8", home: "7")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "32", home: "9")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "12", home: "11")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "31", home: "13")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "14", home: "15")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "17", home: "16")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "6", home: "20")
# Game.create(handicap: 3, day: "2019-12-29", time: "13:00", away: "19", home: "21")
# Game.create(handicap: 3, day: "2019-12-29", time: "16:25", away: "25", home: "10")
# Game.create(handicap: 3, day: "2019-12-29", time: "16:25", away: "1", home: "18")
# Game.create(handicap: 3, day: "2019-12-29", time: "16:25", away: "28", home: "29")
