---
title: ReX-Light 
level: classified
---
### ReX-Light-Ansatz im Help Center von Theobald Software 

Die Inhalte des Help Center von Theobald Software folgen nicht vollständig dem klassischen ReX-Modell (Redaktionssystem + XML), orientieren sich jedoch in mehreren Punkten an dessen Prinzipien. Im Folgenden wird analysiert, welche Elemente des ReX-Modells genutzt werden – und in welcher Form.

---

### Was ist ReX?

ReX steht für **Redaktionssysteme und XML-basierte Modularisierung**. Ziel ist es, Inhalte:
- modular zu erstellen,
- medienneutral zu verwalten,
- wiederverwendbar zu strukturieren,
- variantenfähig zu publizieren.

---

### ReX-Kernelemente und unsere Umsetzung

| ReX-Kriterium                              | Umsetzung bei uns                    | Bemerkung |
|-------------------------------------------|--------------------------------------|-----------|
| **Modularisierung**                        | ✔️ vorhanden                         | Wir arbeiten mit Includes (Dateifragmente) und kleinen Markdown-Dateien |
| **Wiederverwendung**                       | ✔️ vorhanden                         | Durch Includes, Snippets und Variablen |
| **Variantenmanagement**                    | ✔️ vorhanden                         | Mittels Variablen und bedingter Inhalte |
| **Metadatensteuerung**                     | 🔸 teilweise                         | Durch Dateinamen, Ordnerstruktur, Konventionen – kein Metadatenlayer |
| **Semantische Struktur (z. B. Topic-Typen)** | ❌ nicht explizit                   | Keine systematische Auszeichnung von Tasks, Concepts, Referenzen |
| **Publikationsunabhängigkeit**             | ✔️ vorhanden                         | Inhalte werden aus Quellmodulen dynamisch zusammengestellt |
| **Content Delivery / Filterung**           | ❌ nicht vorhanden                   | Kein Content Delivery Portal, keine Filterlogik für Endnutzer |
| **Redaktionssystem / CCMS**                | ❌ nicht vorhanden                   | Wir arbeiten dateibasiert mit Git, kein strukturiertes CMS |

---

###  Fazit

Das Help Center von Theobald Software orientiert sich an zentralen Prinzipien des ReX-Modells – insbesondere:

- **Modularität**
- **Wiederverwendung**
- **Variantensteuerung**
- **Single Source Publishing**

Da jedoch strukturierte Metadaten, Topic-Typisierung und ein Redaktionssystem fehlen, sprechen wir von einem **ReX-light-Ansatz**.

Diese Umsetzung ist effizient, flexibel und gut geeignet für ein techniknahes, agiles Umfeld (z. B. in Kombination mit CI/CD und Docs-as-Code-Workflows).

****
### 📚 Weiterführende Themen

- [Best Practices der klassischen Technischen Dokumentation](classic-td-best-practices.md)
- [Funktionsdesign und Strukturprinzipien](fuktionsdesign.md)