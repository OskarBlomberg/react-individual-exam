# Individuell examination React

## Bakgrund

Uppgiften var att skapa en app som såg som denna [Figma-skiss](https://www.figma.com/file/vcgWPPy2q44oZZ2eORL1wB/Where-its-light?node-id=0%3A1). Den funktionalitet som skulle finnas kan ses nedan. (Sökfältet var inget vi skulle prioritera att implementera.) För en genomgång av biblioteken som efterfrågas under VG-kraven, se "Verktyg och bibliotek" längre ner.

## Tekniska krav för godkänt

Du skall i denna uppgift för att få godkänt visa att du behärskar följande tekniker och delar inom React:

- Pages & Components
- useState & useEffect
- Props
- API-hantering
- Routing mellan Pages
- Avancerad statehantering med Zustand

## Krav för väl godkänt

Du skall välja ut ytterligare 3 st externa bibliotek, som vi inte gått igenom i klassen och som du läser på om och implementerar i din applikation. Utöver detta så beskriver du i din _README.md_-fil, hur dessa hookar/bibliotek fungerar, samt varför du tycker att de passar just din applikation. För VG måste du även ha en god struktur på din applikation, med god uppdelning i Pages och Komponenter. Utöver det så måste ni inte dela upp koden i en massa egna custom hooks och dylikt, även om det såklart är tillåtet om man vill det.

## Övriga krav

- Er app måste inte vara pixel-perfekt mot skissen, men ni måste ha en enhetlig, responsiv design
- Appen skall se bra ut på alla skärmstorlekar mellan 375px - 500px
- Tillgänglighetskontroll/anpassning skall göras innan inlämning
- Sidan får aldrig krascha
- När en beställing gjorts skall en biljett skapas där ni genererar fram ett biljettID på 5 tecken (endast STORA BOKSTÄVER och siffror tillåtna), en Sektion och en sittplats. Vid köp av flera biljetter till ett och samma evenemang skall Sektionen vara samma på alla biljetter för det eventet, och sittplatserna skall vara bredvid varandra.

## Verktyg och bibliotek

### Axios Cache Interceptor

Hela appen ska ha "one source of truth", vilket är det api som används för eventen. Därför görs api-anrop från flera sidor i appen, men för att undvika onödiga anrop cachas resultaten, och endast om det har gått fem minuter sedan senaste anrop (default-tiden) görs ett nytt.

### Lucide-React

Endast ett få antal ikoner används i appen. Lucide är ett aktivt underhållet bibliotek vars ikoner är enkla att stajla, och de är "tree shakable", dvs. att bara de som används importeras. På så sätt blir appen mindre och snabbare.

### Nanoid

För att generera en slumpmässig kod. Det är mycket mindre än UUID, så det kändes passande för detta ändamål. Och då antalet teckentyper för denna apps koder var så begränsat var det väldigt enkelt att konfigurera Nanoid för ändamålet.

### React barcode

Genererar en streckkod utifrån en sträng. Går egentligen att konfigurera enkelt, men dokumentationen var väldigt otydlig. Konfigureras helt enkelt med props.

### Swiper

Gör element swipebara, vilket passade utmärkt för biljetterna. Tydlig dokumentation gjorde att det var enkelt att implementera en snygg lösning nästan rakt av. Skulle även ha gått att använda som huvudsaklig navigation, men routingen hade behövt göras annorlunda, och jag ville även undvika eventuell förvirring på biljettsidan.
