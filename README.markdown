# Programowanie internetowe » Ćwiczenie 3

## Treść zadania

> ### Opis
> 
> Zadaniem jest stworzenie formularza w HTML-u do rezerwacji pobytu w hotelu na
> czas konferencji naukowej.
> 
> Do wyboru są akademik studencki (hostel) i 3 hotele różnego standardu: 3, 4 i 5
> gwiazdkowe. Oprócz samego noclegu można zarezerwować płatne posiłki (oddzielnie
> śniadanie, obiad i kolację - obiad i kolacja tylko w hotelach). Konferencja
> odbywa się w dniach 1-4 lipca 2012. Można oczywiście zacząć pobyt przed i
> wyjechać kilka dni po konferencji. W dniu 1 lipca 2012 i 4 lipca zamiast kolacji
> są uroczyste bankiety (dodatkowo płatne). W dniach 2 i 3 lipca są fakultatywne
> wycieczki też dodatkowo płatne.
> 
> ### Formularz
> 
> Zakładamy, że rezerwacja dotyczy tylko jednej osoby. Formularz musi zawierać:
> 
> * przełącznik języka - dwie (małe) flagi na górze strony: polska i angielska,
>   kliknięcie na flagę dynamicznie zmienia język formularza, nie zmienia waluty
>   (pole tylko dla zaawansowanych studentów)
> * imię (dane tylko tekstowe + spacja, pierwsza litera imienia duża)
> * nazwisko (dane tylko tekstowe + ewentualnie myślnik)
> * login
> * hasło (hasło zagwiazdkowane)
> * potwierdzenie hasła (hasło zagwiazdkowane)
> * wybór płci (radiobutton)
> * adres email (poprawnie zwalidowany)
> * numer karty kredytowej (walidacja na liczbę cyfr)
> * data przyjazdu - patrz niżej
> * data wyjazdu - pole tekstowe, w którym wpisuje się datę w formacie YYYY-MM-DD.
>   Obok pola tekstowego powinna być umieszczona ikonka kalendarza (nie napis), po
>   kliknięciu której powinno otwierać się okienko do wyboru daty z listy. Można
>   użyć darmowej biblioteki np. http://www.google.com/#q=javascript+calendar 
> * sposób transportu: samolot (3000 zł), dojazd własny (0 zł), prom (1800 zł) -
>   opłata jednorazowa
> * radiobox: wegetarianin/nie wegetarianin (domyślnie nic nie zaznaczone), nie
>   wpływa na opłatę
> * standard hotelu: hostel i od 3 do 5 gwiazdek (ceny: 150, 400, 500, 600
>   zł/dzień)
> * standard posiłków - wyżywienie pełne (100zł/dzień), śniadania i obiadokolacje
>   (80zł/dzień), śniadania (30zł/dzień), brak (0zł)
> * lista wycieczek opcjonalnych (do wyboru z różnymi cenami)
> * przełącznik walut: PLN/Euro/USD - ustalamy kurs Euro na 4.6zł, USD - 3.5zł
> * pole do uploadu pliku graficznego (wybór z dysku) - dopuszczalne tylko pliki
>   graficzne jpg i gif, zakładamy, że będzie to skan dowodu osobistego/paszportu.
> * pole z komentarzem dla organizatorów z ograniczeniem ilości wpisanych znaków
>   do 500 i licznikiem pozostałych znaków do wpisania
> * na samym dole formularza powinno być pole tekstowe, w którym automatycznie
>   przelicza się i wpisuje suma końcowa (bez możliwości edycji). Suma zaokrąglona
>   do liczby całkowitej. Nie może następować przekłamanie w przypadku cyklicznego
>   przełączania walut.
> 
> Pola wymagane (wszystkie oprócz komentarza) powinny być oznaczone gwiazdką.
> 
> Do pól tekstowych można wpisać dowolne wartości, ale formularz powinien zostać
> wysłany na serwer tylko pod warunkiem poprawnej walidacji pól formularza po
> stronie klienta (w języku JavaScript). Po naciśnięciu przycisku `submit`, jeżeli
> dane pole nie przeszło walidacji wyświetla się krótka informacja o błędzie
> wypisana czerwoną czcionką po prawej stronie pola (bez przeładowywania strony).
> Oprócz tego należy wypisać kolejno wszystkie błędy (tzw. validation summary) na
> górze strony. Formularz nie powinien zostać wysłany, jeżeli jakiekolwiek pole
> nie przeszło walidacji.
> 
> Kalkulacja opłaty wynika z liczby dni pobytu i wybranych opcji.
> 
> ## Uwagi
> 
> Należy przyswoić sobie materiał wykładu:
> 
> * http://www.iem.pw.edu.pl/~ksiwek/pi/pi\_slajdy
> * http://www.iem.pw.edu.pl/~ksiwek/prpw/ - CGI, JavaScript, DHTML.
> 
> Obowiązują zasady programowania i przygotowania witryny jak w ćwiczeniu 1.
> Należy zwrócić szczególną uwagę na problematykę polskich znaków w formularzu
> (będzie miało to wpływ na późniejszy zapis w bazie danych).
> Kod JavaScript i CSS powinien być zawarty w oddzielnych plikach.
> 
> Użyć programu: http://www.iem.pw.edu.pl/~ksiwek/prpw/cgi/prog.php do
> wyświetlenia danych przesłanych na serwer.
> 
> via [volt](http://www.iem.pw.edu.pl/~ksiwek/pi/lab/form_cw3.html)
