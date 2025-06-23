---
title: ISO DIN 
level: classified
---
### Docs-as-Code trifft ISO – ein Vergleich
Es ist spannend zu sehen, inwieweit das Help Center von Theobald Software – obwohl sie primär nach dem „Docs-as-Code“-Ansatz entwickelt wurde – auch klassischen Anforderungen an technische Dokumentation entspricht. 

Daher untersuchen wir ergänzend, inwiefern sich unsere Inhalte an etablierten Normen wie der **DIN EN ISO 82079-1** (Erstellen von Gebrauchsanleitungen) und der **ISO/IEC 26514** (Benutzerdokumentation für Software) orientieren – bewusst oder unbewusst.

Diese Normen bieten klare Kriterien für gut strukturierte, verständliche und nutzungsorientierte Inhalte. Die Analyse hilft uns:

- Stärken und bestehende Best Practices sichtbar zu machen,
- mögliche Lücken oder Verbesserungsansätze zu erkennen,
- und unsere Dokumentation noch robuster, professioneller und zukunftsfähiger aufzustellen.

Es geht also weniger um eine formale Zertifizierung – sondern mehr um die Neugier, wie viel „klassische TD“ schon in unserer modernen Arbeitsweise steckt.


### DIN EN ISO 82079-1

Die DIN EN ISO 82079-1 ist die internationale Norm für die Erstellung von Gebrauchsanleitungen und technischen Dokumentationen. Sie definiert Anforderungen an Planung, Entwicklung, Gestaltung und Präsentation von Bedienungsanleitungen und anderer technischer Dokumente für Produkte, einschließlich Software.

Die Norm fokussiert insbesondere auf:

- Die Anpassung der Dokumentation an die Zielgruppen und deren Bedürfnisse
- Die klare Strukturierung und verständliche Darstellung von Inhalten
- Die Berücksichtigung von Sicherheitshinweisen und Warnungen
- Den Einsatz von modularen Inhalten und Wiederverwendung (Single Source)
- Qualitätssicherung und Dokumentationsprozesse

Für Software-Dokumentationen ist sie eine wichtige Basis, auch wenn spezifischere Normen ergänzend herangezogen werden können.

---

### Checkliste zur Umsetzung der DIN EN ISO 82079-1 bei TS

| Kriterium                                                                                 | Umsetzung bei TS | Bemerkung                          |
|------------------------------------------------------------------------------------------|-----------------|----------------------------------|
| Zweck und Zielgruppe der Dokumentation sind definiert und dokumentiert                   |                 |                                  |
| Dokumentation deckt alle geplanten Benutzerrollen (z. B. Admin, Endnutzer) ab            |                 |                                  |
| Gliederung entspricht der Informationslogik (z. B. nach Aufgaben, Konzepten, Referenzen) |                 |                                  |
| Inhalt ist aufgabenorientiert („task-based“) strukturiert                                |                 |                                  |
| Begrifflichkeiten werden konsistent verwendet (Terminologiekontrolle)                    |                 |                                  |
| Wiederverwendung durch Modularisierung (Topics, Module, Includes) umgesetzt              |                 |                                  |
| Warnungen, Vorsichtsmaßnahmen und Hinweise normkonform platziert und formuliert          |                 |                                  |
| Dokument ist verständlich für die definierte Zielgruppe (Sprachregister, Fachniveau)     |                 |                                  |
| Navigation und Zugriff auf Inhalte ist strukturiert (Inhaltsverzeichnis, Links etc.)     |                 |                                  |
| Medienbruchfreie Darstellung (Print, HTML, PDF)                                          |                 |                                  |
| Metadaten wie Version, Autor, Veröffentlichungsdatum, Status sind vorhanden              |                 |                                  |
| Änderungsverfolgung und Versionskontrolle sind nachvollziehbar geregelt                  |                 |                                  |
| Technische Prüfung (Broken Links, Validierung, Formatprüfung) wird regelmäßig durchgeführt|                 |                                  |
| Reviewverfahren für inhaltliche und sprachliche Qualität implementiert                   |                 |                                  |
| Dokumentation ist Bestandteil des Softwareentwicklungsprozesses                          |                 |                                  |
| Benutzerfeedback wird gesammelt und in die Doku-Verbesserung integriert                  |                 |                                  |
| Barrierefreiheit berücksichtigt (z. B. Alt-Texte, Struktur für Screenreader)              |                 |                                  |

---

### ISO/IEC 26514

Die ISO/IEC 26514 ist eine internationale Norm, die sich speziell auf die Anforderungen und Gestaltung von Software-Benutzerdokumentationen konzentriert. Sie ergänzt allgemeine Normen wie die ISO 82079-1 um software-spezifische Aspekte.

Die Norm behandelt insbesondere:

- Strukturierung der Softwaredokumentation in Aufgaben, Konzepte und Referenzen
- Anforderungen an die Gestaltung der Inhalte für verschiedene Zielgruppen
- Integration von Sicherheitsinformationen und Warnhinweisen
- Nutzung von Wiederverwendung und Modularisierung zur Effizienzsteigerung
- Einbindung der Dokumentation in den Softwareentwicklungsprozess
- Qualitätssicherung und Benutzerunterstützung

ISO/IEC 26514 hilft, Software-Dokumentationen nutzerfreundlich, verständlich und vollständig zu gestalten.



### Checkliste zur Umsetzung der ISO/IEC 26514 bei TS

| Kriterium                                                                                 | Umsetzung bei TS | Bemerkung                          |
|------------------------------------------------------------------------------------------|-----------------|----------------------------------|
| Dokumentation ist in Aufgaben, Konzepte und Referenzen gegliedert                        |                 |                                  |
| Jede Einheit (Topic) behandelt nur ein Thema / eine Funktion                            |                 |                                  |
| Anleitungen sind als klare Schritt-für-Schritt-Prozesse dargestellt                     |                 |                                  |
| Konzepte sind verständlich und unabhängig von spezifischen Aufgaben erklärt             |                 |                                  |
| Warnungen und Sicherheitshinweise sind konsistent und gut sichtbar                      |                 |                                  |
| Wiederverwendung von Inhalten (Modularisierung, Includes, Variablen) wird genutzt       |                 |                                  |
| Dokumentation ist auf die unterschiedlichen Nutzerrollen abgestimmt                     |                 |                                  |
| Einheitliche Terminologie und Schreibstil werden eingehalten                            |                 |                                  |
| Strukturierte Navigation (Inhaltsverzeichnis, Querverweise) ist vorhanden               |                 |                                  |
| Dokumentationsprozess ist in den Softwareentwicklungszyklus integriert                   |                 |                                  |
| Metadaten und Versionierung sind vollständig und nachvollziehbar                        |                 |                                  |
| Qualitätssicherungsmaßnahmen (Reviews, Tests, Validierung) sind etabliert               |                 |                                  |
| Benutzerfeedback wird regelmäßig erfasst und für Verbesserungen genutzt                 |                 |                                  |
| Barrierefreiheit und Usability-Aspekte sind berücksichtigt                             |                 |                                  |



****
###  Weiterführende Themen

- [Best Practices der klassischen Technischen Dokumentation](classic-td-best-practices.md)
- [Funktionsdesign und Strukturprinzipien](fuktionsdesign.md)