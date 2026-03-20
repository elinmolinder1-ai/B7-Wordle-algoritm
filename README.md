B7 – Wordle‑algoritmer
Detta projekt innehåller två centrala algoritmer inspirerade av spelet Wordle. Fokus ligger på att implementera logiken bakom spelets regler samt att testa funktionerna med Jest.

Algoritm A – Feedback
Algoritm A tar emot två ord: spelarens gissning och det korrekta ordet.
Funktionen returnerar en array där varje bokstav markeras som:
* correct – rätt bokstav på rätt plats
* misplaced – bokstaven finns i ordet men på fel plats
* incorrect – bokstaven finns inte i ordet

Algoritmen hanterar även dubbletter enligt Wordles regler.
* Tillhörande tester verifierar:
* alla bokstäver rätt
* blandade resultat
* inga matchningar
* dubbletter

Algoritm B – Val av ord (frivillig)
Algoritm B väljer ett spelord från en lista baserat på:
* önskad ordlängd
* om dubbletter är tillåtna eller inte

Funktionen filtrerar listan, väljer ett slumpmässigt ord och returnerar null om inget ord matchar.

Tester verifierar:
* korrekt längdfiltrering
* hantering av dubbletter
* slumpmässigt val (ordet finns i listan)
* null när inga ord matchar

Testning
Alla tester körs med:
* npm test