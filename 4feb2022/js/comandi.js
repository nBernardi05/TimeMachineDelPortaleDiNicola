let tulip, com, nam, mat, log, inn, nm, logg, godMode=false
function cmd(){
    nam=' '
    logg=' '
    alert('Terminal - BETA')
    com = prompt('In questo "terminale", inserendo i comandi giusti vedrai tanti easter eggs', 'help')
    switch(com){
        case 'help':
            alert('PROVA CON name PER INIZIARE')
            break
        case 'alociN':
            document.getElementById('titol').innerHTML="alociN id elatroP lI"
            document.getElementById('ciao').innerHTML="alociN id elatroP lI"
            alert('eneB aV')
            break
        case 'name':
            alert('Salve ' + (nam = prompt('Per iniziare inserisci il tuo nome e cognome (con iniz. maiuscole)', 'Mario Fucsi')))
            switch(nam){
                case 'Tulipano Gianpierpaolo':
                    document.getElementById('ioo').innerHTML="Ciao, so la Marisa!"
                    break
                case 'Nicola Bernardi':
                    alert('Salve mio creatore!')
                    break
                case 'Annachiara Barizza':
                    alert('Buongiorno professoressa, ha visto? La ho resa parte di un easter egg', 'p.s. gli apostrofi non me li fa usare')
                    break
                case 'la prof':
                    alert('Chiedo scusa prof. Spero le piaccia il mio sito :)')
                    document.getElementById('cosafaccio').innerHTML="Cosa faccio? Nulla, devo studiare. ^_^' "
                    break
                default:
                    document.getElementById('logged').innerHTML="Non hai effettuato l'accesso, ma mi hai detto che sei " + nam
                    break
            }
            break
        case 'this site is mine':
            alert('Salve ' + (io = prompt('Chi sei?', 'Nicola')))
            document.getElementById('titol').innerHTML="Il portale di " + io
            document.getElementById('ciao').innerHTML="Il portale di " + io
            document.getElementById('ioo').innerHTML="Sono un tizio a caso che è arrivato di punto in bianco e ha reclamato questo sito"
            document.getElementById('cosafaccio').innerHTML="Ogni lunedì... non so"
            break
        case '#boba6unaclava':
            alert('Boba6unaclavaohohohhoh')
            break
        case 'cappuccino':
            alert('Sono stanco')
            break
        case 'nicola':
            alert('' + (mat = prompt('Qual è la materia che nicola odia di più? ', 'scrivi qui (non mettere lettere maiuscole)')) + '?')
            if(mat=='grammatica'){
                alert('bravo, hai indovinato! Come premio ti svelo un altro comando da inserire: name E POI la prof')
            }else{
                alert('Mi spiace, ma no.')
            }
            break
        case 'login':
            log = prompt('Accedi: ', 'username')
            inn = prompt('Accedi: ', 'password')
                if(log=='pisel' && inn=='.tk'){
                    alert('Thomas, è lei?')
                }
                if(log=='annachiarabarizza' && inn=='cappuccino'){
                    alert('Buonsalve prof')
                    document.getElementById('logged').innerHTML="Accesso effettuato come Annachiara Barizza"
                    document.getElementById('pArea').innerHTML="Pof Barizza, queste sono le novità: Intendo ampliare il terminale del sito. Provi il comando 'cappuccino'. Il sito è hostato su GitHub. github.com/nBernardi310805/pNicola.github.io"
                    logg=log
                }
                if(log=='nicolabernardi' && inn=='clavaaa'){
                    alert('Buonsalve Padrone')
                    document.getElementById('logged').innerHTML="Accesso effettuato come Nicola Bernardi"
                    document.getElementById('pArea').innerHTML="Padrone, quando Ha voglia ampli i comandi del terminale."
                    logg=log
                }
                if(log=='pietrostura' && inn=='ciaopuntobat'){
                    alert('Buonsalve Pietro')
                    document.getElementById('logged').innerHTML="Accesso effettuato come Pietro Sturaro"
                    document.getElementById('pArea').innerHTML="Ciao Pietro"
                    logg=log
                }
            break
        case 'easter egg':
            alert('Credevi davvero che fossi così prevedibile?')
            alert('Ebene sì, lo sono. Bravo hai trovato un easter egg')
            alert('In realtà sto cercando di essere prevedibile sennò non li trova nessuno gli easter egg')
            break
        case 'I am a hero':
            alert('maybe...')
            nm = prompt('E va bene. Chi sei? ', 'Tulipano Gianpierpaolo')
            document.getElementById('donaaa').innerHTML="Eroe ma taccagno: " + nm
            break
        case 'pwd':
            alert('github.com/nBernardi310805/pNicola.github.io')
            break
        case 'godMode=true':
            document.getElementById('ciao').contentEditable="true"
            document.getElementById('eroi').contentEditable="true"
            document.getElementById('titol').contentEditable="true"
            document.getElementById('whoami').contentEditable="true"
            document.getElementById('ioo').contentEditable="true"
            document.getElementById('cosafaccio').contentEditable="true"
            document.getElementById('novModif').contentEditable="true"
            document.getElementById('pA').contentEditable="true"
            document.getElementById('foot').contentEditable="true"
            document.getElementById('modTut').contentEditable="true"
            break
    }
}




function account(){
    alert('Per avere un account bisogna essere premium. Con una donazione di almeno 1€ si potrà avere account con novità esclusive, codice sorgente del sito e il proprio nome scritto in Home page nel "riquadro degli eroi"')
}
