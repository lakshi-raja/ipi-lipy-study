# 03 — Informazioni MET, ATFCM, NOTAM e dati di volo

**Riferimenti IPI:** § 2.1.2.3 – § 2.1.2.8  
**Fonte:** *IPI DIG ATS Ancona Falconara - Versione 1.000 17-07-2026.xlsb*

> Obiettivo di studio: conoscere le regole locali per la trasmissione delle informazioni meteorologiche, la gestione ATFCM, i coordinamenti ARO/CBO–NOF, i dati di volo e le strip, il regolaggio AVL e la segnalazione di pista occupata.

---

# 2.1.2.3 — Trasmissione delle informazioni agli aeromobili

## 2.1.2.3.1 — Dati meteorologici

Per rispettare quanto previsto dal MO-ATS, le informazioni meteorologiche devono essere lette sulla **HMI EAWOS** e comunicate all’utenza secondo l’ordine previsto in funzione della pista in uso.

Nelle figure EAWOS delle IPI:

- **frecce gialle** = ordine di fornitura delle informazioni complete agli **aeromobili in arrivo**;
- **frecce bianche** = ordine di fornitura delle informazioni complete agli **aeromobili in partenza**.

### Regola mentale

> **EAWOS = fonte operativa dei dati MET → seguire l’ordine ARR/DEP indicato sulla HMI.**

---

## 2.1.2.3.1.1 — Regolaggio altimetrico

I valori di pressione devono essere ricavati dal:

> **sistema di presentazione dati meteo.**

### Altitudine di transizione

# **TA = 6000 ft**

Il sistema determina automaticamente il **livello di transizione (TL)** in funzione del QNH aeroportuale.

| QNH | Livello di transizione |
|---|---:|
| **≥ 1013.2 hPa** | **FL70** |
| **995 – 1013.1 hPa** | **FL75** |
| **977 – 994.9 hPa** | **FL80** |
| **< 977 hPa** | **FL85** |

### Regola operativa

> Al momento dell’**autorizzazione all’avvicinamento** deve essere trasmesso il **QNH corrente**.

### Da memorizzare

**TA 6000 ft → TL 70 / 75 / 80 / 85 in funzione del QNH.**

---

## 2.1.2.3.1.1.1 — QFE

### **NIL**

Non sono previste specificità locali aggiuntive.

---

# 2.1.2.3.1.2 — Visibilità

## Visibilità per aeromobili in partenza

Normalmente, salvo diversa comunicazione del personale responsabile della posizione MET:

> per le partenze deve essere utilizzato lo **stesso valore di visibilità identificato per gli arrivi e disponibile su EAWOS**.

### Se VIS DEP ≠ VIS ARR

Quando:

- la visibilità da fornire agli **aeromobili in partenza**, rappresentativa delle condizioni **lungo la pista**;

è diversa da:

- quella da fornire agli **aeromobili in arrivo**, rappresentativa della **TDZ**;

il **TM**:

1. riporta il valore di visibilità per le partenze sulla **strip MET cartacea**;
2. rende la strip disponibile al personale ATS per l’utilizzo operativo.

Il personale responsabile della posizione MET comunica quando i valori precedentemente differenti devono essere nuovamente considerati uguali.

### Piste/direzioni diverse

La stessa procedura si applica se:

- decolli e atterraggi utilizzano piste diverse;
- oppure utilizzano direzioni opposte della stessa pista.

Se la visibilità per il decollo è diversa da quella per l’arrivo:

> **VIS DEP → strip MET cartacea.**

### Schema

**Normalmente:**  
VIS DEP = VIS ARR → **EAWOS**

**Se differenti:**  
VIS ARR = rappresentativa TDZ  
VIS DEP = rappresentativa lungo pista → **strip MET**

---

# 2.1.2.3.1.3 — RVR

## Trasmissometri disponibili

| Direzione pista | Posizione RVR |
|---|---|
| **RWY 22** | **TDZ** |
| **RWY 04** | **END** |

---

## Quando trasmettere la RVR

Nelle situazioni previste dal MO-ATS, la RVR deve essere fornita agli equipaggi:

1. quando **uno o entrambi i valori di visibilità sono < 1500 m**, indipendentemente dal valore RVR compreso tra **0 e 2000 m**;
2. quando la **RVR è < 1500 m**.

---

## Cambiamento significativo RVR — step

Per “cambiamento” si intende la variazione di uno o più step:

| RVR | Step |
|---|---:|
| **0–400 m** | **25 m** |
| **400–800 m** | **50 m** |
| **800–2000 m** | **100 m** |

---

## Interfaccia RVR ↔ luci pista

I sistemi RVR sono interfacciati con:

- luci **bordo pista**;
- luci **asse pista**, ove disponibili.

L’interfaccia rileva l’intensità luminosa e consente il calcolo corretto della RVR.

### Collegamento AVL OFF

In caso di avaria dell’interfaccia/collegamento:

- EAWOS continua a elaborare la RVR;
- considera le luci interessate **accese al 100%**;
- segnala sulla HMI TWR:

### **COLLEGAMENTO AVL OFF**

In tali condizioni, quando:

- uno o entrambi i valori di visibilità sono **< 1500 m**;
- oppure la **RVR è < 1500 m**;

devono essere impostate al **100% della massima intensità disponibile** esclusivamente:

- luci di **bordo pista**;
- luci di **asse pista**.

### Attenzione

> Non devono essere portati automaticamente **tutti gli AVL al 100%**.

Solo bordo e asse contribuiscono al calcolo RVR. Un’intensità eccessiva degli altri impianti può:

- aumentare il rischio di abbagliamento;
- causare inutile dispendio energetico.

### Richiesta del pilota

Se il pilota, in avvicinamento o prima del decollo, richiede un’intensità inferiore:

1. soddisfare la richiesta;
2. al termine dell’esigenza, **ripristinare il settaggio originario**.

---

# 2.1.2.3.1.4 — Vento

I dati del vento vengono forniti agli equipaggi:

> secondo MO-ATS, utilizzando i dati **EAWOS**.

### Aggiornamento

Il dato visualizzato è aggiornato:

# **ogni 5 secondi**

Poiché non sono disponibili indicazioni specifiche sui cambiamenti significativi del vento:

> all’**inizio dell’avvicinamento finale** devono essere trasmesse informazioni aggiornate su **direzione e intensità del vento al suolo**, incluse le **variazioni significative**.

---

# 2.1.2.3.1.5 — Inoltro informazioni MET ad altri enti ATS

Le informazioni meteorologiche devono essere fornite:

> **su richiesta agli enti ATS limitrofi.**

---

# 2.1.2.3.1.6 — Informazioni relative a una pista non in uso

Se necessario, ATS può chiedere al responsabile della posizione MET informazioni da **osservazione meteorologica** relative a:

- pista diversa da quella in uso;
- direzione diversa da quella in uso.

I dati da sensore sono già disponibili sul sistema di presentazione.

Le informazioni da osservazione vengono rese disponibili mediante:

> **strip MET cartacea.**

---

# 2.1.2.3.2 — ATIS

### **NIL**

---

# 2.1.2.4 — ATFCM

## Scopo

L’ATFCM gestisce i flussi di traffico per:

> **ottimizzare la capacità disponibile della rete europea ATM, bilanciandola con la domanda.**

---

# 2.1.2.4.1 — Flow Management Position (FMP)

L’FMP opera in coordinamento con:

- **Italy-NMP**;
- **NMOC**.

Fornisce il servizio ATFCM nei confronti di:

- ATCO;
- Aircraft Operator.

## Compiti FMP

L’FMP monitora continuamente:

- configurazioni operative ACC;
- **Taxi Time**;
- configurazioni di pista degli aeroporti sotto giurisdizione ACC.

Fornisce:

- informazioni al **SPV**;
- aggiornamenti al **NMOC**.

Ogni FMP è responsabile del servizio ATFCM:

- per il proprio ACC;
- per tutti gli aeroporti civili e militari sotto la giurisdizione ACC.

Le FMP dei 4 ACC sono operative:

### **H24**

---

## Richieste di regolazione

Quando Italy NMP/FMP riceve una richiesta di regolazione da un ente ATS:

1. valuta la reale necessità;
2. propone, quando possibile, misure alternative per contenere il traffico entro il massimo gestibile;
3. se l’ACC dispone di capacità residua e la soluzione è conveniente/praticabile, può assorbire il ritardo in volo tramite:
   - holding;
   - riduzioni di velocità;
   - re-routing.

### Durata iniziale della regolazione

Salvo:

- indisponibilità prolungata di un aeroporto;
- contingency ATC;

la prima emissione della regolazione:

# **non deve superare 2 ore**

---

## FMP di riferimento

### Padova FMP Controller

- **049 8230300 / 0203**
- Fax **049 8230302**

### National Network Manager

- **06 81662896**
- Cell. **334 6535003**

### Italy NMP

- **06 81664940**

---

## Compiti del personale ATS

In aggiunta alle singole procedure ATFCM, ATS:

1. coordina con FMP richieste degli equipaggi o variazioni ATFCM **successive alla messa in moto**, ad esempio:
   - nuova regolazione;
   - allocazione/revisione CTOT;
   - modifica Taxi Time;
2. segnala a FMP eventuali messaggi ATFCM comunicati dagli utenti ma **non visibili su AOIS**.

---

# 2.1.2.4.2 — Last Minute Improvement

## Scopo

Sfruttare miglioramenti di capacità resisi disponibili “last minute” in un ACC/settore.

Destinatari principali:

> voli a corto raggio con ritardi sproporzionati rispetto al tempo di volo.

## Applicabilità

Voli che operano:

- interamente nello spazio di un solo ACC;
- oppure tra **due ACC confinanti**;

e interessano tali spazi nei:

# **successivi 30 minuti**

## Possibili messaggi

- nessun’altra regolazione → **SLC (Slot Cancellation Message)**;
- altra regolazione presente → possibile **SRM (Slot Revision Message)**;
- se nessun miglioramento è possibile → **CTOT confermato**.

---

# 2.1.2.4.3 — Airport Cherry Pick (ACP)

## Scopo

Fornire agli FMP maggiore flessibilità nella gestione di **brevi picchi di traffico in arrivo**.

Destinatari principali:

- voli a corto raggio;
- voli interamente in un ACC;
- voli tra due ACC adiacenti.

### Limiti

- ritardo selezionato: **non dovrebbe superare 20 min**;
- individuazione del volo: almeno **30 min prima dell’EOBT**.

---

# 2.1.2.4.4 — Procedura CARA

## Obiettivo

Ridurre l’emissione di regolazioni ATFCM sugli aeroporti mantenendo gli arrivi entro il massimo gestibile nell’arco di:

# **60 min**

La procedura attribuisce ritardo a voli selezionati per abbattere brevi overload fino a:

# **max 40 min**

Si applica a voli in partenza da aeroporti nazionali:

- **non soggetti a regolazioni ATFCM**;

spostando in avanti l’orario di decollo fino a:

# **15 min — Departure Tolerance Window (DTW)**

---

## Procedura ATS

1. FMP comunica alla TWR:
   - voli interessati;
   - orari di decollo assegnati.
2. Alla richiesta di messa in moto ATS comunica al pilota:
   - **TONB — Take Off Not Before**.
3. Se il ritardo è prossimo al limite **DTW 15 min** e TWR non può garantirne l’aderenza:
   - richiede a FMP **estensione della DTW**.

### Nota importante

Se il ritardo assegnato è:

# **> 10 min**

e quindi riduce significativamente la tolleranza residua entro la DTW di 15 min:

> FMP deve comunicarlo con anticipo all’ente ATS.

---

# 2.1.2.4.5 — Flight Activation Monitoring (FAM)

Il piano di volo viene sospeso tramite:

### **FLS**

dopo un tempo massimo prestabilito oltre:

- **ETOT**;
- **CTOT**.

Il valore temporale applicabile è riportato in:

> **AIP ENR 1.9.1.8**

---

# 2.1.2.4.6 — Misure ATFCM tattiche

Le **Tactical Capacity Measures (TCM)**, già STAM, servono a ottimizzare la capacità disponibile.

## Minimum Departure Intervals — MDI

Gli MDI possono essere coordinati occasionalmente tra:

- ACC;
- aeroporti;
- FMP;

per evitare una regolazione nell’area ACC.

### Regole

L’applicazione MDI:

- **non elimina** l’obbligo di aderenza a **EOBT e CTOT**;
- è normalmente tattica e di breve durata;
- può interessare aeroporti singoli o gruppi di aeroporti sotto/adiacenti l’AoR ACC;
- viene coordinata direttamente fra **ACC e FMP/aeroporti**;
- **non richiede obbligatoriamente** coordinamento preliminare con NMOC.

---

# 2.1.2.4.7 — Avverse condizioni operative sugli aeroporti

Se condizioni avverse sull’aeroporto di partenza impediscono il rispetto di:

- **DTW** associate agli ETOT;
- **STW** associate ai CTOT;

NMOC può approvare un’estensione delle tolerance window per:

# **max 1 ora**

L’estensione è:

> **rinnovabile** se persistono le condizioni avverse.

### Richiesta

FMP:

1. richiede direttamente l’estensione a **NMOC**;
2. informa successivamente **Italy-NMP**.

### Casi previsti

NMOC può modificare STW/DTW in caso di:

- emergenze aeroportuali;
- failure sistemi ATC aeroporto/APP/ACC non ancora sfociata in regolazione ATFCM;
- rateo partenze sensibilmente ridotto per eventi al suolo, es. cambio pista;
- condizioni meteorologiche avverse;
- altra situazione identificabile come causa di riduzione dell’operatività aeroportuale.

---

# 2.1.2.4.8 — Eventi critici sugli aeroporti

Quando una criticità riduce la capacità aeroportuale, ad esempio:

- incidente aereo;
- neve;

la gestione è demandata all’ente ATS interessato, secondo:

- Regolamento di Scalo;
- PEA, se applicabile.

### Regolazione ATFCM

Se una criticità improvvisa riduce la capacità:

> la richiesta di regolazione deve essere effettuata alla **FMP di riferimento**.

---

# 2.1.2.4.9 — Taxi Time

Taxi Time standard ATFCM:

| Pista | Taxi Time |
|---|---:|
| **RWY 22** | **5 min** |
| **RWY 04** | **2 min** |

Se deve essere modificato:

1. coordinare con **HoC/Resp. OCS**;
2. richiedere la modifica alla **FMP di riferimento**.

---

# 2.1.2.4.10 — Messaggio REA

## Invio tramite AOIS

Il personale operativo:

1. accede a:
   - **FDMAS → Aerodrome Traffic → Aerodrome Traffic Inquiry**;
2. seleziona la tipologia di traffico;
3. seleziona data e orario di ricerca;
4. entra in Aerodrome Traffic Inquiry tramite **SEND**;
5. seleziona il piano di volo;
6. verifica l’ultimo messaggio ATFCM:
   - **SAM**
   - **SRM**;
7. agisce sulla colonna **LMG**;
8. inserisce il corretto valore **Min LineUp** nella maschera:
   - **Single Flight Data Management**;
9. seleziona il messaggio **REA**;
10. visualizza:
    - **Message Compilation**;
11. clicca **TRANSMIT**.

### AOIS indisponibile

> Richiedere alla **FMP di riferimento** l’invio del messaggio REA.

---

# 2.1.2.5 — Coordinamenti con ARO/CBO e NOF

I servizi:

- **AIS**;
- **Info MET — parte documentale**;

per l’aeroporto sono delegati a:

### **ARO/CBO Italy**

## Recapiti ARO/CBO Italy

- linea diretta
- **06 79811011** — registrato
- **366 6236741** — non registrato

---

## Compiti ARO/CBO

ARO/CBO:

- risponde a eventuali **RQS** relativi a voli IFR/VFR/misti fornendo le informazioni supplementari;
- gestisce:
  - **DLA**
  - **CHG**
  - **CNL**

  con le stesse modalità della messaggistica FPL, per voli:
  - condotti dall’aeroporto;
  - condotti da avio/elisuperfici nello spazio di competenza;
  - con FPL ricevuto in frequenza dall’ente ATS;
- comunica ad ATS eventuali richieste **ARR** presenti nel campo 18 del FPL;
- assiste ATS nella trattazione dei messaggi.

---

## Compiti ATS verso ARO/CBO

ATS comunica all’ARO/CBO:

- richieste dell’equipaggio di inoltro **DLA/CHG**;
- **ATD/ATA** di aeromobili con FPL:
  - VFR;
  - Z/Y;
- FPL ricevuti in frequenza, esclusi quelli abbreviati, per:
  - VFR;
  - Z (VFR/IFR);
- ATA dei voli arrivati a seguito di **dirottamento**, nei casi previsti dalle IPI;
- Air-Report per inoltro alla **Veglia Meteo**, esclusi quelli di wind shear, che vanno comunicati a **MFU**;
- eventuali altre informazioni richieste.

### Air-Report — dati da comunicare

Il riporto deve contenere:

1. nominativo del volo;
2. intensità del fenomeno osservato;
3. orario dell’osservazione;
4. posizione;
5. livello/altitudine.

---

## Ulteriori informazioni richieste da ARO/CBO

Possono riguardare, a titolo esemplificativo:

- dirottamenti;
- messaggi ATFCM;
- messaggi AFTN.

---

## AFIL — VFR

Per voli VFR che:

- comunicano;
- o intendono aprire un Piano di Volo in frequenza (**AFIL**);

il coordinamento ATS–ARO/CBO comprende le informazioni previste dal modulo Piano di Volo secondo MO-ATS.

---

## HEMS — dati fissi già disponibili

Per l’apertura FPL di un volo HEMS effettuato con gli elicotteri censiti nelle IPI:

> non devono essere comunicati all’ARO/CBO i dati fissi già in suo possesso.

Per la base **LIPY** è riportato:

### I-KLIO — ICARO 01

- tipo: **AW169**
- equipaggiamento di sopravvivenza: **nessuno**
- radio emergenza: **ELT e VHF**
- colore: **giallo con striscia rossa**

---

# 2.1.2.5.1 — Richiesta emissione NOTAM

Quando il personale operativo verifica la necessità di un NOTAM:

## 1. Coordinamento

> coordina con **HoC/Resp. OCS**.

Solo su indicazione dello stesso procede alla richiesta.

---

## 2. Preparazione richiesta

Modalità principale:

1. utilizza l’applicativo per la generazione NOTAM;
2. seleziona il NOTAM;
3. genera la mail;
4. sostituisce il mittente con:

### **notamlipy@enav.it**

### Alternativa manuale

- compila il modello di richiesta NOTAM;
- invia la mail da **notamlipy@enav.it** a:
  - **NOF@enav.it**
- per conoscenza:
  - HoC;
  - Resp. OCS;
  - se previsto CNS:
    - **NOTAM_Delegati_CNS@enav.it**
  - se previsto MET:
    - **METServices@enav.it**

Nel testo della mail deve specificare che la richiesta viene effettuata:

> per nome e per conto dell’**HoC**, del **CNS provider** o del **MET provider**, come applicabile.

---

## 3. Contatto NOF

Contattare:

### **NOF — 06 7908 6581**

per:

- segnalare l’invio;
- verificare correttezza e completezza dei dati;
- richiedere l’invio del NOTAM via e-mail.

---

## 4. OPS LOG

Annotare:

- la richiesta;
- il **numero NOTAM**

su:

### **OPS LOG**

---

# 2.1.2.6 — Presentazione e aggiornamento dati di volo

# 2.1.2.6.1 — Presentazione dati di volo

Il personale operativo dispone di:

- piani di volo;
- relativi aggiornamenti;

tramite:

### **AOIS-WEB → FDMAS → Aerodrome Traffic**

Il **FDMAS — Flight Data Management Automated System** è il sistema nazionale automatizzato per:

- acquisizione;
- memorizzazione

dei FPL e relativi follow-up che interessano lo spazio aereo italiano.

---

# 2.1.2.6.2 — Aggiornamento dati di volo

## 2.1.2.6.2.1 — Modifiche al FPL durante il volo

Se un aeromobile, IFR o VFR, modifica il piano di volo durante il volo:

> il personale operativo comunica le modifiche agli **enti limitrofi interessati**.

---

# 2.1.2.6.2.2 — Gestione delle strip

Si applica il documento:

### **“Linee Guida - Strisce progresso volo e strisce veicoli”**

disponibile in:

> **DoOPS → Documentazione locale**

Le IPI riportano schemi e configurazioni per:

- strip aeromobili in arrivo;
- strip aeromobili in partenza;
- strip aeromobili in attraversamento;
- voli locali;
- attività alianti con aeromobile trainatore;
- strip elettroniche EFPS;
- ruoli;
- configurazione baie e movimentazione strip;
- sistema **CATC — Conflicting ATC Clearances**;
- procedure operative.

---

## Strip per aeromobili in attraversamento e voli locali

Devono essere compilate:

# **2 strip distinte — ARR + DEP**

per:

### A. Aeromobili IFR/VFR in attraversamento che effettuano operazioni sull’aeroporto

Ad esempio:

- procedure strumentali;
- touch-and-go;
- stop-and-go;
- ecc.

### B. Voli che originano e terminano sull’aeroporto ma lasciano lo spazio aereo di competenza

quando vengono:

> **trasferiti ad altro ente ATS.**

---

## Eccezione — breve uscita dallo spazio di competenza

Può essere mantenuta la **strip per volo locale** se un traffico già in volo:

- chiede di uscire dall’area di competenza per pochi minuti;

annotando nella casella **M**:

- orario di uscita;
- orario di rientro.

### Negli altri casi

> usare la **strip per voli locali**.

---

# 2.1.2.6.3 — Inserimento informazioni sull’attività VFR

Su AOIS Web è disponibile:

### **FPL DATA MANAGEMENT**

Serve per inserire:

- attività in circuito:
  - **TG**
  - **LP**

  effettuata da VFR con o senza FPL;
- **CNT/DEP/ARR** di VFR:
  - con FPL;
  - senza FPL;
  - con FPL abbreviato.

Non è necessario l’inserimento quando:

> il piano di volo viene trasmesso all’ARO/CBO.

### Attenzione

> **FPL DATA MANAGEMENT non è uno strumento per la gestione operativa del volo.**

---

## Quando inserire i dati

Regola principale:

> entro il termine dello **spezzone di turno** nel quale si è svolto il volo.

Procedura:

1. verificare se il volo è già presente mediante **SEARCH**;
2. se presente → inserire i dati di interesse;
3. se assente → utilizzare **INSERT** e inserire i dati completi.

### Volo decollato da altro aeroporto

Richiedere al pilota:

- aeroporto di partenza;
- orario di decollo;

e annotarli sulla **strip progresso volo**.

### Termine massimo tecnico

È possibile inserire i dati fino a:

# **5 giorni dalla data del volo**

### Se non si riesce entro lo spezzone

Informare via mail:

- **HoC/Resp. OCS**

affinché venga effettuato l’inserimento entro i termini.

Per quanto possibile allegare:

> **scansione delle strip non inserite.**

---

# 2.1.2.7 — Regolaggio AVL

## Quando devono essere utilizzati gli AVL

Le luci aeronautiche al suolo devono essere utilizzate:

1. ininterrottamente durante:
   - ore di oscurità;
   - oppure ore della notte,

   considerando il periodo che richiede il funzionamento più lungo;
2. quando necessario per la fornitura ATS;
3. quando le condizioni MET ne rendono desiderabile l’uso per la sicurezza;
4. su richiesta dell’aeromobile;
5. in ogni caso quando:
   - **visibilità al suolo < 5 km**
   - oppure **ceiling < 700 ft**.

### Visibilità di riferimento

> Si considera la **visibilità minima rilevata sull’aeroporto**.

### Assenza traffico

Fermo restando MO-ATS:

> **in assenza di traffico gli AVL devono rimanere spenti.**

---

## Fasce di visibilità

Gli AVL vengono settati secondo standard DAY/NIGHT nelle seguenti fasce:

1. **≥ 5 km**
2. **< 5 km e ≥ 1500 m**
3. **< 1500 m e > 800 m**
4. **≤ 800 m**

### Caso ceiling basso di giorno

Se:

- ceiling **< 700 ft**;
- visibilità **≥ 5 km**;
- di giorno;

utilizzare lo standard previsto per:

> **VIS < 5 km e ≥ 1500 m — DAY**

---

## Standard AVL

| Visibilità al suolo | DAY | NIGHT |
|---|---|---|
| **≥ 5 km** | **RIU – DAY – STD1**; PAPI pista non utilizzata spenti | **RIU – NIGHT – STD3**; PAPI e luci di avvicinamento pista non utilizzata spenti |
| **< 5 km e ≥ 1500 m** | **RIU – DAY – STD4**; PAPI e luci di avvicinamento pista non utilizzata spenti | **RIU – NIGHT – STD3**; PAPI e luci di avvicinamento pista non utilizzata spenti |
| **< 1500 m e > 800 m** | **RIU – DAY – STD5**; PAPI e luci di avvicinamento pista non utilizzata spenti | **RIU – NIGHT – STD4**; PAPI e luci di avvicinamento pista non utilizzata spenti |
| **≤ 800 m** | **RIU – DAY – STD5**; PAPI e luci di avvicinamento pista non utilizzata spenti | **RIU – NIGHT – STD4**; PAPI e luci di avvicinamento pista non utilizzata spenti |

Il dettaglio delle intensità dei singoli impianti è riportato nel:

> **manuale d’uso.**

---

## Richiesta pilota di variazione intensità

Se il pilota richiede una diversa intensità:

1. agire sull’intensità del/i singolo/i impianto/i secondo richiesta;
2. al termine dell’esigenza:
   - **ripristinare il settaggio standard**.

---

## RGL — Runway Guard Lights

Le RGL sono collegate a un unico circuito che alimenta anche:

- luci rosse sui percorsi asfaltati a nord della pista;
- **2 luci per ogni raccordo**, visibili dalla RWY.

Il circuito:

- è visualizzato sul monitor grafico;
- **non è azionabile dal telecomando**.

Conseguenza:

> **RGL e luci di interdizione sono accese H24.**

---

# 2.1.2.7.1 — Stop-bar

### Testo procedurale locale: **NIL**

Le IPI riportano inoltre le rappresentazioni relative all’utilizzo delle stop-bar in corrispondenza di:

- **IHP**
- **RHP**

Per le procedure operative specifiche si applicano le disposizioni richiamate nelle pertinenti sezioni operative/AWO.

---

# 2.1.2.8 — Sistema di segnalazione di pista occupata

La HMI **E-AWOS TechnoSky** evidenzia la condizione di pista occupata a tutta la sala operativa, anche mediante:

> **oscuramento temporaneo delle informazioni di direzione e intensità del vento.**

---

## Regole fondamentali

La funzione **PISTA OCCUPATA**:

### 1. È il sistema primario

> Costituisce il **sistema primario e idoneo** per evidenziare in sala operativa la condizione di pista occupata.

### 2. È registrata e obbligatoria

Deve essere:

> **sempre selezionata**, anche se sono presenti altri ausili.

Gli altri ausili hanno funzione:

> eventualmente **complementare**.

### 3. Vale anche per occupazioni brevissime

Deve essere selezionata anche per:

- occupazioni di brevissima durata;
- attraversamenti pista da parte di:
  - veicoli;
  - aeromobili.

### 4. Responsabilità TWR

La funzione deve essere:

> **selezionata/deselezionata dal CTA responsabile della posizione TWR.**

---

## Se le comunicazioni con il veicolo sono tenute dal COO

L’autorizzazione a:

- entrare in pista;
- attraversare la pista;

deve essere:

1. coordinata con il CTA TWR;
2. autorizzata dal CTA responsabile TWR.

Il veicolo può ricevere l’autorizzazione:

> **solo dopo che il CTA TWR ha effettivamente selezionato “PISTA OCCUPATA”**, perfezionando il coordinamento.

---

## Striscia veicolo

La funzione E-AWOS:

> **non sostituisce la strip veicoli.**

La strip deve essere:

- compilata puntualmente;
- **una per ogni veicolo in pista** con proprio nominativo radio.

### Eccezione unica indicata

> veicoli **scortati e privi di radio**.

---

## FPS “PISTA OCCUPATA”

La funzione E-AWOS:

> non esime dall’uso congiunto della FPS **“PISTA OCCUPATA”** posizionata sulla baia.

---

## Pista chiusa

La funzionalità deve essere utilizzata anche per:

> **identificare la chiusura di una pista.**

---

# Schemi decisionali

## MET

### QNH
→ EAWOS  
→ TA **6000 ft**  
→ determina TL  
→ alla clearance APP trasmettere **QNH corrente**

### VIS DEP diversa da ARR
→ TM  
→ **strip MET**  
→ ATS usa valore DEP dedicato

### VIS <1500 / RVR <1500
→ trasmettere RVR secondo MO-ATS

### AVL OFF + VIS/RVR <1500
→ **bordo + asse pista 100%**

### Inizio final
→ vento aggiornato + variazioni significative

---

# ATFCM

### Problema capacità / richiesta equipaggio dopo startup
→ **FMP**

### CARA
→ FMP comunica volo + orario  
→ startup: ATS comunica **TONB**  
→ rischio superamento **DTW 15’**  
→ chiedere estensione a FMP

### Taxi Time
- RWY22 = **5’**
- RWY04 = **2’**

Modifica:
→ HoC/Resp. OCS  
→ FMP

---

# NOTAM

Necessità NOTAM  
→ **HoC/Resp. OCS**  
→ applicativo / modulo manuale  
→ mail da **notamlipy@enav.it**  
→ **NOF**  
→ telefonata **06 7908 6581**  
→ numero NOTAM su **OPS LOG**

---

# DATI DI VOLO

FPL/aggiornamenti  
→ **AOIS-WEB / FDMAS / Aerodrome Traffic**

Modifica FPL in volo  
→ informare enti ATS limitrofi interessati

VFR data entry  
→ **FPL DATA MANAGEMENT**  
→ entro spezzone turno  
→ massimo tecnico **5 giorni**

---

# PISTA OCCUPATA

Veicolo/aeromobile deve entrare o attraversare pista  
→ CTA TWR seleziona **PISTA OCCUPATA**  
→ autorizzazione  
→ strip veicolo + FPS PISTA OCCUPATA

Fine occupazione  
→ CTA TWR deseleziona

Anche se occupazione dura pochi secondi:
> **la funzione va comunque utilizzata.**

---

# Da memorizzare

1. **TA Falconara = 6000 ft.**
2. **TL = FL70 / 75 / 80 / 85 in funzione del QNH.**
3. **Alla clearance di avvicinamento → QNH corrente.**
4. **VIS DEP ≠ ARR → VIS DEP su strip MET.**
5. **RVR: RWY22 TDZ / RWY04 END.**
6. **Soglia chiave RVR/VIS = 1500 m.**
7. **Step RVR = 25 / 50 / 100 m.**
8. **AVL OFF con VIS/RVR <1500 → bordo + asse pista al 100%.**
9. **Vento EAWOS aggiornato ogni 5 s; inizio final → vento aggiornato + variazioni.**
10. **FMP Padova H24; prima regolazione normalmente max 2 h.**
11. **Last Minute Improvement → voli nei successivi 30’.**
12. **ACP → ritardo ≤20’ e scelta almeno 30’ prima EOBT.**
13. **CARA → finestra 60’, overload max 40’, DTW max 15’.**
14. **CARA: ritardo >10’ deve essere comunicato con anticipo da FMP.**
15. **Avverse condizioni → estensione STW/DTW max 1 h, rinnovabile.**
16. **Taxi Time ATFCM: RWY22 5’, RWY04 2’.**
17. **NOTAM → HoC/OCS → NOF → OPS LOG.**
18. **ARO/CBO: DLA/CHG/CNL, FPL in frequenza, ATD/ATA e Air-Report secondo i casi previsti.**
19. **Modifiche FPL in volo → comunicarle agli enti limitrofi interessati.**
20. **Attraversamento con operazioni / uscita trasferita ad altro ente → 2 strip, ARR + DEP.**
21. **FPL DATA MANAGEMENT VFR → entro spezzone; inserimento possibile fino a 5 giorni.**
22. **AVL: VIS <5 km o ceiling <700 ft → utilizzo previsto.**
23. **In assenza traffico AVL spenti, salvo quanto previsto dal MO-ATS.**
24. **RGL e luci di interdizione → H24.**
25. **PISTA OCCUPATA E-AWOS = sistema primario, registrato e sempre obbligatorio.**
26. **CTA TWR seleziona/deseleziona la funzione.**
27. **COO non può autorizzare ingresso/attraversamento pista finché TWR non ha selezionato PISTA OCCUPATA.**
28. **Funzione E-AWOS + strip veicolo + FPS PISTA OCCUPATA: strumenti congiunti, non alternativi.**
