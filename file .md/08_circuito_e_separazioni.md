# 08 — Circuito e separazioni

**Riferimenti IPI:** § 2.3.1.1 – § 2.3.1.4  
**Fonte:** *IPI DIG ATS Ancona Falconara - Versione 1.000 17-07-2026.xlsb*

> **Obiettivo di studio:** conoscere i conflitti del circuito di traffico e, soprattutto, tutte le separazioni procedurali locali tra arrivi, partenze, SID, STAR, holding, rotte ATS e attività speciali.  
>
> **Regola di questo file:** nessuna minima, condizione, punto di separazione o eccezione operativa viene omessa.

---

# 2.3.1.1 — Circuito di traffico

I circuiti di traffico si sviluppano:

- a **N/O** della pista;
- a **S/E** della pista.

---

## Circuito N/O

Il traffico VFR nel circuito **N/O** è in conflitto:

- con **tutti gli avvicinamenti che effettuano il circling**;
- con le procedure di mancato avvicinamento delle seguenti IAP:
  - **ILS or LOC Y RWY22**
  - **ILS or LOC W RWY22**

### Regola

> In tali casi il circuito N/O deve essere **liberato prima che il traffico IFR in avvicinamento sia in finale**.

---

## Circuito S/E

Il traffico VFR nel circuito **S/E** è in conflitto con le procedure di mancato avvicinamento delle:

- **ILS or LOC Z RWY22**
- **ILS or LOC X RWY22**

### Regola

> Anche in questo caso il circuito interessato deve essere **liberato prima che il traffico IFR in avvicinamento sia in finale**.

---

## Procedure RNP

La regola precedente **non si applica** alle:

- **RNP RWY 22**
- **RNP RWY 04**

Per tali procedure è comunque opportuno:

> fornire **idonea informazione di traffico** agli aeromobili interessati.

---

## Elisuperficie Torrette

L’elisuperficie dell’ospedale **“Torrette”**:

> ricade all’interno dell’ATZ in corrispondenza del **circuito S/E**.

---

## Riferimenti grafici

Nelle IPI sono inoltre presenti riferimenti a:

- attività volovelistica;
- circuiti di traffico JET.

Per la geometria esatta dei circuiti/percorsi deve essere utilizzata la rappresentazione grafica del documento IPI originale.

---

# 2.3.1.2 — SEPARAZIONI

---

# 2.3.1.2.1 — Aeromobili in avvicinamento

# 2.3.1.2.1.1 — Separazioni tra successivi avvicinamenti

La separazione tra successivi avvicinamenti:

- **IFR**
- **VFR speciale**

è responsabilità:

# **dell’ente che fornisce il servizio di avvicinamento**

Il CTA APP:

> autorizza il successivo aeromobile IFR/VFR speciale all’avvicinamento **solo dopo che il precedente aeromobile IFR/VFR speciale è atterrato**.

---

## Landing rate applicabile

| IAP | Aeromobili | RWY 22 | RWY 04 |
|---|---|---:|---:|
| **ILS-Z RWY22 / ILS-X RWY22 / ILS-W RWY22 / RNP RWY22** | Tutti | **5 min** | **8 min** |
| **ILS-Y RWY22** | Tutti | **10 min** | **13 min** |
| **RNP RWY04 da EFCUN** | Tutti | **11 min** | **8 min** |
| **RNP RWY04 da AMMUF** | Tutti | **10 min** | **7 min** |

---

# 2.3.1.2.1.2 — Interagenze tra STAR

### Validità

# **fino a FL110**

### Regola di lettura

> L’assenza di indicazione nella tabella originale deve essere considerata **“Mai separata”**.

La tabella è **direzionale**: la condizione riga→colonna può essere diversa dalla condizione colonna→riga.

| STAR riga ↓ / STAR colonna → | ARKEM 2P | GERBU 2R | MASEG 2R | KEGED 2R | ERLIT 1R | BIDMA 2R | LANLI 2R |
|---|---|---|---|---|---|---|---|
| **BIDMA 2R** | Separata fino **PY402** | Separata fino **PY402** | Separata fino **PY402** | Separata fino **PY402** | Separata fino **PY402** | Mai separata | Mai separata |
| **LANLI 2R** | Separata fino **NULGI** | Separata fino **NULGI** | Separata fino **NULGI** | Separata fino **NULGI** | Separata fino **NULGI** | Mai separata | Mai separata |
| **ARKEM 2P** | Mai separata | Mai separata | Mai separata | Mai separata | Mai separata | **Mai separata** | **Mai separata** |
| **GERBU 2R** | Mai separata | Mai separata | Mai separata | Mai separata | Mai separata | Separata fino **3.0 NM per il punto ANC** | Separata fino **3.0 NM per il punto ANC** |
| **MASEG 2R** | Mai separata | Mai separata | Mai separata | Mai separata | Mai separata | Separata fino **10 NM per il punto PY406** | Separata fino **10 NM per il punto PY406** |
| **KEGED 2R** | Mai separata | Mai separata | Mai separata | Mai separata | Mai separata | **Mai separata** | **Mai separata** |
| **ERLIT 1R** | Mai separata | Mai separata | Mai separata | Mai separata | Mai separata | Separata fino **1.5 NM per il punto ANC** | Separata fino **1.5 NM per il punto ANC** |

---

# 2.3.1.2.1.3 — Interagenze tra STAR e Holding

## A. STAR ↔ Holding EREDO

### Validità

# **fino a FL115**

L’assenza di indicazione equivale a:

> **Mai separata**

| STAR | Holding EREDO |
|---|---|
| **ERLIT 1V** | Mai separata |
| **ERLIT 2A** | Mai separata |
| **GERBU 2A** | Separata fino **R152/D10 ANC VOR/DME** |
| **GERBU 3B** | Sempre separata |
| **KEGED 2A** | Separata fino **R088/D10 ANC VOR/DME** |
| **KEGED 3B** | Sempre separata |
| **LANLI 4A** | Separata fino **R327/D19 ANC VOR/DME** |
| **LANLI 4B** | Sempre separata |
| **LANLI 4C** | Sempre separata |
| **MASEG 2A** | Separata fino **R127/D10 ANC VOR/DME** |
| **MASEG 3B** | Sempre separata |
| **SORUG 1V** | Mai separata |
| **SORUG 2A** | Mai separata |

---

## B. STAR ↔ Holding AMMUF / EFCUN / KEPUM RNAV

### Holding KEPUM RNAV

# **MAX Alt 4500 ft**

| STAR | AMMUF | EFCUN | KEPUM RNAV |
|---|---|---|---|
| **LANLI 1S** | Mai separata | Sempre separata | Sempre separata |
| **BIDMA 1S** | Mai separata | Sempre separata | Sempre separata |
| **KEGED 1S** | Sempre separata | Mai separata | Sempre separata |
| **ERLIT 1S** | Mai separata | Sempre separata | Sempre separata |
| **MASEG 1S** | Sempre separata | Mai separata | Sempre separata |
| **GERBU 1S** | Sempre separata | Mai separata | Sempre separata |
| **KEPUM 1S** | Sempre separata | Mai separata | Separata dopo **PY637** |
| **KEPUM 2T** | Mai separata | Sempre separata | Separata dopo **PY407** |

---

## 2.3.1.2.1.4 — Pratiche operative

### **NIL**

---

# 2.3.1.2.2 — Aeromobili in partenza

# 2.3.1.2.2.1 — Separazioni tra successive partenze

La separazione tra successive partenze:

- IFR;
- VFR speciale;

è responsabilità:

# **dell’ente che fornisce il servizio di avvicinamento**

L’APP:

> fornisce **specifico rilascio per ogni partenza IFR/VFR speciale**.

Tra successive partenze IFR:

# **si applica la separazione verticale**

---

# 2.3.1.2.2.2 — Interagenze tra SID

# **LE SID NON SONO MAI SEPARATE**

Quindi tra due traffici che percorrono SID differenti:

> non deve essere presunta una separazione laterale procedurale solo in ragione delle SID assegnate.

---

# 2.3.1.2.2.3 — Interagenze tra SID e Holding

### Validità

# **fino a FL110**

### Regola

L’assenza di indicazione:

> **Mai separata**

---

## A. SID ↔ ANC VOR / KEPUM / NULGI / EREDO

### Limiti IAS Holding

- **ANC VOR:** IAS MAX **230 KT**
- **KEPUM:** IAS MAX **230 KT**
- **NULGI:** IAS MAX **210 KT**
- **EREDO:** IAS MAX **200 KT**

| SID | ANC VOR | KEPUM | NULGI | EREDO |
|---|---|---|---|---|
| **BIDMA 7J** | Separata sul punto **BIDMA** | Sempre separata | Sempre separata | Mai separata |
| **BIDMA 9K** | Separata su **R281/D16 ANC VOR/DME** | Separata quando **stabili su R281 ANC VOR dopo R281/D6 ANC VOR/DME** | Separata quando **stabili su R281 ANC VOR dopo R281/D6 ANC VOR/DME** | Mai separata |
| **ERLIT 7J** | Separata su **ERDON** | Sempre separata | Sempre separata | Mai separata |
| **ERLIT 8K** | Separata su **ERDON** | Separata quando **stabili su R224 ANC VOR dopo R224/D3 ANC VOR/DME to ERLIT** | Separata quando **stabili su R224 ANC VOR dopo R224/D3 ANC VOR/DME to ERLIT** | Mai separata |
| **GERBU 8J** | Mai separata | Separata dopo **R152/D6 ANC VOR/DME**, stabili su **R152** | Sempre separata | Separata dopo **ANC VOR**, stabili su **R152** |
| **KEGED 9J** | Separata su **KEGED**, stabili su **R088 ANC VOR** | Separata su **KEGED**, stabili su **R088 ANC VOR** | Sempre separata | Separata **stabili su R088 ANC VOR** |
| **LANLI 9J** | Separata su **R327/D15 ANC VOR/DME** | Separata su **R327/D17 ANC VOR/DME** | Separata fino **D3 ANC DME** | Separata stabili su **R327 ANC VOR/DME** |
| **MASEG 8J** | Separata su **R127/D22 ANC VOR/DME** | Separata quando **stabili su R127 ANC VOR dopo R127/D6 ANC VOR/DME** | Sempre separata | Separata stabili su **R127 ANC VOR** |
| **BIDMA 8M** | Separata dopo **BIDMA** | Separata dopo **BIDMA** | Mai separata | Mai separata |
| **BIDMA 1H** | Separata su **R281/D16 ANC VOR/DME** | Separata su **R281/D6 ANC VOR/DME** | Sempre separata | Mai separata |
| **ERLIT 8H** | Separata sul punto **ERDON** | Separata su **R224/D3 ANC VOR/DME** | Sempre separata | Separata fino **R039/D3 ANC VOR/DME** |
| **GERBU 9H** | Mai separata | Separata dopo **R152/D6 ANC VOR/DME**, stabili su **R152 ANC VOR** | Sempre separata | Sempre separata |
| **KEGED 9H** | Separata su **KEGED**, stabili su **R088 ANC VOR** | Separata su **KEGED**, stabili su **R088 ANC VOR** | Sempre separata | Sempre separata |
| **LANLI 9H** | Separata su **R338/D15 ANC VOR/DME** | Separata dopo **R338/D15 ANC VOR/DME**, stabili su **R327 ANC VOR** | Mai separata | Sempre separata |
| **MASEG 9H** | Separata su **R127/D22 ANC VOR/DME** | Separata su **R127/D6 ANC VOR/DME** | Sempre separata | Sempre separata |

---

## B. SID ↔ AMMUF / EFCUN / KEPUM RNAV

### Holding KEPUM RNAV

# **MAX Alt 4500 ft**

| SID | AMMUF | EFCUN | KEPUM RNAV |
|---|---|---|---|
| **LANLI 7F** | Sempre separata | Sempre separata | Mai separata |
| **BIDMA 6F** | Mai separata | Sempre separata | Separata dopo **PY639** |
| **KEGED 5F** | Sempre separata | Sempre separata | Separata su **KEGED** |
| **GERBU 5F** | Sempre separata | Mai separata | Separata dopo **PY637** |
| **MASEG 5F** | Sempre separata | Mai separata | Separata dopo **PY637** |
| **ERLIT 5F** | Sempre separata | Mai separata | Separata dopo **PY637** |

---

## 2.3.1.2.2.4 — Pratiche operative

### **NIL**

---

# 2.3.1.2.3 — Operazioni miste

# 2.3.1.2.3.1 — Separazione tra aeromobili in arrivo e in partenza

Le separazioni locali tengono conto di:

- tipologia di servizio di avvicinamento;
- minime applicabili;
- percorso nominale della procedura di mancato avvicinamento;
- percorso del traffico in partenza;
- prestazioni degli aeromobili normalmente operanti a Falconara.

---

## Tabella scenari ARR ↔ DEP

| Scenario | Condizione |
|---|---|
| **Partenza e arrivo per stessa pista + avvicinamento diretto** | TWR **non consente l’inizio della corsa di decollo IFR** quando il traffico IFR in arrivo è già stato autorizzato a effettuare una **procedura di avvicinamento strumentale** |
| **Partenza e arrivo per pista opposta** | necessario **specifico rilascio APP** |
| **Avvicinamento circling** | necessario **specifico rilascio APP** |
| **Avvicinamento a vista** | TWR **non consente l’inizio della corsa di decollo IFR** quando il traffico IFR in arrivo è già stato autorizzato a effettuare un **avvicinamento a vista** |

### Motivo

Le condizioni garantiscono che APP possa applicare la minima richiesta tra:

- aeromobile già decollato;
- aeromobile che esegue un eventuale missed approach.

### Si applicano

> **indipendentemente dalle prestazioni degli aeromobili coinvolti.**

### Non modificano la separazione individuata

- contaminanti in pista;
- condizioni meteorologiche avverse;
- turbolenza di scia.

### Se la procedura non viene rispettata

Il traffico deve essere gestito secondo MO-ATS mediante:

- **informazioni di Traffico Essenziale**;
- coordinamento **TWR ↔ APP**;

fino al:

> **ripristino della minima separazione applicabile**.

---

# 2.3.1.2.3.2 — Interagenze tra SID e STAR

## Regola generale

> L’assenza di indicazione nella tabella originale equivale a **“Mai separata”**.

Le condizioni possono essere **asimmetriche**. Quando una cella riporta **ARR** o **DEP**, il punto indicato è quello che deve essere raggiunto dal traffico corrispondente affinché la separazione possa essere considerata stabilita.

---

## A. Initial Climb RWY22 ↔ STAR

### ICP RWY22

Tratto considerato:

> **da dopo il decollo (DER RWY22) fino a 7 NM IFA DME oppure 3.0 NM FAL TACAN**

| STAR | ICP RWY22 |
|---|---|
| **BIDMA 2R** | Sempre separata |
| **LANLI 2R** | Sempre separata |
| **ARKEM 2P** | Sempre separata |
| **ERLIT 1R** | Separata dopo **ANC VOR** |
| **GERBU 2R** | Sempre separata |
| **KEGED 2R** | Sempre separata |
| **MASEG 2R** | Sempre separata |

---

## B. SID convenzionali ↔ STAR

| STAR ↓ / SID → | BIDMA 7J | ERLIT 7J | GERBU 8J | KEGED 9J | LANLI 9J | MASEG 8J | LANLI 8L |
|---|---|---|---|---|---|---|---|
| **BIDMA 2R** | ARR: separata dopo **PY404** | Sempre separata | Sempre separata | Sempre separata | Mai separata | Sempre separata | ARR: separata dopo **PY404** |
| **LANLI 2R** | Sempre separata | Sempre separata | Sempre separata | Sempre separata | Mai separata | Sempre separata | ARR: separata dopo **KATFU** |
| **ARKEM 2P** | Sempre separata | Sempre separata | ARR: separata dopo **INRIB** | ARR: separata dopo **INRIB** | Mai separata | ARR: separata dopo **INRIB** | Sempre separata |
| **ERLIT 1R** | ARR: separata dopo **ANC VOR** | ARR: separata dopo **PY406** | ARR: separata dopo **INRIB** | ARR: separata dopo **INRIB** | Mai separata | ARR: separata dopo **INRIB** | ARR: separata dopo **ANC** |
| **GERBU 2R** | Sempre separata | Sempre separata | ARR: separata dopo **INRIB** | ARR: separata dopo **INRIB** | Mai separata | ARR: separata dopo **INRIB** | Sempre separata |
| **KEGED 2R** | Sempre separata | Sempre separata | Sempre separata | ARR: separata dopo **INRIB** | ARR: separata fino **INRIB** | Sempre separata | Sempre separata |
| **MASEG 2R** | Sempre separata | Sempre separata | ARR: separata dopo **INRIB** | ARR: separata dopo **INRIB** | Mai separata | ARR: separata dopo **INRIB** | Sempre separata |

---

## C. SID RNP1 ↔ STAR RNP1

In questa tabella, dove la cella presenta due condizioni, vengono mantenute separatamente le condizioni basate sul traffico:

- **ARR**
- **DEP**

### Regola speciale `*`

> **Separata solo durante la STAR; la HOLDING associata non è separata.**

| SID ↓ / STAR → | LANLI 1S | BIDMA 1S | KEGED 1S | MASEG 1S | GERBU 1S | ERLIT 1S | KEPUM 1S | KEPUM 2T |
|---|---|---|---|---|---|---|---|---|
| **LANLI 7F** | ARR: dopo **PY407** / DEP: Mai separata | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: dopo **PY637** / DEP: su **LANLI** | ARR: su **AMMUF** / DEP: su **LANLI** |
| **BIDMA 6F** | ARR: Mai / DEP: Mai | ARR: Mai / DEP: fino **PY641*** | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: fino **PY408** / DEP: fino **PY641*** | ARR: dopo **PY637** / DEP: dopo **PY639** | ARR: Mai / DEP: Mai |
| **ERLIT 5F** | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: Sempre* / DEP: Sempre* | ARR: Sempre* / DEP: Sempre* | ARR: Sempre* / DEP: Sempre* | ARR: dopo **PY409** / DEP: fino **PY637** | ARR: Mai / DEP: Mai | ARR: dopo **PY412** / DEP: dopo **PY637** |
| **KEGED 5F** | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: dopo **PY413** / DEP: Mai | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: su **EFCUN** / DEP: su **KEGED** | ARR: su **PY412** / DEP: dopo **PY634** |
| **MASEG 5F** | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: Mai / DEP: Mai | ARR: Mai / DEP: Mai | ARR: fino **EFCUN*** / DEP: Sempre* | ARR: Sempre / DEP: Sempre | ARR: Mai / DEP: su **MASEG*** | ARR: dopo **PY412** / DEP: dopo **PY637** |
| **GERBU 5F** | ARR: Sempre / DEP: Sempre | ARR: Sempre / DEP: Sempre | ARR: Mai / DEP: Mai | ARR: Mai / DEP: Mai | ARR: Mai / DEP: Mai | ARR: Sempre / DEP: Sempre | ARR: Mai / DEP: su **GERBU*** | ARR: dopo **PY412** / DEP: dopo **PY637** |

---

# 2.3.1.2.3.3 — Interagenze tra Holding

### Validità

# **fino a FL110**

### Regola

L’assenza di indicazione:

> **Mai separata**

---

## A. Holding convenzionali

### Parametri

| Holding | Tracce | IAS MAX |
|---|---|---:|
| **KATFU** | 056° / 236° | **185 KT** |
| **INRIB** | 026° / 206° | **185 KT** |
| **ANC VOR** | 356° / 176° | **230 KT** |
| **ARKEM** | 353° / 173° | **200 KT** |
| **EREDO** | 251° / 071° | **200 KT** |
| **KEPUM*** | 221° / 041° | **230 KT** |
| **NULGI** | 151° / 331° | **210 KT** |

### Matrice completa

| Holding riga ↓ / colonna → | KATFU | INRIB | ANC VOR | ARKEM | EREDO | KEPUM* | NULGI |
|---|---|---|---|---|---|---|---|
| **KATFU** | Mai separata | Mai separata | Mai separata | Sempre separata | Sempre separata | Mai separata | Mai separata |
| **INRIB** | Mai separata | Mai separata | Mai separata | Separata fino **FL90 compreso** | Sempre separata | Mai separata | Sempre separata |
| **ANC VOR** | Mai separata | Mai separata | Mai separata | Mai separata | Mai separata | Mai separata | Sempre separata |
| **ARKEM** | Sempre separata | Separata fino **FL90 compreso** | Mai separata | Mai separata | Sempre separata | Sempre separata | Sempre separata |
| **EREDO** | Sempre separata | Sempre separata | Mai separata | Sempre separata | Mai separata | Sempre separata | Sempre separata |
| **KEPUM*** | Mai separata | Mai separata | Mai separata | Sempre separata | Sempre separata | Mai separata | Mai separata |
| **NULGI** | Mai separata | Sempre separata | Sempre separata | Sempre separata | Sempre separata | Mai separata | Mai separata |

### Nota KEPUM

`KEPUM*` indica:

> HOLDING KEPUM volata in modalità **LOC/DME**.

La condizione:

> **non è valida per la HOLDING KEPUM RNAV**.

---

## B. AMMUF / EFCUN / KEPUM RNAV

### KEPUM RNAV

# **MHA 4500 ft**

| Holding riga ↓ / colonna → | AMMUF | EFCUN | KEPUM RNAV |
|---|---|---|---|
| **AMMUF** | Mai separata | Sempre separata | Sempre separata |
| **EFCUN** | Sempre separata | Mai separata | Sempre separata |
| **KEPUM RNAV** | Sempre separata | Sempre separata | Mai separata |

---

## 2.3.1.2.3.4 — Pratiche operative

### **NIL**

---

# 2.3.1.2.4 — Interagenze con zone P-R-D e altri spazi aerei

### Regole di lettura

- le strutture **sempre separate non sono riportate**;
- l’assenza di indicazione deve essere considerata:
  - **Mai separata**.

---

## A. Lanci para su Loreto

| Struttura | Condizione |
|---|---|
| **L612 tratto ANC–NUTRO** | **MEL 120** |
| **M736 tratto ANC–UTENO** | **MEL 120** |
| **STAR VOR MASEG 2A** | **sospendere** |
| **STAR VOR GERBU 2A** | **sospendere** |
| **STAR VOR MASEG 3B** | tratto **MASEG – INT R088/ARC 14 NM ANC VOR/DME: MEL 120** |
| **STAR VOR GERBU 3B** | tratto **GERBU – INT R088/ARC 14 NM ANC VOR/DME: MEL 120** |
| **STAR VOR ARKEM 1V** | **sospendere** |
| **STAR RNP1 ARKEM 2P** | **sospendere** |
| **STAR RNP1 GERBU 2R** | **sospendere** |
| **STAR RNP1 KEPUM 1S** | **sospendere** |
| **STAR RNP1 MASEG 1S** | **sospendere** |
| **STAR RNP1 GERBU 1S** | **sospendere** |
| **STAR RNP1 KEGED 1S** | **sospendere** |
| **ILS or LOC Y RWY22** | da **ANC** consentiti solo **ingressi diretti**; in caso di mancato avvicinamento la **holding ANC è sospesa** |
| **ILS or LOC X RWY22** | **sospendere** |
| **ILS or LOC W RWY22** | **sospendere** |
| **ILS or LOC Z RWY22** | **sospendere** |
| **RNP RWY22** | **sospendere** |
| **INITIAL CLIMB & SID RWY04 — GERBU 9H** | **sospendere** |
| **INITIAL CLIMB & SID RWY04 — MASEG 9H** | **sospendere** |
| **INITIAL CLIMB & SID RWY22 — GERBU 8J** | **sospendere** |
| **INITIAL CLIMB & SID RWY22 — MASEG 8J** | **sospendere** |
| **SID RNP1 MASEG 5F** | **sospendere** |
| **SID RNP1 GERBU 5F** | **sospendere** |
| **SID RNP1 MASEG 5L** | **sospendere** |
| **SID RNP1 KEGEG 5L** | **sospendere** |
| **HOLDING ANC / ARKEM / EFCUN** | **sospendere** |

> Nota: nel documento originale la SID è riportata come **KEGEG 5L**; la grafia è mantenuta qui come nella fonte.

---

## B. LIR21 – LID87

| Struttura | Condizione |
|---|---|
| **SID RNAV BIDMA 6F a quote superiori a FL110** | Separata dopo **PY603** |

Per la gestione operativa delle aree P-R-D-TSA-TRA:

> vedere § **2.3.3.6**.

---

# 2.3.1.2.5 — Separazioni laterali VOR / GNSS su rotte che si intersecano

Esiste separazione laterale quando ricorre una delle seguenti condizioni.

---

## A. VOR / VOR

Entrambi gli aeromobili sono stabilizzati su radiali che divergono:

# **da almeno 15° fino a 135°**

e almeno un aeromobile si trova:

# **a 15 NM o più dall’aiuto alla navigazione**

---

## B. GNSS / GNSS

Ogni aeromobile:

- ha confermato di essere stabilizzato **on track**;
- con **zero offset**;
- tra i due waypoint;

e almeno un aeromobile si trova alla distanza minima dal punto comune indicata in tabella.

---

## C. VOR / GNSS

L’aeromobile VOR:

- è stabilizzato su una radiale:
  - da;
  - oppure verso il VOR.

L’aeromobile GNSS:

- ha confermato di essere stabilizzato **on track**;
- zero offset;
- tra i due waypoint.

Inoltre almeno un aeromobile deve essere alla distanza minima prevista dal punto comune.

---

## Tabella minima laterale

**Aeromobile 1:** VOR o GNSS  
**Aeromobile 2:** GNSS

| Differenza angolare tra le rotte sul punto comune | FL010–FL190 — distanza minima dal punto comune |
|---|---:|
| **15°–135°** | **15 NM** |

---

# 2.3.1.2.6 — Separazioni longitudinali

Gli aiuti alla navigazione disponibili consentono la frequente determinazione di:

- posizione;
- velocità;

e rendono applicabili le minime sotto riportate.

---

# 2.3.1.2.6.1 — Minime longitudinali a tempo

## Aeromobili che mantengono lo stesso livello

| Scenario | Minima |
|---|---:|
| **Stessa rotta** | **10 min** |
| **Rotte che si incrociano** | **10 min** |

---

## Aeromobili in salita o discesa

La minima applicabile durante il periodo in cui:

> **non esiste separazione verticale**

è:

| Scenario | Minima |
|---|---:|
| **Stessa rotta** | **10 min** |
| **Rotte che si incrociano** | **10 min** |

---

# 2.3.1.2.6.2 — Minime longitudinali DME e/o GNSS

## Aeromobili su stessa rotta, in salita/discesa

Durante il periodo nel quale non esiste separazione verticale:

# **10 NM**

purché ciascun aeromobile utilizzi:

### DME / DME
- la **stessa stazione DME on-track**;

### DME / GNSS
- una stazione DME **on-track**;
- un waypoint **coubicato**;

### GNSS / GNSS
- lo **stesso waypoint**.

Inoltre:

1. un aeromobile deve **mantenere il livello** durante il periodo in cui non esiste separazione verticale;
2. la separazione deve essere stabilita ottenendo:
   - letture DME;
   - e/o GNSS

   **simultanee** dagli aeromobili.

---

## Rotte reciproche

Un aeromobile che usa:

- DME on-track;
- e/o waypoint coubicato;
- oppure lo stesso waypoint;

può essere autorizzato a salire/scendere attraverso il livello occupato dall’altro quando:

1. è stato accertato che i due aeromobili:
   - **si sono passati**;
2. la loro distanza è almeno:

# **10 NM**

---

# 2.3.1.2.7 — Interagenze tra Rotte ATS e Holding ANC VOR

### Validità

- fino a **FL110**
- Holding ANC:
  - **IAS MAX 230 KT**

### Regola

Le rotte non riportate:

> **Mai separate**

---

## ALLONTANAMENTO

| Rotta ATS | Holding ANC VOR |
|---|---|
| **L612 nord** | Separata dopo **15 NM DME** |
| **M730 ovest** | Separata dopo **16 NM DME** |
| **M730 est** | Separata dopo **16 NM DME oppure KEGED** |
| **L865** | Separata dopo **22 NM DME** |

---

## AVVICINAMENTO

| Rotta ATS | Holding ANC VOR |
|---|---|
| **L612 nord** | Separata fino **20 NM DME** |
| **M730 ovest** | Separata fino **20 NM DME** |

---

# 2.3.1.3 — Direct IFR fuori dalle rotte ATS pubblicate

Falconara fornisce il controllo:

> **senza sistemi di sorveglianza ATS**.

Pertanto, salvo le eccezioni sotto riportate:

# **NON devono essere autorizzati direct IFR fuori dalle rotte ATS pubblicate**

se non alle condizioni e lungo i percorsi espressamente previsti dalle IPI.

---

## Eccezioni

La limitazione non pregiudica:

- massima assistenza ad aeromobili in **emergenza**;
- situazioni necessarie per la **sicurezza del volo**;
  - ad esempio deviazioni per evitare maltempo;
- autorizzazione a:
  - **avvicinamento a vista**.

---

## Deviazione per maltempo

Quando il pilota comunica la necessità di deviare dal percorso nominale:

ATS prende atto della deviazione.

Se:

> **non è applicabile la separazione verticale**

devono essere fornite, come necessario:

> **informazioni di traffico essenziale**

derivanti dall’impossibilità di applicare le normali separazioni procedurali allo scenario in atto.

---

# 2.3.1.3.1 — Percorsi diretti autorizzabili

### **NIL**

Non sono quindi pubblicati nelle IPI percorsi direct locali standard autorizzabili.

---

# 2.3.1.4 — Altitudini minime di sicurezza

# **ALTITUDINE MINIMA DI SICUREZZA = 10 000 ft**

Le IPI riportano inoltre un richiamo alle:

> **Procedure TACAN**

Per gli eventuali dettagli grafici/operativi TACAN deve essere consultato il documento IPI originale.

---

# SCHEMI MENTALI

# 1. SUCCESSIVI ARRIVI IFR / SVFR

Precedente non ancora atterrato  
→ **NON autorizzare il successivo all’avvicinamento**

Precedente atterrato  
→ successivo può essere autorizzato, applicando il landing rate pertinente.

---

# 2. SUCCESSIVE PARTENZE IFR / SVFR

→ APP responsabile  
→ **rilascio specifico per ogni partenza**  
→ tra IFR successive: **separazione verticale**

---

# 3. SID

SID vs SID:

# **MAI SEPARATE**

Non usare la divergenza nominale delle SID come separazione automatica.

---

# 4. ARR + DEP STESSA PISTA

ARR IFR già autorizzato a procedura strumentale/visual approach  
→ **TWR non fa iniziare la corsa di decollo IFR**

Pista opposta o circling  
→ **specifico rilascio APP**

---

# 5. DIRECT IFR

Normalmente:

# **NO**

Eccezioni:
- emergenza;
- safety/maltempo;
- visual approach.

Maltempo + no vertical separation  
→ **essential traffic information**.

---

# 6. LATERALE VOR/GNSS

Divergenza:

# **15°–135°**

+ almeno uno:

# **≥15 NM dal punto/aid comune**

---

# 7. LONGITUDINALE

### Tempo
# **10 min**

### DME/GNSS
# **10 NM**

alle condizioni previste.

---

# NUMERI DA SAPERE

| Elemento | Valore |
|---|---:|
| STAR ↔ STAR | validità fino **FL110** |
| STAR ↔ EREDO Holding | validità fino **FL115** |
| SID ↔ Holding | validità fino **FL110** |
| Holding ↔ Holding | validità fino **FL110** |
| Rotte ATS ↔ Holding ANC | validità fino **FL110** |
| ANC Holding IAS MAX | **230 KT** |
| KEPUM Holding IAS MAX | **230 KT** |
| NULGI Holding IAS MAX | **210 KT** |
| EREDO Holding IAS MAX | **200 KT** |
| KATFU Holding IAS MAX | **185 KT** |
| INRIB Holding IAS MAX | **185 KT** |
| ARKEM Holding IAS MAX | **200 KT** |
| KEPUM RNAV | **MHA 4500 ft** |
| ICP RWY22 | DER → **7 NM IFA DME / 3.0 NM FAL TACAN** |
| Lateral VOR/GNSS | **15°–135° + 15 NM** |
| Longitudinale a tempo | **10 min** |
| Longitudinale DME/GNSS | **10 NM** |
| L612 N outbound vs ANC Hold | dopo **15 DME** |
| M730 W outbound | dopo **16 DME** |
| M730 E outbound | dopo **16 DME o KEGED** |
| L865 outbound | dopo **22 DME** |
| L612 N inbound | fino **20 DME** |
| M730 W inbound | fino **20 DME** |
| Altitudine minima di sicurezza | **10 000 ft** |

---

# DA MEMORIZZARE

1. **Circuiti sia N/O sia S/E.**
2. **N/O confligge con circling e missed ILS/LOC Y-W RWY22.**
3. **S/E confligge con missed ILS/LOC Z-X RWY22.**
4. **Circuito interessato libero prima che IFR sia in finale.**
5. **RNP RWY22/04: regola di liberazione non applicabile, ma traffic information opportuna.**
6. **Successivo IFR/SVFR approach solo dopo atterraggio del precedente.**
7. **Landing rate varia per IAP e pista: mantenere la tabella completa.**
8. **STAR/STAR fino FL110; la matrice è direzionale.**
9. **STAR/Holding EREDO fino FL115.**
10. **SID successive: APP rilascia ogni partenza; IFR successive con separazione verticale.**
11. **SID vs SID = mai separate.**
12. **SID/Holding fino FL110: rispettare punti/radiali/DME e IAS MAX delle holding.**
13. **ARR/DEP stessa pista: niente take-off roll IFR se ARR IFR è già autorizzato all’approach strumentale o visuale.**
14. **Pista opposta e circling: rilascio specifico APP.**
15. **SID/STAR: leggere sempre la cella specifica; molte relazioni sono asimmetriche ARR/DEP.**
16. **Holding/Holding fino FL110; KEPUM LOC/DME ≠ KEPUM RNAV.**
17. **Loreto para: diverse rotte/STAR/SID/IAC/Holding vanno sospese o limitate secondo tabella.**
18. **LIR21–LID87: BIDMA 6F >FL110 separata dopo PY603.**
19. **Separazione laterale VOR/GNSS: divergenza 15°–135° + 15 NM.**
20. **Longitudinale procedurale: 10 min; DME/GNSS: 10 NM alle condizioni previste.**
21. **Holding ANC vs rotte ATS: 15/16/16/22 NM outbound; 20 NM inbound per L612 N e M730 W.**
22. **Direct IFR fuori ATS routes normalmente non autorizzabili.**
23. **Deviazione maltempo senza verticale → essential traffic information.**
24. **Altitudine minima di sicurezza = 10 000 ft.**
