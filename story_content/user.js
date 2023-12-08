function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FHknRdl3Db":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer()

// General Varaibles
player.SetVar("Language","English");
player.SetVar("Num_Qestions","10");

// Question 1
player.SetVar("Q_1","What is the capital city of Australia?");
player.SetVar("Q_1_Option_1", "Sydney");
player.SetVar("Q_1_Option_2", "Melbourne");
player.SetVar("Q_1_Option_3", "Brisbane");
player.SetVar("Q_1_Option_N4", "Canberra");
player.SetVar("Q_1_Option_5", "Perth");

// Question 2
player.SetVar("Q_2","What is the largest mammal in the world?");
player.SetVar("Q_2_Option_1", "Elephant");
player.SetVar("Q_2_Option_N2", "Blue Whale");
player.SetVar("Q_2_Option_3", "Gorilla");
player.SetVar("Q_2_Option_4", "Giraffe");
player.SetVar("Q_2_Option_5", "Hippopotamus");

// Question 3
player.SetVar("Q_3","In which year did the Titanic sink?");
player.SetVar("Q_3_Option_1", "1905");
player.SetVar("Q_3_Option_2", "1920");
player.SetVar("Q_3_Option_N3", "1912");
player.SetVar("Q_3_Option_4", "1931");
player.SetVar("Q_3_Option_5", "1945");

// Question 4
player.SetVar("QN_4","Which planet is known as the 'Red Planet'?");
player.SetVar("Q_4_Option_1", "Venus");
player.SetVar("Q_4_Option_2", "Jupiter");
player.SetVar("Q_4_Option_3", "Saturn");
player.SetVar("Q_4_Option_4", "Neptune");
player.SetVar("Q_4_Option_N5", "Mars");

// Question 5
player.SetVar("Q_5","Who painted the Mona Lisa?");
player.SetVar("Q_5_Option_N1", "Leonardo da Vinci");
player.SetVar("Q_5_Option_2", "Vincent van Gogh");
player.SetVar("Q_5_Option_3", "Pablo Picasso");
player.SetVar("Q_5_Option_4", "Michelangelo");
player.SetVar("Q_5_Option_5", "Rembrandt");

// Question 6
player.SetVar("Q_6","What is the currency of Japan?");
player.SetVar("Q_6_Option_1", "Won");
player.SetVar("Q_6_Option_2", "Baht");
player.SetVar("Q_6_Option_3", "Ringgit");
player.SetVar("Q_6_Option_4", "Yuan");
player.SetVar("Q_6_Option_N5", "Yen");

// Question 7
player.SetVar("Q_7","What is the longest river in the world?");
player.SetVar("Q_7_Option_1", "Mississippi River");
player.SetVar("Q_7_Option_2", "Yangtze River");
player.SetVar("Q_7_Option_3", "Nile River");
player.SetVar("Q_7_Option_N4", "Amazon River");
player.SetVar("Q_7_Option_5", "Danube River");

// Question 8
player.SetVar("QN_8","Who wrote the play 'Romeo and Juliet'?");
player.SetVar("Q_8_Option_1", "Charles Dickens");
player.SetVar("Q_8_Option_2", "Scott Fitzgerald");
player.SetVar("Q_8_Option_3", "Emily Brontë");
player.SetVar("Q_8_Option_4", "Jane Austen");
player.SetVar("Q_8_Option_N5", "William Shakespeare");

// Question 9
player.SetVar("Q_9","What is the largest ocean on Earth?");
player.SetVar("Q_9_Option_1", "Atlantic Ocean");
player.SetVar("Q_9_Option_N2", "Pacific Ocean");
player.SetVar("Q_9_Option_3", "Southern Ocean");
player.SetVar("Q_9_Option_4", "Arctic Ocean");
player.SetVar("Q_9_Option_5", "Indian Ocean");

// Question 10
player.SetVar("Q_10","What is the main ingredient in guacamole?");
player.SetVar("Q_10_Option_1", "Tomatoes");
player.SetVar("Q_10_Option_2", "Cilantro");
player.SetVar("Q_10_Option_3", "Lime");
player.SetVar("Q_10_Option_N4", "Avocado");
player.SetVar("Q_10_Option_5", "Onions");
}