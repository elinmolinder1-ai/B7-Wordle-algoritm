# B7-Wordle-algoritm
Översikt:
Detta projekt är en del av kursen i systemutveckling och går ut på att implementera den centrala algoritmen bakom det populära spelet Wordle.
Målet är inte att bygga hela spelet, utan att skapa den logik som avgör hur korrekt en gissning är jämfört med det hemliga ordet.

Uppgift: 
Spelet väljer ett ord (vanligtvis fem bokstäver). Spelaren gissar ett ord, och algoritmen ska:
* avgöra om gissningen är korrekt
* annars ge feedback om varje bokstav:
* är bokstaven rätt?
* finns den i ordet men på fel plats?
* finns den inte alls?
* Spelaren fortsätter gissa tills rätt ord hittas.

Moment i uppgiften:
Projektet består av följande delar:
* Utforma en lösning för algoritm A (feedback‑algoritmen).
* Planera en teststrategi för hur algoritmen ska verifieras.
* Implementera algoritmen i form av en funktion.
* Skriva minst två tester (gärna fler) som säkerställer att funktionen fungerar korrekt.
* Dokumentera teststrategin i testkoden med kommentarer.