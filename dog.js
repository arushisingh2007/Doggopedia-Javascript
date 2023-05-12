/*This is a game called Doggopedia where the user can learn about a variety
 * of information such as health risks, basic information etc.
 * about 15 different dog breeds (the most common ones). This program also
 * has a test mode where the user has the ability to choose from either a 
 * test about health risks for dogs or test themselves on basic information.
 * The last mode is the simulation mode where the user has to identify
 * the right action in a situation where their dog's health is at risk
 * and gets feedback and an explanation as to why they need to act that way
 * Overall, the program is an educational program where the users or new
 * dog owners can enhance their information on dogs.
*/

//global variables used in the program 
var value = 0;
value = parseInt(localStorage.getItem("myValue"));
var dogName = "";
var questionOne = "";
var questionTwo = "";
var questionThree = "";
var questionFour = "";
var questionFive = "";
var ar1 = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var healthCount = 0;
var basicCount = 0;
var simFeedback = "";
var count = 0;

//dog information arrays 

//credit to:https://www.akc.org/expert-advice/lifestyle/things-you-didnt-know-beagle/
var beagle = new Array();
beagle[0] = "<strong>Basic Information</strong>"
beagle[1] = "- male: 22–24 lbs female: 20–22 lbs";
beagle[2] = "- male: 14–16 inches female: 13–15 inches";
beagle[3] = "- Their life span is 13-15 years.";
beagle[4] = "- The tips of their tails are white";
beagle[5] = "- Made it easy to be spotted when hunting";
beagle[6] = "- Originally bred as hunting dogs";
beagle[7] = "- Have great noses";
beagle[8] = "- Originated from England/United Kingdom/Britain";
beagle[9] = "<strong>Health Risks:</strong>";
beagle[10] = "- Obesity, allergies, hypothyroidism";
beagle[11] = "<strong>Make sure: </strong>";
beagle[12] = "   - They get lots of exercise";
beagle[13] = "   - Have a balanced, healthy diet";
beagle[14] = "- They get regular visits from the doctor to check for allergies";

//credit to: https://www.wellnesspetfood.com/blog/fun-facts-about-chihuahuas
var chihuahua = new Array();
chihuahua[0] = "<strong>Basic Information</strong>"
chihuahua[1] = "- Chihuahuas are 3.3 - 6.6lbs";
chihuahua[2] = "- They are 5-7 in tall";
chihuahua[3] = "- There lifespan is: 12-20 years";
chihuahua[4] = "- They originated from Mexico";
chihuahua[5] = "- Smart and easy to train";
chihuahua[6] = "- Great guard dogs";
chihuahua[7] = "- The chihuahua breed has a lot of diversity";
chihuahua[8] = "     - Many chihuahua mixes";
chihuahua[9] = "<strong>Health Risks:</strong>";
chihuahua[10] = "     -  Shivering, dental disease, spinal injuries";
chihuahua[11] = "<strong>Make sure: </strong>";
chihuahua[12] = "    -  They get lots of exercise";
chihuahua[13] = "    -  Have a balanced, heatly diet";
chihuahua[14] = "    -  Brush teeth regularly";

////credit to: https://www.akc.org/expert-advice/lifestyle/things-you-didnt-know-about-the-dachshund/
var dachshunds = new Array();
dachshunds[0] = "<strong>Basic Information</strong>"
dachshunds[1] = "- Their lifespan is 12-16 years";
dachshunds[2] = "- They are 8-9 inches tall.";
dachshunds[3] = "- They weight about: 16-32 lbs";
dachshunds[4] = "- Fun Fact: Slinkie from Toy Story is a dachshund";
dachshunds[5] = "- Did you know: Britains first cloned dog was a dachshund";
dachshunds[6] = "<strong>Health Risks:</strong>";
dachshunds[7] = "   - Cancer, dental problem, back problems";
dachshunds[8] = "<strong>Make sure: </strong>";
dachshunds[9] = "   - They get lots of exercise";
dachshunds[10] = "   - Have a balanced, heatly diet";
dachshunds[11] = "  - Brush teeth regularly";

//credit to: https: //www.akc.org/expert-advice/dog-breeds/australian-shepherd-facts/
var australianSheperd = new Array();
australianSheperd[0] = "<strong>Basic Information</strong>"
australianSheperd[1] = "- Their lifespan is: 12-13 years";
australianSheperd[2] = "- Weight: male: 55–70 lbs female: 35–55 lbs";
australianSheperd[3] = "- Height: male: 20–23 inches female: 18–21 inches";
australianSheperd[4] = "- They originated from Spain";
australianSheperd[5] = "- Often have two colored eyes, also known as heterochromia";
australianSheperd[6] = "- They shed a lot";
australianSheperd[7] = "- naturally have a short tail";
australianSheperd[8] = "<strong>Health Risks:</strong>";
australianSheperd[9] = "    - Obesity, Heart disease, joint problems";
australianSheperd[10] = "<strong>Make sure: </strong>";
australianSheperd[11] = "   - They get lots of exercise";
australianSheperd[12] = "   - Have a balanced, heathly diet";
australianSheperd[13] = "   - Brush teeth regularly";

//credit to: https://www.ellevetsciences.com/pet-care/breed-profile-all-about-french-bulldogs/
var frenchie = new Array();
frenchie[0] = "<strong>Basic Information</strong>"
frenchie[1]= "- Weight: 16-28 lbs";
frenchie[2]= "- Height: 12 inches";
frenchie[3]= "- Their lifespan is: 11-14 years";
frenchie[4]= "- Originated from England and were sent to work in France";
frenchie[5]= "- They do not like to exercise";
frenchie[6]= "- Bred for companionship";
frenchie[7]= "<strong>Health Risks:</strong>";
frenchie[8]= "     - Skin problems, breathing problem(because of pushed in nose), ";
frenchie[9]= "ear infections";
frenchie[10]= "<strong>Make sure: </strong>";
frenchie[11]= "     - They get lots of exercise";
frenchie[12]= "     - Have a balanced, heatly diet";
frenchie[13]= "     - Clean ears regularily";

//credit to: https: //www.akc.org/expert-advice/dog-breeds/german-shepherd-dog-facts/
var germanSheperd = new Array();
germanSheperd[0] = "<strong>Basic Information</strong>"
germanSheperd[1] = "- Height: Male:24-26in Female:22-24in";
germanSheperd[2] = "- Weight: Male: 66-88lbs Female: 49-71lbs";
germanSheperd[3] = "- Their lifespan is: 9-13 years";
germanSheperd[4] = "- Great sniffers";
germanSheperd[5] = "   - Commonly used as police dogs";
germanSheperd[6] = "- Incredibly smart";
germanSheperd[7] = "- Super active";
germanSheperd[8] = "- Originated from Germany";
germanSheperd[9] = "<strong>Health Risks:</strong>";
germanSheperd[10] = "   - Hip dysplasia, Diabetes, Elbow displasia, Dental Issues(Gingavitus)";
germanSheperd[11] = "<strong>Make sure: </strong>";
germanSheperd[12] = "   - They get lots of exercise";
germanSheperd[13] = "   - Have a balanced, heatly diet";
germanSheperd[14] = "   - Brush teeth regularly";

//credit to: https://www.akc.org/expert-advice/dog-breeds/10-facts-about-golden-retrievers/
var goldenRetriever = new Array();
goldenRetriever[0] = "<strong>Basic Information</strong>"
goldenRetriever[1] = "- Height: Male: 22-24in Female: 20-22in";
goldenRetriever[2] = "- Weight: Female: 55-57lbs Male: 65-75lbs";
goldenRetriever[3] = "- Lifespan: 10-12 years";
goldenRetriever[4] = "- Originated from Scotland";
goldenRetriever[5] = "- Naturally mouthy";
goldenRetriever[6] = "- Love exercising";
goldenRetriever[7] = "- Loves to cuddle";
goldenRetriever[8] = "- Great therapy dog";
goldenRetriever[9] = "<strong>Health Risks:</strong>";
goldenRetriever[10] = "- Cancer, Allergies, hip dysplasia";
goldenRetriever[11] = "<strong>Make sure: </strong>";
goldenRetriever[12] = "- They get lots of exercise";
goldenRetriever[13] = "- Have a balanced, heatly diet";
goldenRetriever[14] = "- Avoid chemicals that can cause cancer";

//credit to: https://www.akc.org/expert-advice/lifestyle/8-facts-about-labrador-retrievers/
var labradorRetriever = new Array();
labradorRetriever[0] = "<strong>Basic Information</strong>"
labradorRetriever[1] = "- Lifespan: 10-12 years";
labradorRetriever[2] = "- Height: Male: 57-62cm, Female: 55-60cm";
labradorRetriever[3] = "- Weight: Male: 63.3-85.3lbs, Female: 49.4 -76.7lbs";
labradorRetriever[4] = "- Love water";
labradorRetriever[5] = "- Strong tail used to guide itself in the water";
labradorRetriever[6] = "- Come in three colors: yellow, black, chocolate";
labradorRetriever[7] = "- Originally bred for hunting";
labradorRetriever[8] = "- Originated from Newfoundland";
labradorRetriever[9] = "<strong>Health Risks:</strong>";
labradorRetriever[10] = "- Obesity, Heart disease, joint problems";
labradorRetriever[11] = "<strong>Make sure: </strong>";
labradorRetriever[12] = "- They get lots of exercise";
labradorRetriever[13] = "- Have a balanced, heatly diet";
labradorRetriever[14] = "- Keep track of weight regularly";

//credit to: https://www.akc.org/expert-advice/lifestyle/fun-facts-about-the-pembroke-welsh-corgi/
var pembrokeWelshCorgi = new Array();
pembrokeWelshCorgi[0] = "<strong>Basic Information</strong>"
pembrokeWelshCorgi[1] = "- Lifespan: 12-13 years";
pembrokeWelshCorgi[2] = "- Height: male: 10–12 inches, female: 10–12 inches";
pembrokeWelshCorgi[3] = "- Weight: male: 22–31 lbs, female: 22–29 lbs";
pembrokeWelshCorgi[4] = "- Originated from Pembrokeshire";
pembrokeWelshCorgi[5] = "- Fun Fact: Corgi means “dwarf dog”";
pembrokeWelshCorgi[6] = "- Because they are so low on the ground,";
pembrokeWelshCorgi[7] = "their tail is often cut off when they are puppies";
pembrokeWelshCorgi[8] = "- If their tail is accidentally stepped on, it could damage their spine";
pembrokeWelshCorgi[9] = "- Great herding dogs";
pembrokeWelshCorgi[10] = "<strong>Health Risks:</strong>";
pembrokeWelshCorgi[11] = "- Back problems, Heart disease, bleeding disorder";
pembrokeWelshCorgi[12] = "<strong>Make sure: </strong>";
pembrokeWelshCorgi[13] = "- They get lots of exercise";
pembrokeWelshCorgi[14] = "- Have a balanced, heatly diet";
pembrokeWelshCorgi[15] = "- Blood checked";

//credit to: https://www.arlboston.org/5-facts-about-pit-bull-type-dogs/
var pitbull = new Array();
pitbull[0] = "<strong>Basic Information</strong>"
pitbull[1] = "- Weight: male: 35-60lbs, female: 30-50lbs";
pitbull[2] = "- Height: 17-19in";
pitbull[3] = "- Lifespan: 12-14 years";
pitbull[4] = "- Pitbull is a term used for these terriers: Staffordshire Bull Terrier,";
pitbull[5] = "American Staffordshire Terrier, and American Pit Bull Terrier";
pitbull[6] = "- Bred for bullfighting";
pitbull[7] = "- Loyal, quick learners, and love to exercise";
pitbull[8] = "- Originated from the United States/United Kingdom";
pitbull[9] = "- The pit bull terrier breed has a lot of diversity";
pitbull[10] = "<strong>Health Risks:</strong>";
pitbull[11] = "- Hip dysplasia, allergies, joint problems";
pitbull[12] = "<strong>Make sure: </strong>";
pitbull[13] = "- They get lots of exercise";
pitbull[14] = "- Have a balanced, heatly diet";
pitbull[15] = "- Keep an eye on their joints";

//credit to: https://wagwalking.com/daily/13-cool-facts-about-pomeranians
var pomeranian = new Array();
pomeranian[0] = "<strong>Basic Information</strong>"
pomeranian[1] = "- Weight: 4.2-7.7lbs";
pomeranian[2] = "- Height: 9-11in";
pomeranian[3] = "- Lifespan: 13-15 years";
pomeranian[4] = "- Originated from Poland/Germany";
pomeranian[5] = "- Come in 23 different color combinations";
pomeranian[6] = "- As Pomeranians age, their fur color changes";
pomeranian[7] = "- Pomeranians can give birth to twins, which is rare for dogs";
pomeranian[8] = "<strong>Health Risks:</strong>";
pomeranian[9] = "- Hair loss/skin disease like Black Skin Disease, obesity, ";
pomeranian[10] = " and dental problems";
pomeranian[11] = "<strong>Make sure: </strong>";
pomeranian[12] = "- They get lots of exercise";
pomeranian[13] = "- Have a balanced, healthy diet";
pomeranian[14] = "- Brush teeth regularly";

//credit to: https://www.akc.org/expert-advice/lifestyle/10-facts-about-poodles/
var poodle = new Array();
poodle[0] = "<strong>Basic Information</strong>"
poodle[1] = "- Weight: 45-70lbs (standard)";
poodle[2] = "- Height: 15in (standard)";
poodle[3] = "- Lifespan: 12-15 years";
poodle[4] = "- Originated from Germany";
poodle[5] = "- Come in three sizes: toy, miniature, standard ";
poodle[6] = "- They have hair, not fur";
poodle[7] = "- Their hair is like human hair";
poodle[8] = "- Originally bred as hunting dogs";
poodle[9] = "<strong>Health Risks:</strong>";
poodle[10] = "- Cancer, hip dyspasia, skin disease ";
poodle[11] = "<strong>Make sure: </strong>";
poodle[12] = "- They get lots of exercise";
poodle[13] = "- Have a balanced, healthy diet";
poodle[14] = "- Brush teeth regularly";

//credit to: https://www.embracepetinsurance.com/waterbowl/article/9-fun-facts-about-rottweilers
var rottweiler = new Array();
rottweiler[0] = "<strong>Basic Information</strong>"
rottweiler[1] = "- Lifespan: 9-10 years";
rottweiler[2] = "- Height: female: 22–25 inches, male: 24–27 inches";
rottweiler[3] = "- Weight: female: 77–110 lbs, male: 110–130 lbs";
rottweiler[4] = "- Originated from Germany";
rottweiler[5] = "- Almost went extinct";
rottweiler[6] = "- Are actually really gently and affectionate";
rottweiler[7] = "<strong>Health Risks:</strong>";
rottweiler[8] = "- Epilepsy, cancer, joint problems";
rottweiler[9] = "<strong>Make sure: </strong>";
rottweiler[10] = "- They get lots of exercise";
rottweiler[11] = "- Have a balanced, healthy diet";
rottweiler[12] = "- Keep track of weight";

//credit to: https://www.akc.org/expert-advice/dog-breeds/shih-tzu-facts/
var shihTzu = new Array();
shihTzu[0] = "<strong>Basic Information</strong>"
shihTzu[1] = "- Lifespan: 13-15 years";
shihTzu[2] = "- Height: 8-11in";
shihTzu[3] = "- Weight: 8.8-16lbs";
shihTzu[4] = "- Originated from Tibet";
shihTzu[5] = "- The breed is more than 1000 years old";
shihTzu[6] = "- Shih Tzu means “little lion”";
shihTzu[7] = "- Almost went extinct";
shihTzu[8] = "<strong>Health Risks:</strong>";
shihTzu[9] = "- Breathing issues, heart failure, joint problems";
shihTzu[10] = "<strong>Make sure: </strong>";
shihTzu[11] = "- They get lots of exercise";
shihTzu[12] = "- Have a balanced, heatly diet";
shihTzu[13] = "- Brush teeth regularly";

//credit to: https://www.britannica.com/animal/Siberian-husky
var siberianHuskies = new Array();
siberianHuskies[0] = "<strong>Basic Information</strong>"
siberianHuskies[1] = "- Weight: female: 35–51 lbs, male: 44–60 lbs";
siberianHuskies[2] = "- Height: female: 20–22 inches, male: 21–24 inches";
siberianHuskies[3] = "- Lifespan: 13-14 years";
siberianHuskies[4] = "- Originated from Siberia, Russia";
siberianHuskies[5] = "- Known to be mischievous and loyal as well as being very mouthy";
siberianHuskies[6] = "- Can work in extremely cold conditions";
siberianHuskies[7] = "- Often have two colored eyes, known as heterochromia";
siberianHuskies[8] = "<strong>Health Risks:</strong>";
siberianHuskies[9] = "- Cancer, Heart disease, Cataracts(eye problems)";
siberianHuskies[10] = "<strong>Make sure: </strong>";
siberianHuskies[11] = "- They get lots of exercise";
siberianHuskies[12] = "- Have a balanced, heatly diet";
siberianHuskies[13] = "- Get eyes checked regularly";

//health test mode question array
var testMode = new Array();
testMode[0] = "What is one of the most common dental diseases that occur for dogs?";
testMode[1] = "What’s one of the most common health risks for dogs?";
testMode[2] = "How many hours of exercise should dogs get on a daily average?";
testMode[3] = "What is something that every dog should receive?";
testMode[4] = "Which dog breed is known for being mouthy, especially as a puppy?";
testMode[5] = "Which of the following dogs usually have heterochromia?";
testMode[6] = "Which dog is known to have Black Skin disease as it gets older?";
testMode[7] = "It is important that a dog has:";
testMode[8] = "Why does the French Bulldog typically suffer from breathing issues?";
testMode[9] = "Which of the following dogs commonly suffer from hypothyroidism?";
testMode[10] = "What could happen if you were to step on a Corgi’s uncut tail?";
testMode[11] = "Which of the following dogs are more likely to have cataract problems?";
testMode[12] = "Which of the following dogs have human hair for their coat?";
testMode[13] = "You should brush your dog's teeth:";
testMode[14] = "What should you do if your dog has an ear infection?";

//health test mode multiple chioce array
var multiple = new Array();
multiple[0] = "Gingivitis";
multiple[1] = "Dysplasia";
multiple[2] = "Plaque";
multiple[3] = "Cardiac arrest";

multiple[4] = "Picky eaters";
multiple[5] = "Obesity";
multiple[6] = "Some type of dysplasia";
multiple[7] = "Allergies";

multiple[8] = "6 hours";
multiple[9] = "30 minutes";
multiple[10] = "1 hour 30 minutes";
multiple[11] = "2 hours";

multiple[12]= "Time with their owners";
multiple[13] = "Isolation";
multiple[14] = "As many treats as they want";
multiple[15] = "Harsh treatment";

multiple[16] = "Chihuahua";
multiple[17] = "Siberian Husky";
multiple[18] = "Golden Retriever";
multiple[19] = "Rottweiler";

multiple[20] = "Corgi";
multiple[21] = "Poodle";
multiple[22] = "Beagle";
multiple[23] = "Siberian Husky";

multiple[24] = "Pomeranian";
multiple[25] = "Pitbull Terrier";
multiple[26] = "Golden Retriever";
multiple[27] = "Dachshund";

multiple[28] = "Lots of toys";
multiple[29] = "Lots of friends";
multiple[30] = "A healthy diet";
multiple[31] = "Treats everyday";

multiple[32] = "Because they get too much exercise";
multiple[33] = "Because they sleep all day";
multiple[34] = "Because of their pushed in nose";
multiple[35] = "Because of their short feet";

multiple[36] = "Beagles";
multiple[37] = "Golden Retriever";
multiple[38] = "Poodle";
multiple[39] = "Pitbull terrier";

multiple[40] = "They’d fall down";
multiple[41] = "Their spine could potentially be damaged";
multiple[42] = "Nothing would happen";
multiple[43] = "They’d jump up and down with joy";

multiple[44] = "Siberian Husky";
multiple[45] = "Poodle";
multiple[46] = "Pitbull terrier";
multiple[47] = "Rottweiler";

multiple[48] = "Golden Retriever";
multiple[49] = "Labrador Retriever";
multiple[50] = "French Bulldog";
multiple[51] = "Poodle";

multiple[52] = "Once a day";
multiple[53] = "Once a week";
multiple[54] = "Twice a day";
multiple[55] = "Twice a week";

multiple[56] = "Yell in their ear";
multiple[57] = "Go to the vet to get it checked";
multiple[58] = "Do nothing";
multiple[59] = "Take them swimming";

//health test mode answers array
var testAnswers = new Array();
testAnswers[0] = "a";
testAnswers[1] = "c";
testAnswers[2] = "c";
testAnswers[3] = "a";
testAnswers[4] = "b";
testAnswers[5] = "d";
testAnswers[6] = "a";
testAnswers[7] = "c";
testAnswers[8] = "c";
testAnswers[9] = "a";
testAnswers[10] = "b";
testAnswers[11] = "a";
testAnswers[12] = "d";
testAnswers[13] = "c";
testAnswers[14] = "b";

//basic info mode question array
var testModeBasic = new Array();
testModeBasic[0] = "How many combinations of fur color can Pomeranians have?";
testModeBasic[1] = "What were Labrador Retrievers originally bred for?";
testModeBasic[2] = "Which dog is known for loving the water?";
testModeBasic[3] = "Where did the Golden Retriever originate from?";
testModeBasic[4] = "What were French Bulldogs bred for?";
testModeBasic[5] = "Which of the following dogs is the smallest in height?";
testModeBasic[6] = "Where did the Shih Tzu originate from?";
testModeBasic[7] = "On average, how long do Pitbull Terriers live?";
testModeBasic[8] = "Which of the following dogs almost went extinct?";
testModeBasic[9] = "Why was it especially useful that Beagles had white-tipped tails?";
testModeBasic[10] = "The following dog is not actually considered a dog breed:";
testModeBasic[11] = "What does Shih Tzu translate to?";
testModeBasic[12] = "Which dog is actually a really good guard dog?";
testModeBasic[13] = "Siberian Huskies are know for liking to to:";
testModeBasic[14] = "What is the most common workforce for German Shepherd?";

//basic info mode multiple choice array
var multipleBasic = new Array();
multipleBasic[0] = "4";
multipleBasic[1] = "23";
multipleBasic[2] = "15";
multipleBasic[3] = "30";

multipleBasic[4] = "Hunting";
multipleBasic[5] = "Caring for children";
multipleBasic[6] = "Herding cattle";
multipleBasic[7] = "Help in the butcher house";

multipleBasic[8] = "Poodle";
multipleBasic[9] = "Corgi";
multipleBasic[10] = "Labrador Retriever";
multipleBasic[11] = "Chihuahua";

multipleBasic[12]= "England";
multipleBasic[13] = "America";
multipleBasic[14] = "Ireland";
multipleBasic[15] = "Scotland";

multipleBasic[16] = "Herding cattle";
multipleBasic[17] = "Companionship";
multipleBasic[18] = "Hunting";
multipleBasic[19] = "Bull Fighting";

multipleBasic[20] = "Chihuahua";
multipleBasic[21] = "Companionship";
multipleBasic[22] = "Dachshund";
multipleBasic[23] = "Beagle";

multipleBasic[24] = "Nepal";
multipleBasic[25] = "Japan";
multipleBasic[26] = "Tibet";
multipleBasic[27] = "Siberia";

multipleBasic[28] = "30 years";
multipleBasic[29] = "20 years";
multipleBasic[30] = "13 years";
multipleBasic[31] = "7 years";

multipleBasic[32] = "Beagle";
multipleBasic[33] = "Golden Retriever";
multipleBasic[34] = "Corgi";
multipleBasic[35] = "Rottweiler";

multipleBasic[36] = "Made it easier to be spotted when hunting";
multipleBasic[37] = "They looked better like that";
multipleBasic[38] = "It helped with swimming";
multipleBasic[39] = "Having a white-tipped tail didn't have any benefit";

multipleBasic[40] = "Dachshund";
multipleBasic[41] = "Pitbull Terrier";
multipleBasic[42] = "Shih Tzu";
multipleBasic[43] = "Australian Shepherd";

multipleBasic[44] = "Great Tiger";
multipleBasic[45] = "Big Lion";
multipleBasic[46] = "Little Lion";
multipleBasic[47] = "Little Tiger";

multipleBasic[48] = "Chihuahua";
multipleBasic[49] = "Dachshund";
multipleBasic[50] = "French Bulldog";
multipleBasic[51] = "Poodle";

multipleBasic[52] = "Play in the sand";
multipleBasic[53] = "Go to the beach";
multipleBasic[54] = "Play in the snow";
multipleBasic[55] = "Sit outside when it's really hot";

multipleBasic[56] = "Police Force";
multipleBasic[57] = "Therapist dog";
multipleBasic[58] = "Service dog";
multipleBasic[59] = "Training helper";

//basic info mode answer array
var multipleBasicAnswer = new Array();
multipleBasicAnswer[0] = "b";
multipleBasicAnswer[1] = "a";
multipleBasicAnswer[2] = "c";
multipleBasicAnswer[3] = "d";
multipleBasicAnswer[4] = "b";
multipleBasicAnswer[5] = "a";
multipleBasicAnswer[6] = "c";
multipleBasicAnswer[7] = "c";
multipleBasicAnswer[8] = "d";
multipleBasicAnswer[9] = "a";
multipleBasicAnswer[10] = "b";
multipleBasicAnswer[11] = "c";
multipleBasicAnswer[12] = "a";
multipleBasicAnswer[13] = "c";
multipleBasicAnswer[14] = "a";

//simulation mode question array
var simMode = new Array();
simMode[0] = "<strong>Oh no! Your dog ate chocolate. You left them alone for a couple of minutes and when you returned, you found them in an empty chocolate bar wrapper. What should you do?";
simMode[1] = "<strong>Watch out! Your dog got off the leash. They are now heading towards a busy street. What should you do?";
simMode[2] = "<strong>One summer day, you and your dog are sitting at home together. You turn to the digital thermometer and gasp as you read, “106°F”. You look over your dog and see them panting heavily. You take off the blanket covering them, but they continue to pant. What should you do?";
simMode[3] = "<strong>Oh no, your dog got food poisoning! They are having severe diarrhea and vomiting constantly. They’ve been pooping all over your lawn and not acting normally. What should you do?";
simMode[4] = "<strong>You recently changed your dog’s food, but after a couple of days, you notice that they’ve been acting differently. What should you do?";

//simulation mode multiple choice array
var multipleSim = new Array();
multipleSim[0] = "a) Nothing! Chocolate is harmless to dogs!";
multipleSim[1] = "b) Immediately feed your dog hydrogen peroxide.";
multipleSim[2] = "c) Take them on a walk and hope that they poop it out.";
multipleSim[3] = "d) Take them out to play with the neighbor's dog.";

multipleSim[4] = "a) Stay calm and firmly call your dog. ";
multipleSim[5] = "b) Chase your dog.";
multipleSim[6] = "c) Start panicking and shout out for your dog.";
multipleSim[7] = "d) Stay in one place so that they'll eventually realize that you’re not there.";

multipleSim[8] = "a) Take them outside for a walk.";
multipleSim[9] = "b) Turn up the heat so they can sweat it out.";
multipleSim[10] = "c) Refill their water or turn on the air conditioner.";
multipleSim[11] = "d) Nothing! They’ll get over it!";

multipleSim[12]= "a) Feed them human food and hope that they’ll get better.";
multipleSim[13] = "b) Give them grapes and onions.";
multipleSim[14] = "c) Nothing, it will pass.";
multipleSim[15] = "d) Give them plain rice, a little bit of chicken, and some pumpkin.";

multipleSim[16] = "a) Continue feeding them the new dog food.";
multipleSim[17] = "b) Slowly introduce the new food into their diet with their old diet.";
multipleSim[18] = "c) Look for new dog food for them.";
multipleSim[19] = "d) Ignore it, it probably has nothing to do with the new food.";

//simulation mode pictures array
var simPics = new Array();
simPics[0] = 'simOne';
simPics[1] = 'simTwo';
simPics[2] = 'simThree';
simPics[3] = 'simFour';
simPics[4] = 'simFive';

//simulation mode answer array
var multipleSimAnswer = new Array();
multipleSimAnswer[0] = "b";
multipleSimAnswer[1] = "a";
multipleSimAnswer[2] = "c";
multipleSimAnswer[3] = "d";
multipleSimAnswer[4] = "b";

////simulation mode feedback array
var multipleSimFeedback = new Array();
multipleSimFeedback[0] = "<br>The quickest home remedy when your dog eats chocolate is to feed them 3% hydrogen peroxide. Look up the recommended amount for your dog's weight and always have some on hand, in case of emergencies. This will stimulate your dog to throw up. To catch their throw-up, put a plastic bag over their mouth and calm them down. It might take a couple of minutes for them to vomit, so be patient! If they still haven’t thrown up, immediately go to the vet.";
multipleSimFeedback[1] = "<br>Stay calm and don't panic. If you start chasing after them, your dog might think it’s a game of chase and continue running. Make sure you call them firmly so they understand they must come back.";
multipleSimFeedback[2] = "<br>When it is super hot outside, it is very likely for your dog to get a heat stroke. On hot summer days, make sure that your dog's water bowl is constantly refilled and chilled. Giving your dog frozen treats and turning on the air conditioner is a great way for your dog to cool down as well. Don’t take your dog outside for walks, but rather take walks inside your house or do an alternative indoor activity.";
multipleSimFeedback[3] = "<br>The quickest home remedy is to give your dog plain rice, chicken, and some pumpkin. Do not give them grapes or onions because they are toxic for dogs. If you give them human food, it might worsen their state so make sure they have a clean and simple diet. If your dog's condition does not get better within a couple of days, schedule an appointment with their vet.";
multipleSimFeedback[4] = "<br>Slowly introduce the new dog food into your dog's diet. If you switch to a different diet too quickly, this might cause them an upset stomach. Changing their food will introduce new bacteria into their stomach that might not be easy to adjust to. It is recommended not to change their food frequently, but if it is needed, gradually introduce the new food. If you notice anything off about them, stop giving them more of the new diet.";

//arrays for comparing answers for the Health mode and Basic Info mode
var userAnswer = new Array();
var realAnswer = new Array();

//code used from Mr. DeRuiter's program for storage.js: moves the pages
function goToPage(nextPage)
{
	localStorage.setItem("myValue", value);
	window.location.href = nextPage;
	location.replace(nextPage);
	
}

//new thing we learnt: reply_click method found here:
//https://stackoverflow.com/questions/10420996/getting-a-button-id-on-click-and-applying-it-to-a-function-with-javascript
//local storage: 
//https://www.w3schools.com/jsref/prop_win_localstorage.asp
function reply_click(clicked_id)
{
     dogName = clicked_id;
     valueName = document.getElementById(dogName).value;
     localStorage.setItem("dogValue", valueName);
     localStorage.setItem("dogName", dogName);
     goToPage('more.html');
}

//new thing we used in our program: appendchild and img information used from here for the images:
//https://www.w3schools.com/jsref/met_node_appendchild.asp
//https://www.w3schools.com/tags/att_img_alt.asp
//all the images used here are in the links with the 'dog arrays'
function dogInfo()
{
	var line1 = "";
	var line2 = "";
	var imageForDog = "";
	var name = localStorage.getItem("dogName");
	var valueDog = localStorage.getItem("dogValue");
	const imageContainer = document.getElementById('stick');
    document.getElementById("dog").innerHTML = name;
    //this method uses ITERATION through for loops
    //first uses SELECTION to check which button the user selected
    //then uses a for loop to store all the information and print to the screen
    //this also MANAGES COMPLEXITY as rather than having several lines for 
		// all the dog information, it is stored in arrays then accessed
		// when necessary.
    if(valueDog == "beagle")
    {
		for(let i = 0; i < beagle.length; i++)
		{
			line1 += "<br>" + beagle[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'beagle.png';
		img.alt = 'beagle';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	if(valueDog == "chihuahua")
	{
		for(let i = 0; i < beagle.length; i++)
		{
			line1 += "<br>" + chihuahua[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'chihuahua.png';
		img.alt = 'chihuahua';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	if(valueDog == "dachshunds")
	{
		for(let i = 0; i < dachshunds.length; i++)
		{
			line1 += "<br>" + dachshunds[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'dachshunds.png';
		img.alt = 'dachshunds';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	if(valueDog == "australian shepherd")
	{
		for(let i = 0; i < australianSheperd.length; i++)
		{
			line1 += "<br>" + australianSheperd[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'australianSheperd.png';
		img.alt = 'australianSheperd';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	if(valueDog == "french bulldog")
	{
		for(let i = 0; i < frenchie.length; i++)
		{
			line1 += "<br>" + frenchie[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'frenchie.png';
		img.alt = 'frenchie';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	
	if(valueDog == "german shepherd")
	{
		for(let i = 0; i < germanSheperd.length; i++)
		{
			line1 += "<br>" + germanSheperd[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'germanSheperd.png';
		img.alt = 'germanSheperd';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	if(valueDog == "golden retriever")
	{
		for(let i = 0; i < goldenRetriever.length; i++)
		{
			line1 += "<br>" + goldenRetriever[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'goldenRetriever.png';
		img.alt = 'goldenRetriever';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	if(valueDog == "labrador retriever")
	{
		for(let i = 0; i < labradorRetriever.length; i++)
		{
			line1 += "<br>" + labradorRetriever[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'labradorRetriever.png';
		img.alt = 'labradorRetriever';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
		
	if(valueDog == "pembroke welsh corgi")
	{
		for(let i = 0; i < pembrokeWelshCorgi.length; i++)
		{
			line1 += "<br>" + pembrokeWelshCorgi[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'pembrokeWelshCorgi.png';
		img.alt = 'pembrokeWelshCorgi';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	
	if(valueDog == "pitbull terrier")
	{
		for(let i = 0; i < pitbull.length; i++)
		{
			line1 += "<br>" + pitbull[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'pitbull.png';
		img.alt = 'pitbull';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	
	if(valueDog == "pomeranian")
	{
		for(let i = 0; i < pomeranian.length; i++)
		{
			line1 += "<br>" + pomeranian[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'pomeranian.png';
		img.alt = 'pomeranian';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	
	if(valueDog == "poodles")
	{
		for(let i = 0; i < poodle.length; i++)
		{
			line1 += "<br>" + poodle[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'poodle.png';
		img.alt = 'poodle';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	
	if(valueDog == "rottweilers")
	{
		for(let i = 0; i < rottweiler.length; i++)
		{
			line1 += "<br>" + rottweiler[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'rottweiler.png';
		img.alt = 'rottweiler';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
	
	if(valueDog == "shih tzu")
	{
		for(let i = 0; i < shihTzu.length; i++)
		{
			line1 += "<br>" + shihTzu[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'shihTzu.png';
		img.alt = 'shihTzu';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}

	if(valueDog == "siberian huskies")
	{
		for(let i = 0; i < siberianHuskies.length; i++)
		{
			line1 += "<br>" + siberianHuskies[i];
		}
		document.getElementById("infoForDog").innerHTML = line1;
		var img = document.createElement('img');
		img.src = 'siberianHuskies.png';
		img.alt = 'siberianHuskies';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
		line1 = "";
	}
		
	
}

//this method gets the questions and multiple choice for the HEALTH TEST MODE
function getQuestion()
{
	 num1 = Math.floor(Math.random() * testMode.length);
	 questionOne = testMode[num1];
	 ar1 = multiple[((num1+1)* 4)- 4];
	 ar2 = multiple[((num1+1)* 4)- 3];
	 ar3 = multiple[((num1+1)* 4)- 2];
	 ar4 = multiple[((num1+1)* 4)- 1];
	 let linear1 = "<label><input type=radio id= \"ar1\"  name= first value= a></input>"+ar1+"</label>";
	 let linear2 = "<label><input type=radio id= \"ar2\"  name= first value= b></input>"+ar2+"</label>";
	 let linear3 = "<label><input type=radio id= \"ar3\"  name= first value= c></input>"+ar3+"</label>";
	 let linear4 = "<label><input type=radio id= \"ar4\"  name= first value= d></input>"+ar4+"</label>";
	
	 //these while loops are used in these methods to make sure the same question isn't put more than once on the same test
	 num2 = Math.floor(Math.random() * testMode.length);
	 while(num2 == num1)
	 {
		 num2 = Math.floor(Math.random() * testMode.length);
	 }
	 questionTwo = testMode[num2];
	 br1 = multiple[((num2+1)* 4)- 4];
	 br2 = multiple[((num2+1)* 4)- 3];
	 br3 = multiple[((num2+1)* 4)- 2];
	 br4 = multiple[((num2+1)* 4)- 1];
	 let linebr1 = "<label><input type=radio id= \"br1\"  name= second value= a></input>"+br1+"</label>";
	 let linebr2 = "<label><input type=radio id= \"br2\"  name= second value= b></input>"+br2+"</label>";
	 let linebr3 = "<label><input type=radio id= \"br3\"  name= second value= c></input>"+br3+"</label>";
	 let linebr4 = "<label><input type=radio id= \"br4\"  name= second value= d></input>"+br4+"</label>";
	
	 num3 = Math.floor(Math.random() * testMode.length);
	 while(num3 == num1 || num3 == num2)
	 {
		 num3 = Math.floor(Math.random() * testMode.length);
	 }
	 questionThree = testMode[num3];
	 cr1 = multiple[((num3+1)* 4)- 4];
	 cr2 = multiple[((num3+1)* 4)- 3];
	 cr3 = multiple[((num3+1)* 4)- 2];
	 cr4 = multiple[((num3+1)* 4)- 1];
	 let linecr1 = "<label><input type=radio id= \"cr1\"  name= third value= a></input>"+cr1+"</label>";
	 let linecr2 = "<label><input type=radio id= \"cr2\"  name= third value= b></input>"+cr2+"</label>";
	 let linecr3 = "<label><input type=radio id= \"cr3\"  name= third value= c></input>"+cr3+"</label>";
	 let linecr4 = "<label><input type=radio id= \"cr4\"  name= third value= d></input>"+cr4+"</label>";
	
	 num4 = Math.floor(Math.random() * testMode.length);
	 while(num4 == num3 || num4 == num2 || num4 == num1)
	 {
		 num4 = Math.floor(Math.random() * testMode.length);
	 }
	 questionFour = testMode[num4];
	 dr1 = multiple[((num4+1)* 4)- 4];
	 dr2 = multiple[((num4+1)* 4)- 3];
	 dr3 = multiple[((num4+1)* 4)- 2];
	 dr4 = multiple[((num4+1)* 4)- 1];
	 let linedr1 = "<label><input type=radio id= \"dr1  \" name=fourth value= a></input>"+dr1+"</label>";
	 let linedr2 = "<label><input type=radio id= \"dr2 \"  name=fourth value= b></input>"+dr2+"</label>";
	 let linedr3 = "<label><input type=radio id= \"dr3 \"  name=fourth value= c></input>"+dr3+"</label>";
	 let linedr4 = "<label><input type=radio id= \"dr4 \"  name=fourth value= d></input>"+dr4+"</label>";
	 
	 num5 = Math.floor(Math.random() * testMode.length);
	 while(num5 == num4 || num5 == num3 || num5 == num2 || num5 == num1)
	 {
		 num5 = Math.floor(Math.random() * testMode.length);
	 }
	 questionFive = testMode[num5];
	 er1 = multiple[((num5+1)* 4)- 4];
	 er2 = multiple[((num5+1)* 4)- 3];
	 er3 = multiple[((num5+1)* 4)- 2];
	 er4 = multiple[((num5+1)* 4)- 1];
	 let lineer1 = "<label><input type=radio id= \"er1 \"  name=fifth value= a></input>"+er1+"</label>";
	 let lineer2 = "<label><input type=radio id= \"er2 \"  name=fifth value= b></input>"+er2+"</label>";
	 let lineer3 = "<label><input type=radio id= \"er3 \" name=fifth value=  c></input>"+er3+"</label>";
	 let lineer4 = "<label><input type=radio id=  \"er4 \"  name=fifth value= d></input>"+er4+"</label>";


	 document.getElementById("firstQ").innerHTML = questionOne;
	 document.getElementById("ar1").innerHTML = linear1;
	 document.getElementById("ar2").innerHTML = linear2;
	 document.getElementById("ar3").innerHTML = linear3;
	 document.getElementById("ar4").innerHTML = linear4;
	 document.getElementById("br1").innerHTML = linebr1;
	 document.getElementById("br2").innerHTML = linebr2;
	 document.getElementById("br3").innerHTML = linebr3;
	 document.getElementById("br4").innerHTML = linebr4;
	 document.getElementById("cr1").innerHTML = linecr1;
	 document.getElementById("cr2").innerHTML = linecr2;
	 document.getElementById("cr3").innerHTML = linecr3;
	 document.getElementById("cr4").innerHTML = linecr4;
	 document.getElementById("dr1").innerHTML = linedr1;
	 document.getElementById("dr2").innerHTML = linedr2;
	 document.getElementById("dr3").innerHTML = linedr3;
	 document.getElementById("dr4").innerHTML = linedr4;
	 document.getElementById("er1").innerHTML = lineer1;
	 document.getElementById("er2").innerHTML = lineer2;
	 document.getElementById("er3").innerHTML = lineer3;
	 document.getElementById("er4").innerHTML = lineer4;
	 document.getElementById("secondQ").innerHTML = questionTwo;
	 document.getElementById("thirdQ").innerHTML = questionThree;
	 document.getElementById("fourthQ").innerHTML = questionFour;
	 document.getElementById("fifthQ").innerHTML = questionFive;
}

//this method gets the questions and multiple choice for the BASIC INFORMATION TEST MODE
function getBasic()
{
	 num1 = Math.floor(Math.random() * testModeBasic.length);
	 questionOne = testModeBasic[num1];
	 ar1 = multipleBasic[((num1+1)* 4)- 4];
	 ar2 = multipleBasic[((num1+1)* 4)- 3];
	 ar3 = multipleBasic[((num1+1)* 4)- 2];
	 ar4 = multipleBasic[((num1+1)* 4)- 1];
	 let linear1 = "<label><input type=radio id= \"ar1\"  name= first value= a></input>"+ar1+"</label>";
	 let linear2 = "<label><input type=radio id= \"ar2\"  name= first value= b></input>"+ar2+"</label>";
	 let linear3 = "<label><input type=radio id= \"ar3\"  name= first value= c></input>"+ar3+"</label>";
	 let linear4 = "<label><input type=radio id= \"ar4\"  name= first value= d></input>"+ar4+"</label>";

	 num2 = Math.floor(Math.random() * testModeBasic.length);
	 while(num2 == num1)
	 {
		 num2 = Math.floor(Math.random() * testModeBasic.length);
	 }
	 questionTwo = testModeBasic[num2];
	 br1 = multipleBasic[((num2+1)* 4)- 4];
	 br2 = multipleBasic[((num2+1)* 4)- 3];
	 br3 = multipleBasic[((num2+1)* 4)- 2];
	 br4 = multipleBasic[((num2+1)* 4)- 1];
	 let linebr1 = "<label><input type=radio id= \"br1\"  name= second value= a></input>"+br1+"</label>";
	 let linebr2 = "<label><input type=radio id= \"br2\"  name= second value= b></input>"+br2+"</label>";
	 let linebr3 = "<label><input type=radio id= \"br3\"  name= second value= c></input>"+br3+"</label>";
	 let linebr4 = "<label><input type=radio id= \"br4\"  name= second value= d></input>"+br4+"</label>";
	
	 num3 = Math.floor(Math.random() * testModeBasic.length);
	 while(num3 == num1 || num3 == num2)
	 {
		 num3 = Math.floor(Math.random() * testModeBasic.length);
	 }
	 questionThree = testModeBasic[num3];
	 cr1 = multipleBasic[((num3+1)* 4)- 4];
	 cr2 = multipleBasic[((num3+1)* 4)- 3];
	 cr3 = multipleBasic[((num3+1)* 4)- 2];
	 cr4 = multipleBasic[((num3+1)* 4)- 1];
	 let linecr1 = "<label><input type=radio id= \"cr1\"  name= third value= a></input>"+cr1+"</label>";
	 let linecr2 = "<label><input type=radio id= \"cr2\"  name= third value= b></input>"+cr2+"</label>";
	 let linecr3 = "<label><input type=radio id= \"cr3\"  name= third value= c></input>"+cr3+"</label>";
	 let linecr4 = "<label><input type=radio id= \"cr4\"  name= third value= d></input>"+cr4+"</label>";

	 num4 = Math.floor(Math.random() * testModeBasic.length);
	 while(num4 == num3 || num4 == num2 || num4 == num1)
	 {
		 num4 = Math.floor(Math.random() * testModeBasic.length);
	 }
	 questionFour = testModeBasic[num4];
	 dr1 = multipleBasic[((num4+1)* 4)- 4];
	 dr2 = multipleBasic[((num4+1)* 4)- 3];
	 dr3 = multipleBasic[((num4+1)* 4)- 2];
	 dr4 = multipleBasic[((num4+1)* 4)- 1];
	 let linedr1 = "<label><input type=radio id= \"dr1  \" name=fourth value= a></input>"+dr1+"</label>";
	 let linedr2 = "<label><input type=radio id= \"dr2 \"  name=fourth value= b></input>"+dr2+"</label>";
	 let linedr3 = "<label><input type=radio id= \"dr3 \"  name=fourth value= c></input>"+dr3+"</label>";
	 let linedr4 = "<label><input type=radio id= \"dr4 \"  name=fourth value= d></input>"+dr4+"</label>";

	 num5 = Math.floor(Math.random() * testModeBasic.length);
	 while(num5 == num4 || num5 == num3 || num5 == num2 || num5 == num1)
	 {
		 num5 = Math.floor(Math.random() * testModeBasic.length);
	 }
	 questionFive = testModeBasic[num5];
	 er1 = multipleBasic[((num5+1)* 4)- 4];
	 er2 = multipleBasic[((num5+1)* 4)- 3];
	 er3 = multipleBasic[((num5+1)* 4)- 2];
	 er4 = multipleBasic[((num5+1)* 4)- 1];
	 let lineer1 = "<label><input type=radio id= \"er1 \"  name=fifth value= a></input>"+er1+"</label>";
	 let lineer2 = "<label><input type=radio id= \"er2 \"  name=fifth value= b></input>"+er2+"</label>";
	 let lineer3 = "<label><input type=radio id= \"er3 \" name=fifth value=  c></input>"+er3+"</label>";
	 let lineer4 = "<label><input type=radio id=  \"er4 \"  name=fifth value= d></input>"+er4+"</label>";


	 document.getElementById("firstQ").innerHTML = questionOne;
	 document.getElementById("ar1").innerHTML = linear1;
	 document.getElementById("ar2").innerHTML = linear2;
	 document.getElementById("ar3").innerHTML = linear3;
	 document.getElementById("ar4").innerHTML = linear4;
	 document.getElementById("br1").innerHTML = linebr1;
	 document.getElementById("br2").innerHTML = linebr2;
	 document.getElementById("br3").innerHTML = linebr3;
	 document.getElementById("br4").innerHTML = linebr4;
	 document.getElementById("cr1").innerHTML = linecr1;
	 document.getElementById("cr2").innerHTML = linecr2;
	 document.getElementById("cr3").innerHTML = linecr3;
	 document.getElementById("cr4").innerHTML = linecr4;
	 document.getElementById("dr1").innerHTML = linedr1;
	 document.getElementById("dr2").innerHTML = linedr2;
	 document.getElementById("dr3").innerHTML = linedr3;
	 document.getElementById("dr4").innerHTML = linedr4;
	 document.getElementById("er1").innerHTML = lineer1;
	 document.getElementById("er2").innerHTML = lineer2;
	 document.getElementById("er3").innerHTML = lineer3;
	 document.getElementById("er4").innerHTML = lineer4;
	 document.getElementById("secondQ").innerHTML = questionTwo;
	 document.getElementById("thirdQ").innerHTML = questionThree;
	 document.getElementById("fourthQ").innerHTML = questionFour;
	 document.getElementById("fifthQ").innerHTML = questionFive;
}

//this method gets the questions and multiple choice for the SIMULATION MODE
function getSim()
{
	let simNum = Math.floor(Math.random() * simMode.length);
	questionOne = simMode[simNum];
	let firstPic = simPics[simNum];
	const imageContainer = document.getElementById('simNow');
	ar1 = multipleSim[((simNum+1)* 4)- 4];
	ar2 = multipleSim[((simNum+1)* 4)- 3];
	ar3 = multipleSim[((simNum+1)* 4)- 2];
	ar4 = multipleSim[((simNum+1)* 4)- 1];
	let linear1 = "<label><input type=radio id= \"ar1\"  name= first value= a></input>"+ar1+"</label>";
	let linear2 = "<label><input type=radio id= \"ar2\"  name= first value= b></input>"+ar2+"</label>";
	let linear3 = "<label><input type=radio id= \"ar3\"  name= first value= c></input>"+ar3+"</label>";
	let linear4 = "<label><input type=radio id= \"ar4\"  name= first value= d></input>"+ar4+"</label>";
	localStorage.setItem("simQuestion", simNum);
	
	document.getElementById("firstQ").innerHTML = questionOne;
	document.getElementById("ar1").innerHTML = linear1;
	document.getElementById("ar2").innerHTML = linear2;
	document.getElementById("ar3").innerHTML = linear3;
	document.getElementById("ar4").innerHTML = linear4;
	
	//appends different images onto the screen
	if(simNum == 0)
	{
		var img = document.createElement('img');
		img.src = 'simOne.png';
		img.alt = 'simOne';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
	}
	
	if(simNum == 1)
	{
		var img = document.createElement('img');
		img.src = 'simTwo.png';
		img.alt = 'simOne';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
	}
	
	if(simNum == 2)
	{
		var img = document.createElement('img');
		img.src = 'simThree.png';
		img.alt = 'simOne';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
	}
	
	if(simNum == 3)
	{
		
		var img = document.createElement('img');
		img.src = 'simFour.png';
		img.alt = 'simOne';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
	}
	
	if(simNum == 4)
	{
		var img = document.createElement('img');
		img.src = 'simFive.png';
		img.alt = 'simOne';
		imageContainer.innerHTML = '';
		imageContainer.appendChild(img);
	}

}

//source used for checking radiobutton
//https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript#:~:text=Get%20the%20value%20of%20selected%20radio%20button%3A%20querySelector()&text=Remember%20you%20need%20to%20specify,the%20group%20of%20radio%20buttons.
//this method gets the user's answers for the HEALTH MODE
function submitAnswer() 
{    
    var firstAnswer = document.querySelector('input[name="first"]:checked'); 
    var secondAnswer = document.querySelector('input[name="second"]:checked');  
    var thirdAnswer =  document.querySelector('input[name="third"]:checked');
    var fourthAnswer =  document.querySelector('input[name="fourth"]:checked');  
    var fifthAnswer = document.querySelector( 'input[name="fifth"]:checked');   
    //example of SEQUENCING as used in other mthods as well
    //these if statements represent SEQUENCING as they have to be in order to
    //accurately alert the user to enter an answer BEFORE THE METHOD RECORDS AN ANSWER
    //they cannot be put in any other order   
    if(firstAnswer == null) 
    {   
		//used to make the user selects an answer
		alert("Please select an answer for the first question!"); 
    }   
    if(secondAnswer == null) 
    {   
		alert("Please select an answer for the second question!"); 
    }  
    if(thirdAnswer == null)
    {   
		alert("Please select an answer for the third question!"); 
    } 
    if(fourthAnswer == null)
    {   
		alert("Please select an answer for the fourth question!"); 
    } 
    if(fifthAnswer == null)
    {   
		alert("Please select an answer for the fifth question!"); 
    } 
	else 
	{
	  checkAnswers(firstAnswer.value, secondAnswer.value, thirdAnswer.value, fourthAnswer.value, fifthAnswer.value);
	}
	

}    

//this method checks the answers for the HEALTH MODE
//THIS METHOD TAKES IN THE PARAMETERS that are the user's answers
function checkAnswers(answerOne, answerTwo, answerThree, answerFour, answerFive)
{
	//array for user scores
	userAnswer[0] = answerOne;
	userAnswer[1] = answerTwo;
	userAnswer[2] = answerThree;
	userAnswer[3] = answerFour;
	userAnswer[4] = answerFive;

	//array for the actual answers
	realAnswer[0] = testAnswers[num1];
	realAnswer[1] = testAnswers[num2];
	realAnswer[2] = testAnswers[num3];
	realAnswer[3] = testAnswers[num4];
	realAnswer[4] = testAnswers[num5];
	
	//iteration in the form of a for loop to compare the user and real answers
	for(let i = 0; i < userAnswer.length; i++)
	{
		//selection used to figure out if the user selected the right answer or not
		if(userAnswer[i] == realAnswer[i])
		{
			healthCount++;
		}
	}
	
	/*sequencing used to make sure before the user sees the next screen 
	the score is recorded into local storage*/
	localStorage.setItem("score", healthCount);
	goToPage('finalDog.html');
}

//puts the score of the user onto the screen for the HEALTH MODE
function healthScore()
{
	let score = localStorage.getItem("score");
	let finalHealth = score + "/5";
	document.getElementById("score").innerHTML = finalHealth;
}

//this method gets the user's answers for the BASIC INFO MODE
function submitBasic()
{
	var firstA = document.querySelector('input[name="first"]:checked'); 
    var secondA = document.querySelector('input[name="second"]:checked');  
    var thirdA =  document.querySelector('input[name="third"]:checked');
    var fourthA =  document.querySelector('input[name="fourth"]:checked');  
    var fifthA = document.querySelector( 'input[name="fifth"]:checked');      
    if(firstA == null) 
    {   
		alert("Please select an answer for the first question!"); 
    }   
    if(secondA == null) 
    {   
		alert("Please select an answer for the second question!"); 
    }  
    if(thirdA == null)
    {   
		alert("Please select an answer for the third question!"); 
    } 
    if(fourthA == null)
    {   
		alert("Please select an answer for the fourth question!"); 
    } 
    if(fifthA == null)
    {   
		alert("Please select an answer for the fifth question!"); 
    } 
	else 
	{
	  checkBasic(firstA.value, secondA.value, thirdA.value, fourthA.value, fifthA.value);
	}
}

//this method checks the user's answers for the BASIC INFO MODE
function checkBasic(answerOne, answerTwo, answerThree, answerFour, answerFive)
{
	//array for user scores
	userAnswer[0] = answerOne;
	userAnswer[1] = answerTwo;
	userAnswer[2] = answerThree;
	userAnswer[3] = answerFour;
	userAnswer[4] = answerFive;

	//array for the actual answers
	realAnswer[0] = multipleBasicAnswer[num1];
	realAnswer[1] = multipleBasicAnswer[num2];
	realAnswer[2] = multipleBasicAnswer[num3];
	realAnswer[3] = multipleBasicAnswer[num4];
	realAnswer[4] = multipleBasicAnswer[num5];
	
	//iteration in the form of a for loop to compare the user and real answers
	for(let i = 0; i < userAnswer.length; i++)
	{
		//selection used to figure out if the user selected the right answer or not
		if(userAnswer[i] == realAnswer[i])
		{
			basicCount++;
		}
	}
	
	/*sequencing used to make sure before the user sees the next screen 
	the score is recorded into local storage*/
	localStorage.setItem("basic", basicCount);
	goToPage('finalBasic.html');
}

//puts the score of the user onto the screen for the BASIC INFO MODE	
function basicScore()
{
	let basicHere = localStorage.getItem("basic");
	let finalBasic = basicHere + "/5";
	document.getElementById("basicScore").innerHTML = finalBasic;
}	

//function called when the user clicks submit and gets the user's answer for the SIMULATION MODE
function submitSim()
{
	var firstA = document.querySelector('input[name="first"]:checked');     
    if(firstA == null) 
    {   
		alert("Please select an answer for the question!"); 
    }   
	else 
	{
	  checkSim(firstA.value);
	}
}

//checks the answers for the SIMULATION MODE
function checkSim(answerOne)
{
	let simA = localStorage.getItem("simQuestion");
	if(multipleBasicAnswer[simA] == answerOne)
	{
		 //uses green for a correct answer!
		 simFeedback = "<label style='color:green;'><strong>Great work! That was correct! The answer is " + multipleBasicAnswer[simA] + "." + multipleSimFeedback[simA];
	}
	else
	{
		//uses red for an incorrect answer!
		simFeedback = "<label style='color:red;'><strong>Sorry, but the correct answer was " +  multipleBasicAnswer[simA] + "." + multipleSimFeedback[simA];
	}
	//stored in local storage to be accessed in the next method
	localStorage.setItem("feedbackSim", simFeedback);
	goToPage('simFinal.html');
}

//records the score for the SIMULATION MODE and adds it onto the screen
function simScore()
{
	let simFeed = localStorage.getItem("feedbackSim");
	let newFeed = "";
	localStorage.setItem("feedbackSim", newFeed);
	document.getElementById("simScore").innerHTML = simFeed;
}
