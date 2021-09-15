/* Task 7
Įsivaizduokite, kad papasakojate žemiau pateiktą JOKE kolegai, kuris nėra dirbęs
su React.js ir jis nesijuokia, nes nesuprata jo. Paaiškinkite žemiau jį jam

JOKE:
Why couldn’t the React component understand the joke? 
Because it didn’t get the context.

Jūsų paaiškinimas:

Kartais tiesioginiu duomenu perdavimas (per prop'sus) buna per daug sudetinas nes yra daug componentu lygiu. 
Tada yra naudojamas context kai reikia dalinitis globaliais duomenimis. Jeigu komponentui nera perduodami
duomenys nei per propsus nei per context, tada komponentas nieko negali daryti, nes paprasciausiai neturi
duomenu.

Norint elementui perduoti context, pirma ji reikia exportuoti is pagrindinio/tevinio elemento,
tada vaikiniame elemente pasiimti jo value provider propsus, ir tokiu budu yra gaunama prieiga prie globaliu
duomenu ir nereikia zemyn, taip vadinamu elementu medziu perdavinet duomenu per paprastus propsus.

*/
