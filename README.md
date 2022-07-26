# Pretvarjanje heic v jpg
## Namestitev nodejs
Programe v nodejs poganjaš iz terminala: https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=hr-hr&gl=HR (ali power shell, ali cmd v windowsih). Program se zažene z ukazom ``node imePrograma.js``
- namesti nodejs https://nodejs.org/en/download/

## Namestitev git
Git je orodje za verzioniranje programske kode. Github, Gitlab in Bitbucket so orodja za shranjevanje in pregledovanje kode preko spletnega brskalnika. 
Vsako kodo, objavljeno na npr. Github lahko prenesemo na računalnik.
V terminalu napiši ukaz ``git clone povezava-do-git-repozitorija ciljna-mapa-na-racunalniku`` in koda se prenese na računalnik v ciljno mapo.

## Namestitev vseh delov programa
Programi imajo običajno nekaj dependency-jev (knjižnice, ki se jih lahko uporablja v različnih aplikacijah in vsebujejo funkcije, ki skupaj tvorijo celoto, npr. knjižnica za pretvarjanje slikovnih datotek med različnimi formati).

Znotraj mape projekta na tvojem računalniku izvedi ukaz ``npm install``.

## Uporaba našega programa
Program smo napisali tako, da v mapi programa naredimo 2 dodatni mapi: ``originals`` in ``converted``. V mapo ``originals`` shranimo originalne (.heic) datoteke.
V mapi ``originals`` se bodo pojavile jpg datoteke po tem, ko program zaženemo.

Za zagon programa poženi ukaz ``node convertMultiple.js``.
