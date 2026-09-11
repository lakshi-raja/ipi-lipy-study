# 11 — Degrado e indisponibilità dei sistemi

**Riferimenti IPI:** § 2.4 – § 2.4.4  
**Fonte:** *IPI DIG ATS Ancona Falconara - Versione 1.000 17-07-2026.xlsb*

> **Obiettivo di studio:** sapere cosa fare quando un sistema operativo degrada o diventa indisponibile: quale backup utilizzare, quali limitazioni applicare, chi informare, quando richiedere/emetterе NOTAM e come ripristinare la normale operatività.

---

# 2.4 — Regole generali in caso di degrado/avaria

In caso di degrado o avaria di un sistema, il personale ATS:

1. applica le eventuali **procedure degradate** previste nelle specifiche sezioni delle IPI;
2. per sistemi **CNS** applica il § 2.4.1;
3. per sistemi **METEO** applica il § 2.4.2;
4. per sistemi **AVL** applica il § 2.4.3;
5. informa:
   - **HoC / Resp. OCS**;
6. coordina con HoC/OCS:
   - eventuali **NOTAM**;
   - eventuali **limitazioni operative**;
7. se l’avaria pregiudica l’operatività aeroportuale, dopo coordinamento HoC/OCS:
   - informa il **Gestore aeroportuale**;
8. registra:
   - avaria;
   - azioni intraprese

   su **OPS LOG**;
9. informa gli equipaggi in maniera:
   - accurata;
   - aggiornata

   sullo stato dei sistemi e sulle limitazioni conosciute;
10. informa gli **enti ATS interessati**.

### Regola importante

> In caso di dubbio sulla pertinenza di una informazione relativa allo stato di un sistema, il personale operativo la **trasmette comunque all’equipaggio**, lasciando al pilota la valutazione delle implicazioni operative.

---

# Ripristino generale

Quando il sistema torna operativo:

1. informare gli **enti ATS interessati**;
2. se interessato, informare il **Gestore aeroportuale**;
3. informare:
   - **HoC / Resp. OCS**;
4. coordinare con HoC/OCS:
   - cancellazione degli eventuali NOTAM;
5. registrare il ripristino su:
   - **OPS LOG**.

---

# Schema generale

**AVARIA**  
→ procedura degradata  
→ HoC/OCS  
→ eventuale Gestore  
→ eventuale NOTAM  
→ equipaggi  
→ enti ATS  
→ OPS LOG

**RIPRISTINO**  
→ enti ATS  
→ Gestore se interessato  
→ HoC/OCS  
→ cancellazione NOTAM  
→ OPS LOG

---

# 2.4.1 — SISTEMI CNS

Per:

- allertamento del manutentore CNS → § **1.4.6.2.1**
- manutenzioni programmate → § **1.4.6.3**

### ANC VOR/DME indisponibile

L’indisponibilità di:

# **ANC VOR/DME**

deve essere comunicata a:

- **Padova ACC**
- **Perugia APP**
  - **075 5920321**
  - **333 3790285**

---

# 2.4.1.1 — Sistemi di comunicazione

Quando si verificano difficoltà di:

- ricezione;
- trasmissione

radio, il personale operativo verifica nell’ordine:

### 1. Microfono / cuffia

→ sostituirli per verificare se sono la causa.

### 2. Multifono

→ verificare se il problema è dovuto a un’avaria del multifono.

### 3. Trasmettitore / ricevitore

→ selezionare:

- **MAIN**
- oppure **STAND-BY**

per verificare il singolo apparato.

### Se il problema viene risolto

> continuare ad operare con la configurazione modificata fino all’intervento del manutentore.

Sono disponibili specifiche check-list in:

> **Portale di gruppo → Operations**

---

# 2.4.1.1.1 — Apparati TBT

## Avaria di un solo ricetrasmettitore

# **NESSUNA LIMITAZIONE OPERATIVA**

perché gli apparati sono:

> **ridondati**.

---

# Avaria multifono principale / tutti gli apparati collegati

Se è in avaria:

- multifono principale;
- oppure tutti i ricetrasmettitori ad esso connessi;

→ utilizzare:

# **SISTEMA DI COMUNICAZIONE DI EMERGENZA**

---

## Sistema di emergenza

Dispone di:

# **UNA SOLA FREQUENZA**

Quando possibile:

> utilizzare la **frequenza TWR**.

---

# Indisponibilità di una singola frequenza operativa

Il personale operativo:

1. informa gli **enti ATS limitrofi**;
2. utilizza la **frequenza ancora disponibile** per fornire i servizi ATS;
3. utilizza la configurazione operativa più idonea fra quelle possibili;
4. su indicazione HoC/OCS:
   - emette **specifico NOTAM**.

---

## Frequenza APP indisponibile

### APP normale

**125.325 MHz**

Se indisponibile:

> il servizio APP viene fornito sulla frequenza:

# **119.805 MHz**

---

## Frequenza TWR indisponibile

### TWR normale

**119.805 MHz**

Se indisponibile:

> il servizio TWR viene fornito sulla frequenza:

# **125.325 MHz**

---

# Avaria totale TBT — TWR + APP

Quando sono indisponibili tutti gli apparati radio T/B/T:

## 1. Enti limitrofi

Informare gli enti limitrofi:

- dell’avaria;
- della situazione di traffico disponibile;

e collaborare nella gestione dell’eventuale traffico già presente nell’area di responsabilità.

---

## 2. Nuovo traffico

Richiedere agli enti limitrofi di:

# **FAR ATTENDERE O REINSTRADARE TUTTI GLI AEROMOBILI FUORI DALL’AREA DI RESPONSABILITÀ**

fino al ripristino della normale fornitura dei servizi.

---

## 3. Lampada di segnalazione

Se necessario/applicabile:

> usare la **lampada di segnalazione** secondo MO-ATS.

---

## 4. Area di Manovra

Informare il:

# **Gestore aeroportuale**

e, se necessario, richiedere:

> **Follow-me**

per riportare al parcheggio aeromobili fermi sull’Area di Manovra.

---

## 5. NOTAM

Su indicazione:

- HoC;
- Resp. OCS;

→ emissione NOTAM di indisponibilità:

- **119.805 TWR**
- **125.325 APP**

---

## Ripristino

L’eventuale NOTAM viene cancellato:

> alla comunicazione del manutentore di **ripristino della funzionalità operativa**.

La richiesta/cancellazione NOTAM deve essere inviata in Cc a:

### **NOTAM_Delegati_CNS@enav.it**

---

# Schema TBT

### Un ricetrasmettitore KO
→ ridondanza  
→ **nessuna limitazione**

### Multifono / gruppo apparati KO
→ **sistema emergenza**

### Una frequenza KO
→ ATS limitrofi  
→ altra frequenza  
→ configurazione idonea  
→ eventuale NOTAM

### Tutte le radio KO
→ traffico già presente gestito per quanto possibile  
→ **nessun nuovo ingresso nell’area**  
→ holding/rerouting esterno  
→ lampada se applicabile  
→ Gestore/Follow-me  
→ NOTAM.

---

# 2.4.1.1.2 — Apparati TT / comunicazioni veicolari

## Avaria 440.725 / sistema veicolare

Quando il sistema di comunicazione veicolare è indisponibile:

# **NON consentire operazioni con aeromobili in Area di Manovra in presenza di veicoli e/o pedoni**

---

## Procedura

ATS:

1. informa il **Gestore aeroportuale** dell’avaria;
2. se sono presenti:
   - veicoli;
   - pedoni

   in Area di Manovra:
   - informa il Gestore;
   - richiede di comunicare loro:
     - avaria;
     - necessità di liberare l’area;
   - attende conferma del Gestore che:

# **AREA DI MANOVRA LIBERA**

---

## Ingresso indispensabile di veicoli

Se, nonostante l’avaria TT, un veicolo deve entrare per garantire l’operatività aeroportuale:

è ammesso:

- **un solo veicolo**;
- oppure **un gruppo al seguito di un unico responsabile**;

con:

# **CONTATTO TELEFONICO CONTINUO**

Quando necessario:

> può essere utilizzato un mezzo del Gestore come **scorta**.

---

# Schema TT

440.725 KO  
→ presenza veicoli/pedoni?  
→ Gestore li fa liberare  
→ conferma area libera  
→ solo allora operazioni a/m.

Ingresso indispensabile:
→ 1 mezzo / gruppo unico  
→ responsabile unico  
→ telefono continuo  
→ eventuale scorta Gestore.

---

# 2.4.1.1.3 — Interferenze e disturbi nocivi

La procedura si applica a disturbi che interessano, direttamente o indirettamente:

- frequenze aeronautiche;
- comunicazioni mobili;
- CPDLC;
- GNSS;
- radioassistenze;
- radar;
- radar meteorologici;
- altri sistemi di sorveglianza.

---

## GNSS

### Regola fondamentale

Una perdita GNSS riportata da un equipaggio:

> salvo chiaro malfunzionamento dell’apparato di bordo,

deve essere considerata:

# **DISTURBO NOCIVO**

e attiva quindi questa procedura.

---

## Azioni ATS

1. informare gli **aeromobili in contatto interessati**;
2. verificare, se possibile, tramite **VDF**:
   - direzione di provenienza dell’interferenza;
   - al fine di contribuire alla localizzazione;
3. informare:
   - **HoC / Resp. OCS**;
4. richiedere il manutentore CNS quando necessario per:
   - disattivazione del servizio;
   - successiva riattivazione;
5. informare:
   - **enti ATS limitrofi**;
6. se il disturbo riguarda radioassistenze per l’avvicinamento:
   - informare il **Gestore aeroportuale**;
7. collaborare con HoC/OCS per le comunicazioni di competenza;
8. utilizzare i modelli aggiornati di:
   - segnalazione interferenza;
   - cessazione interferenza

   disponibili in:
   - **DoOPS → Documentazione locale**;
9. registrare:
   - evento;
   - azioni

   su **OPS LOG**;
10. su indicazione HoC/OCS:
    - emettere NOTAM di indisponibilità della frequenza.

---

## Cessazione interferenza

L’eventuale NOTAM:

> deve essere cancellato alla ricezione della comunicazione di **cessata interferenza**.

Cc richiesta/cancellazione:

### **NOTAM_Delegati_CNS@enav.it**

---

# 2.4.1.1.4 — Collegamenti telefonici

# Avaria parziale

Utilizzare sistemi alternativi nel seguente:

# **ORDINE DI PRIORITÀ**

1. **linee telefoniche dirette** — procedura standard;
2. **linee telefoniche combinate registrate**;
3. **linee telefoniche combinate non registrate**:
   - chiamando, ove possibile, l’interlocutore su un numero registrato;
4. **telefono cellulare aziendale**:
   - chiamando, ove possibile, un numero registrato;
5. **telefoni di fortuna**:
   - chiamando, ove possibile, un numero registrato.

### Cellulare

Quando necessario:

> fornire all’interlocutore il numero del cellulare per essere richiamati.

---

## Linea diretta ATS KO

Se la linea diretta con un ente ATS è indisponibile:

> i coordinamenti possono essere effettuati **tramite altri enti ATS limitrofi**.

Elenco enti/recapiti:

> **Portale di gruppo → Operations**

---

# Avaria telefonica TOTALE

È considerata:

# **SCENARIO DI ASSOLUTA EMERGENZA**

Padova ACC/FMP richiede:

# **RATEO ZERO ARR/DEP**

fino al ripristino di almeno un sistema di collegamento/coordinamento.

---

## Traffico consentito durante avaria totale

Sono garantiti esclusivamente:

### ARRIVI

> aeromobili **già in volo**

### PARTENZE

soltanto:

- aeromobili di **Stato**;
- **umanitari**;
- **ospedale**;
- IFR con:

# **MESSA IN MOTO GIÀ APPROVATA**

---

# Procedura ARR durante avaria telefonica totale

Padova ACC autorizza il traffico:

### normalmente:
# **ANC VOR — FL120**

### se ANC indisponibile:
# **KEPUM — FL120**

Il definitivo:

- **Transfer of Communications**
- **Transfer of Control**

avviene:

> solo quando il pilota conferma che l’ente ATS accettante ha approvato tutti i termini dell’**Estimate / Inbound Release**.

Il pilota comunica ad ACC:

> l’orario al quale lascerà ANC VOR o KEPUM per l’avvicinamento finale.

---

# Procedura DEP durante avaria telefonica totale

Ancona APP autorizza il traffico al:

# **FIX LIMIT ANC VOR/DME**

alla:

> **minima quota prevista per l’attesa**

Una volta entrato in holding:

1. traffico istruito a contattare **ACC**;
2. comunica ad ACC:
   - rilascio ricevuto dall’APP;
3. riceve da ACC:
   - autorizzazione di rotta;
4. comunica ad APP:
   - clearance ricevuta;
   - orario al quale lascerà ANC VOR.

---

# Traffico in sorvolo

Padova ACC:

# **ISTRUISCE GLI AEROMOBILI AD EVITARE IL CTR DI ANCONA**

---

# Schema telefono totale KO

Telefono totale KO  
→ **RATEO ZERO**  
→ ARR solo già airborne  
→ DEP solo Stato/HUM/HOSP + IFR startup già approvato  
→ OVERFLIGHT evita CTR.

ARR:
→ ANC/KEPUM **FL120**  
→ pilot-mediated coordination  
→ transfer solo dopo conferma acceptance.

DEP:
→ ANC holding / min holding level  
→ pilot contatta ACC  
→ route clearance  
→ riferisce APP.

---

# 2.4.1.1.5 — Sistemi di registrazione

Il sistema registra:

- comunicazioni radio;
- comunicazioni telefoniche

delle apparecchiature presenti sul bancone della sala operativa.

---

## Conservazione

La conservazione delle registrazioni è competenza della:

# **DIREZIONE**

Il personale operativo:

# **NON è autorizzato a custodire i supporti di registrazione**

neppure temporaneamente.

---

## Avaria registratore

### Conseguenza

# **NESSUNA LIMITAZIONE OPERATIVA**

---

## Azioni

Se avaria parziale/totale:

1. segnalare l’allarme al:
   - **manutentore CNS**;
2. avvisare:
   - **HoC / Resp. OCS**;
3. in caso di avaria totale:
   - informare via e-mail il CNS Provider:

### **NOTAM_Delegati_CNS@enav.it**

---

# 2.4.1.2 — Sistemi di navigazione

Il degrado delle radioassistenze può rendere:

- STAR;
- SID;
- Holding;
- IAP

parzialmente o totalmente inutilizzabili.

Il personale deve:

1. conoscere la radioassistenza indisponibile;
2. verificare nelle tabelle quali procedure rimangono disponibili;
3. emettere, su indicazione HoC/OCS:
   - NOTAM radioassistenza;
   - eventualmente NOTAM di **procedura strumentale non disponibile**.

---

# NOTAM radioassistenze — logica

Le IPI riportano testi standard per:

- **ILS/LOC IFA**
- **GP**
- **MM**
- **DME IFA**
- **VDF Falconara Gonio Homer**
- **ANC VOR/DME**
- Remote Status Indicator — RSI

per:

- avaria / indisponibilità;
- manutenzione con impianto spento;
- manutenzione con impianto acceso / ON TEST;
- ripristino.

---

# Remote Status Indicator — RSI

## Caso 1 — solo presentazione sala operativa KO

Il NOTAM RSI viene emesso:

> solo se il manutentore CNS conferma che l’avaria riguarda esclusivamente il **sistema di presentazione in sala operativa**.

---

## Caso 2 — telecomando/telecontrollo completamente non monitorabile

Se l’avaria riguarda anche:

- sistema di telecomando/telecontrollo;
- postazione della radioassistenza;

e:

> non è possibile monitorare in alcun modo lo stato della radioassistenza,

deve essere emesso:

# **NOTAM “OUT OF SERVICE” DELL’IMPIANTO**

---

# Ripristino radioassistenza

La semplice comunicazione del manutentore:

> **NON è sufficiente per rimettere operativamente in uso la radioassistenza.**

La comunicazione deve essere inoltrata:

> tramite **HoC / Resp. OCS** al CNS

per le verifiche necessarie.

La radioassistenza torna utilizzabile quando:

# **HoC / Resp. OCS CONFERMA L’OPERATIVITÀ AL PERSONALE**

---

# Cancellazione NOTAM radioassistenza

Può avvenire a seguito di conferma di ripristino operativo:

- HoC / Resp. OCS;
- oppure equipaggio **radiomisure** dopo controllo in volo.

---

# Limitazioni parziali indicate da radiomisure

Se radiomisure comunica limitazioni non già pubblicate in AIP:

# **NON UTILIZZARE OPERATIVAMENTE LA RADIOASSISTENZA**

finché:

1. CNS Provider pubblica l’informazione aeronautica;
2. HoC/OCS conferma:
   - assenza di effetti sulle procedure;

   oppure:
   - comunica le specifiche restrizioni operative applicabili.

---

## Cc NOTAM CNS

### **NOTAM_Delegati_CNS@enav.it**

---

# Disponibilità STAR con radioassistenze OFF

| STAR | ANC VOR OFF | ANC DME OFF | IFA LOC e/o DME OFF | FAL DME OFF |
|---|---|---|---|---|
| **LANLI 4A** | Non disponibile | Disponibile | Disponibile | Disponibile |
| **LANLI 4B** | Non disponibile | Non disponibile | Non disponibile | Disponibile |
| **LANLI 4C** | Non disponibile | Non disponibile | Non disponibile | Disponibile |
| **KEGED 2A** | Non disponibile | Disponibile | Disponibile | Disponibile |
| **KEGED 3B** | Non disponibile | Non disponibile | Non disponibile | Disponibile |
| **MASEG 2A** | Non disponibile | Disponibile | Disponibile | Disponibile |
| **MASEG 3B** | Non disponibile | Non disponibile | Non disponibile | Disponibile |
| **GERBU 2A** | Non disponibile | Disponibile | Disponibile | Disponibile |
| **GERBU 3B** | Non disponibile | Non disponibile | Non disponibile | Disponibile |
| **ARKEM 1V** | Non disponibile | Disponibile | Disponibile | Disponibile |
| **ERLIT 2A** | Non disponibile | Disponibile | Disponibile | Disponibile |
| **ERLIT 1V** | Non disponibile | Non disponibile | Disponibile | Disponibile |
| **SORUG 2A** | Non disponibile | Disponibile | Disponibile | Disponibile |
| **SORUG 1V** | Non disponibile | Non disponibile | Disponibile | Disponibile |

---

# Disponibilità Holding con radioassistenze OFF

| Holding | ANC VOR OFF | ANC DME OFF | IFA LOC e/o DME OFF | FAL DME OFF |
|---|---|---|---|---|
| **KEPUM** | Disponibile | Disponibile | Non disponibile | Disponibile |
| **ANC** | Non disponibile | Disponibile | Disponibile | Disponibile |
| **NULGI** | Non disponibile | Non disponibile | Disponibile | Disponibile |
| **EREDO** | Non disponibile | Non disponibile | Disponibile | Disponibile |
| **ARKEM** | Non disponibile | Non disponibile | Disponibile | Disponibile |
| **RNAV — tutte** | Disponibile | Disponibile | Disponibile | Disponibile |

---

# Disponibilità IAP con radioassistenze OFF

| IAP | ANC VOR | ANC DME | IFA DME | FAL DME | ANC DME + IFA DME | IFA DME + FAL DME | IFA LOC | GP e/o MM |
|---|---|---|---|---|---|---|---|---|
| **ILS/LOC Z** | Disponibile | Disponibile | Disponibile | Disponibile | Disponibile | Non disponibile | Non disponibile | Disponibile |
| **ILS/LOC Y** | Non disponibile | Disponibile | Non disponibile | Disponibile | Non disponibile | Non disponibile | Non disponibile | Disponibile |
| **ILS/LOC X** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile | Non disponibile | Non disponibile | Disponibile |
| **ILS/LOC W** | Non disponibile | Disponibile | Disponibile | Disponibile | Disponibile | Non disponibile | Non disponibile | Disponibile |
| **RNP — tutte** | Disponibile | Disponibile | Disponibile | Disponibile | Disponibile | Disponibile | Disponibile | Disponibile |

> La tabella va letta come **disponibilità della procedura riportata nella fonte** a fronte dell’indisponibilità della/e radioassistenza/e indicate. Per uso operativo rimangono vincolanti AIP, NOTAM e conferme CNS/HoC-OCS.

---

# Disponibilità SID con radioassistenze OFF

| SID | ANC VOR | ANC DME | IFA DME | FAL DME | IFA DME + FAL DME |
|---|---|---|---|---|---|
| **LANLI 9H** | Non disponibile | Disponibile | Disponibile | Disponibile | Non disponibile |
| **KEGED 9H** | Non disponibile | Disponibile | Disponibile | Disponibile | Non disponibile |
| **MASEG 9H** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **GERBU 9H** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **ERLIT 8H** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **ERLIT 8K** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **BIDMA 1H** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **BIDMA 8M** | Disponibile | Disponibile | Disponibile | Disponibile | Non disponibile |
| **LANLI 9J** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **KEGED 9J** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **MASEG 8J** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **GERBU 8J** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **ERLIT 7J** | Non disponibile | Disponibile | Disponibile | Disponibile | Non disponibile |
| **ERLIT 8K** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |
| **BIDMA 7J** | Non disponibile | Disponibile | Disponibile | Disponibile | Non disponibile |
| **BIDMA 9K** | Non disponibile | Non disponibile | Disponibile | Disponibile | Non disponibile |

---

# Avaria contemporanea di più radioassistenze

Quando sono indisponibili contemporaneamente più radioassistenze:

1. verificare l’utilizzabilità delle procedure:
   - sulle **carte AIP**;
   - nelle tabelle IPI;
2. in caso di dubbio:
   - coordinare con **HoC / Resp. OCS**.

---

# NOTAM di procedure strumentali

Su indicazione HoC/OCS, se una procedura diventa inutilizzabile:

→ emissione specifico NOTAM per:

- **STAR**
- **IAP**
- **SID**

Al ripristino:

→ NOTAM di ripresa normale operatività.

---

# Avaria che compromette ARR/DEP

Se l’avaria rende problematici o impossibili:

- arrivi;
- partenze;

da/per LIPY:

# **INFORMARE TEMPESTIVAMENTE HoC / Resp. OCS**

---

# Schema NAV

Radioassistenza KO  
→ manutentore CNS  
→ HoC/OCS  
→ NOTAM sistema  
→ verifica tabelle STAR/SID/Holding/IAP  
→ eventuale NOTAM procedure  
→ equipaggi + enti ATS.

Ripristino manutentore  
→ **NON basta da solo**  
→ CNS/HoC-OCS verifica  
→ conferma operatività  
→ uso operativo + cancellazione NOTAM.

---

# 2.4.1.3 — Sistemi di sorveglianza

### **NIL**

Coerentemente con l’assetto operativo locale:

> Falconara fornisce il servizio senza l’ausilio di sistemi di sorveglianza ATS.

---

# 2.4.2 — SISTEMI METEO

Per l’allertamento del manutentore:

> § **1.4.6.2.1**

---

# Principio generale

## Sensore KO ma dato ancora disponibile

Se l’avaria interessa:

- sensore ridondato;
- oppure esiste:
  - backup;
  - sensore alternativo;

e il parametro MET rimane disponibile:

> le informazioni meteorologiche possono continuare ad essere utilizzate normalmente per il servizio ATS.

---

## Dato MET completamente indisponibile

Se l’avaria interessa:

- sensore non ridondato;
- tutti i sensori della stessa categoria;
- sistema elaborazione/presentazione;

e il parametro non è disponibile:

> applicare le procedure degradate seguenti.

---

# Solo sistema di presentazione KO

Se:

- è indisponibile il solo sistema di **presentazione dati**;
- il sistema di elaborazione funziona;
- vengono emessi **METAR automatici**;

possono essere utilizzati operativamente, per tutto il periodo di validità del METAR:

- **QNH**
- **temperatura**

estratti dal messaggio.

---

# Informazione agli equipaggi

Gli aeromobili devono essere:

# **PRONTAMENTE INFORMATI DELL’ASSENZA DEI DATI METEO**

---

# Anemometro di riferimento singola operazione KO

Se per:

- decollo;
- oppure atterraggio

è indisponibile l’anemometro di riferimento, ma esiste un altro dato:

> fornire il vento dell’**anemometro disponibile più vicino**, specificandone la **posizione**.

---

# Vento o QNH totalmente indisponibili

Informare:

# **ENTI ATS LIMITROFI**

Per:

### Padova ACC

deve essere informato:

# **CSO / SPV**

---

# Impatto operativo aeroporto

Se l’avaria pregiudica l’operatività aeroportuale:

→ dopo coordinamento:

- HoC / Resp. OCS

→ informare:

- **Gestore aeroportuale**.

---

# NOTAM dati MET

In nome e per conto del MET Provider sono previsti NOTAM per:

| Dato indisponibile | Informazione NOTAM |
|---|---|
| **Vento al suolo** | SURFACE WIND NOT AVBL DUE TECR |
| **Temperatura / dew point** | AIR AND DEW POINT TEMPERATURE NOT AVBL DUE TECR |
| **QNH** | QNH NOT AVBL DUE TECR |
| **RVR** | RVR NOT AVBL DUE TECR |

Riferimento:

> **AIP GEN 3.5-12**

### Cc

# **METServices@enav.it**

---

# Cancellazione NOTAM MET

Alla comunicazione del manutentore di:

- ripristino sistema;
- conseguente disponibilità del dato;

→ cancellare eventuale NOTAM.

---

# Ripristino normale

Comunicare la ripresa delle normali attività a:

- **HoC / Resp. OCS**;
- **Gestore aeroportuale**;
- altri enti interessati.

---

# Assenza completa dati meteo

L’assenza completa dei dati può avere effetti:

- sulle decisioni del pilota;
- sulle procedure ATS disponibili.

### Principio

La decisione finale sull’impiego dell’aeromobile rimane al:

# **PILOTA RESPONSABILE**

ATS deve però assicurare:

> comunicazione pronta e corretta dell’impossibilità di fornire i parametri mancanti.

---

# Limitazioni di capacità

Quando una procedura degradata limita il numero di aeromobili gestibili:

### HoC / Resp. OCS

valuta la domanda di traffico e richiede:

> le necessarie **restrizioni di flusso**.

---

# Nubi / visibilità verticale

Se nel riporto locale mancano:

- altezza nubi;
- copertura;

e il dato è disponibile:

> usare la **visibilità verticale** come riferimento per la determinazione del **ceiling**.

Se sono disponibili più valori:

# **USARE IL PIÙ BASSO**

---

# 2.4.2.1 — Indisponibilità del vento

Si applica quando:

# **TUTTI GLI ANEMOMETRI SONO INDISPONIBILI**

e quindi il vento non è disponibile.

---

## Scelta pista

Il pilota deve essere informato che ATS:

# **NON È IN GRADO DI DETERMINARE LA PISTA IN USO**

Frase prevista:

> **“UNABLE TO SELECT RUNWAY IN USE, WIND INFORMATION NOT AVAILABLE”**

---

## Noise abatement

# **NON considerare le procedure di abbattimento rumore**

nella selezione pista.

---

# Pilot reports di vento

Se disponibili, possono essere forniti:

> riporti di vento ricevuti da altri aeromobili in avvicinamento/partenza.

Deve essere chiarito che:

> si tratta di un **PILOT REPORT**.

---

## Separare wind report e clearance

Per evitare fraintendimenti:

# **NON fornire il wind report di un altro pilota contestualmente alla clearance di take-off/landing**

---

# Take-off / landing clearance

Al momento della clearance deve essere ribadito:

# **“WIND NOT AVAILABLE”**

---

# 2.4.2.2 — Indisponibilità temperatura / dew point

Quando tutti i termoigrometri sono indisponibili:

> comunicare l’indisponibilità del dato di temperatura contestualmente alle informazioni MET fornite al traffico ARR/DEP.

### Effetto sul QNH

Se l’assenza della temperatura determina anche:

> indisponibilità QNH

→ applicare:

# **§ 2.4.2.3 — QNH non disponibile**

---

# 2.4.2.3 — Indisponibilità QNH

Questa è una delle procedure degradate più importanti.

---

# QNH disponibile al momento dell’avaria

Il valore QNH disponibile al momento dell’avaria:

> può essere utilizzato fino al termine del periodo di validità del:

- **MET REPORT**
- oppure **SPECIAL**

---

# Dopo la scadenza

Alla fine del periodo di validità:

> il QNH non è più disponibile operativamente.

---

# Effetto sul livello di transizione

L’assenza QNH comporta:

# **IMPOSSIBILITÀ DI UTILIZZARE L’ALTITUDINE DI TRANSIZIONE**

Il minimo livello utilizzabile diventa il TL corrispondente a:

# **QNH < 977 hPa**

Secondo § 2.1.2.3.1.1:

# **TL = FL85**

---

# Area soggetta a limitazioni

# **TUTTO LO SPAZIO AEREO CONTROLLATO SOTTO FL85**

è soggetto alle procedure degradate.

---

# Informazioni

Al verificarsi della indisponibilità:

1. informare i piloti:
   - **QNH non disponibile**;
2. se durata avaria lo richiede:
   - emettere NOTAM;
3. informare:
   - enti ATS limitrofi;
4. gli enti ATS limitrofi:
   - informano il traffico interessato.

---

# Primo passo col pilota

Frase prevista:

# **“QNH NOT AVAILABLE, ADVISE INTENTIONS”**

---

# Regola fondamentale nello spazio sotto FL85

# **UN SOLO AEROMOBILE ALLA VOLTA**

all’interno dell’area soggetta a limitazioni:

- indipendentemente dalle regole di volo.

---

# Servizi fornibili nell’area

Sono forniti:

- **servizio di allarme**;
- **FIS per quanto possibile**.

### Limitazione

> non è possibile fornire informazioni relative alle **quote**.

---

# ARR in assenza QNH

## NON autorizzare

- discesa sotto il **minimo livello utilizzabile**;
- **procedure di avvicinamento strumentale**;
- **avvicinamento a vista**.

---

## Se il pilota richiede comunque di entrare nell’area limitata

Nel rispetto della regola:

# **1 aeromobile alla volta**

può essere istruito a entrare seguendo:

- percorso;
- profilo di discesa

a discrezione.

Frase prevista:

> **“ROUTE AND DESCENT AT OWN DISCRETION. REPORT FINAL RWY XX”**

---

## Landing clearance

In riferimento alle:

- condizioni della pista;

può essere emessa:

> **autorizzazione all’atterraggio**.

---

# DEP in assenza QNH

## NON autorizzare

# **PROCEDURE DI PARTENZA STRUMENTALE**

---

## Clearance

Indicare esclusivamente:

- punto di ingresso in rotta;
- oppure modalità di ingresso in rotta.

---

## Quota/livello

La minima quota autorizzata deve corrispondere almeno:

> al **minimo livello di volo o altitudine utilizzabile**.

Frase prevista:

> **“ROUTE TO XXX AND CLIMB UNTIL YYYY FT/FL YY AT OWN DISCRETION”**

---

## Take-off clearance

In riferimento alle condizioni della pista:

> può essere emessa l’**autorizzazione al decollo**.

---

# Schema QNH KO

QNH avaria  
→ ultimo QNH valido fino scadenza MET REPORT/SPECIAL  
→ poi:

# **FL85 minimo livello utilizzabile**

Spazio controllato <FL85  
→ **1 A/M ALLA VOLTA**

ARR:
- no descent sotto minimo;
- no IAP;
- no visual;
- route/descent pilot discretion;
- landing clearance possibile.

DEP:
- no SID;
- ingresso rotta soltanto;
- climb own discretion fino a livello minimo;
- take-off clearance possibile.

---

# 2.4.2.4 — Indisponibilità RVR

Se sono indisponibili:

# **TUTTI I TRASMISSOMETRI**

e quindi non esiste alcun dato RVR:

> deve essere fornito e utilizzato per **tutti gli scopi ATS** il valore della:

# **VISIBILITÀ**

---

## Sottocasi richiamati nelle IPI

La sezione richiama anche i casi di:

- **indisponibilità del dato di Visibilità**;
- **indisponibilità contemporanea RVR + Visibilità**;
- **indisponibilità del dato delle nubi**;
- **indisponibilità del dato di tempo presente e informazioni supplementari**.

Per Ancona le IPI non riportano ulteriori prescrizioni locali testuali sotto tali intestazioni oltre alle regole generali del § 2.4.2; si applicano quindi:

- normativa nazionale;
- MO-ATS/MET;
- informazione immediata all’utenza;
- eventuali limitazioni/NOTAM secondo il parametro effettivamente indisponibile.

---

# 2.4.3 — AVL

Quando si verifica:

- avaria;
- malfunzionamento

degli AVL, il personale operativo:

1. richiede:
   - **intervento manutentore**;
2. comunica al:
   - **Gestore aeroportuale**

   il decadimento operativo dei sistemi di assistenza luminosa;
3. non appena disponibile comunica:
   - **stimato ripristino**;
4. nelle more del NOTAM:
   - informa gli aeromobili:
     - dell’avaria;
     - delle eventuali limitazioni operative.

---

# Responsabilità Gestore

È competenza del Gestore:

- emissione dei NOTAM relativi al decadimento degli AVL, quando previsti;
- comunicare ad ENAV il decadimento di altri ausili al movimento al suolo di propria competenza, ad esempio:
  - **segnaletica verticale**;
- comunicare le eventuali:
  - **limitazioni operative**

  derivanti dall’indisponibilità.

I relativi NOTAM sono:

> competenza del **Gestore aeroportuale**.

---

# 2.4.3.1 — Stop-bar

### **NIL**

Non sono previste ulteriori specificità locali nel paragrafo.

---

# 2.4.3.2 — Indisponibilità telecomando AVL

Se i dispositivi di telecomando AVL sono guasti:

1. ATS richiede al manutentore di:
   - regolare gli AVL **direttamente dalla cabina elettrica di alimentazione**;
2. il manutentore:
   - verifica la funzionalità operativa;
   - comunica tempestivamente ad ATS:
     - eventuali avarie.

### Schema

Telecomando KO  
→ manutentore in cabina elettrica  
→ settaggio manuale AVL  
→ verifica funzionalità  
→ feedback ATS.

---

# 2.4.3.3 — Luci ostacolo

Quando il Gestore informa ATS di una:

> avaria a una **luce ostacolo di competenza ENAV**

ATS:

1. informa:
   - **Techno Sky**

   per le verifiche di competenza.

---

## Intervento non immediatamente possibile

ATS:

1. informa il:
   - **Gestore**
2. affinché emetta:
   - **NOTAM**
3. specifica, se disponibile:
   - **stimato ripristino**.

---

# 2.4.4 — Indisponibilità della CWP

### **NIL**

Per Ancona Falconara:

> non sono riportate ulteriori procedure locali specifiche nel § 2.4.4.

---

# SCHEMI OPERATIVI RAPIDI

# 1. RADIO — SINGOLA FREQUENZA KO

125.325 APP KO  
→ APP su **119.805**

119.805 TWR KO  
→ TWR su **125.325**

+ ATS limitrofi  
+ configurazione idonea  
+ eventuale NOTAM.

---

# 2. RADIO — TUTTO KO

→ enti limitrofi  
→ traffico già presente gestito per quanto possibile  
→ **nessun nuovo traffico nell’area**  
→ holding/rerouting esterno  
→ lampada se applicabile  
→ Gestore + Follow-me  
→ NOTAM.

---

# 3. VEICOLARE KO

→ **NO A/M + VEICOLI/PEDONI contemporaneamente**

Gestore libera area  
→ conferma libera  
→ operazioni.

Ingresso indispensabile:
→ 1 mezzo/gruppo  
→ telefono continuo  
→ eventuale scorta.

---

# 4. INTERFERENZA / GNSS JAMMING

→ traffic info  
→ VDF se possibile  
→ HoC/OCS  
→ CNS  
→ ATS limitrofi  
→ Gestore se approach aids  
→ OPS LOG  
→ eventuale NOTAM.

---

# 5. TELEFONI TOTALMENTE KO

→ **RATEO ZERO**

Consentiti:
- ARR già airborne;
- DEP Stato/HUM/HOSP;
- IFR con startup già approvato.

Overflight:
→ **fuori CTR Ancona**.

---

# 6. RADIOASSISTENZA KO

→ verifica tabella procedura  
→ HoC/OCS  
→ NOTAM aid  
→ eventuale NOTAM STAR/IAP/SID  
→ non riutilizzare solo perché manutentore dice “ripristinata”  
→ attendere **conferma operatività HoC/OCS**.

---

# 7. VENTO TOTALE KO

→ **unable select runway**  
→ no noise abatement  
→ eventuale pilot wind report separato dalla clearance  
→ clearance:

# **WIND NOT AVAILABLE**

---

# 8. QNH KO

Ultimo QNH valido fino scadenza report  
→ poi:

# **FL85**

sotto FL85:
→ **1 aeromobile alla volta**

ARR:
→ no IAP / no visual  
→ pilot discretion profile

DEP:
→ no SID  
→ route entry only.

---

# 9. RVR KO

Tutti i trasmissometri KO  
→ utilizzare:

# **VISIBILITÀ**

per tutti gli scopi ATS.

---

# 10. AVL KO

→ manutentore  
→ Gestore  
→ limitazioni  
→ aeromobili informati  
→ Gestore NOTAM.

Telecomando KO:
→ settaggio dalla **cabina elettrica**.

---

# NUMERI / DATI DA SAPERE

| Elemento | Valore |
|---|---:|
| APP | **125.325 MHz** |
| TWR | **119.805 MHz** |
| Avaria APP | APP su **119.805 MHz** |
| Avaria TWR | TWR su **125.325 MHz** |
| ARR con telefono totale KO | **ANC/KEPUM FL120** |
| QNH indisponibile dopo scadenza | minimo livello **FL85** |
| Area limitata QNH KO | spazio controllato **sotto FL85** |
| QNH KO in area limitata | **1 a/m alla volta** |
| ANC VOR/DME | **110.65 MHz** |
| Perugia APP — contatto ANC outage | **075 5920321 / 333 3790285** |

---

# DA MEMORIZZARE

1. **Ogni degrado → procedura specifica + HoC/OCS + OPS LOG + enti ATS + equipaggi.**
2. **Singolo ricetrasmettitore KO → nessuna limitazione perché ridondato.**
3. **Multifono/tutti apparati collegati KO → sistema di emergenza, una sola frequenza, preferibilmente TWR.**
4. **APP 125.325 KO → APP su 119.805; TWR 119.805 KO → TWR su 125.325.**
5. **Radio totale KO → impedire nuovi ingressi nell’area; holding/rerouting esterno.**
6. **Sistema veicolare KO → niente operazioni aeromobili con veicoli/pedoni presenti in Area di Manovra.**
7. **Ingresso veicolo indispensabile con TT KO → singolo mezzo/gruppo + telefono continuo.**
8. **GNSS loss non dovuta a bordo → trattare come interferenza/disturbo nocivo.**
9. **Telefono parziale: diretta → combinata registrata → combinata non registrata → cellulare → telefono di fortuna.**
10. **Telefono totale KO → rateo zero; solo arrivi già in volo e specifiche partenze prioritarie/già avviate.**
11. **Con telefono totale KO, ARR → ANC o KEPUM FL120; sorvoli evitano CTR.**
12. **Registratore KO → nessuna limitazione operativa.**
13. **ANC VOR/DME KO → informare Padova ACC e Perugia APP.**
14. **Radioassistenza dichiarata ripristinata dal manutentore ≠ automaticamente operativa: serve conferma HoC/OCS dopo verifiche CNS.**
15. **RSI completamente non monitorabile → impianto va NOTAM OUT OF SERVICE.**
16. **Avarie multiple NAV → verificare AIP + tabelle; dubbio → HoC/OCS.**
17. **Sorveglianza ATS → NIL.**
18. **Sensore MET KO ma parametro ancora disponibile via ridondanza/backup → nessuna perdita del dato.**
19. **Solo display MET KO + METAR AUTO → QNH e temperatura del METAR utilizzabili per la validità del riporto.**
20. **Vento di sensore alternativo → specificarne la posizione.**
21. **Vento totale KO → impossibile selezionare RWY; no noise abatement; “WIND NOT AVAILABLE” alla clearance.**
22. **QNH corrente al momento dell’avaria resta valido solo fino alla scadenza MET REPORT/SPECIAL.**
23. **Dopo QNH KO → minimo livello FL85; sotto FL85 un solo a/m alla volta.**
24. **QNH KO ARR → no IAP e no visual approach.**
25. **QNH KO DEP → no SID.**
26. **Tutti i trasmissometri KO → visibilità usata per tutti gli scopi ATS.**
27. **AVL KO → manutentore + Gestore + traffic info; NOTAM AVL di competenza Gestore.**
28. **Telecomando AVL KO → regolazione diretta dalla cabina elettrica.**
29. **Luce ostacolo ENAV KO → Techno Sky; se no ripristino immediato → Gestore per NOTAM.**
30. **CWP → NIL nelle IPI locali.**
