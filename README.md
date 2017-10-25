# BarCamp RheinMain Website

[![Build Status](https://travis-ci.org/BCRM/static.svg?branch=master)](https://travis-ci.org/BCRM/static)

Source code for [barcamp-rheinmain.de](https://barcamp-rheinmain.de/) built with [Jekyll](https://jekyllrb.com/).

----

In diesem Repository finden sich die Inhalte für [barcamp-rheinmain.de](https://barcamp-rheinmain.de/). Die einzelnen Inhalts-Seite der Website liegen dabei als Dateien im [Markdown-Format](http://daringfireball.net/projects/markdown/) vor, aus denen dann das HTML zur Darstellung auf der Website erzeugt wird. In diesem Repository finden sich auch die Bilder zu den Inhalten, z.B. für den [Slider auf der Startseite](/_data/slides.yml).

## Inhalte bearbeiten

### Rechte erhalten

Zum Bearbeiten der Inhalte benötigst Du in jedem Fall einen Account auf GitHub, den du dir [hier](https://github.com/signup/free) anlegen kannst. Anschließend könntest Du direkt loslegen und die Inhalte mittels [Pull Requests](https://help.github.com/articles/using-pull-requests) bearbeiten, das ist aber etwas kompliziert. Deswegen melde dich bei [Markus](https://github.com/coderbyheart/) und er gibt dir dann Schreibrechte in diesem Repository damit Du vorhandene Inhalte ohne Umwege bearbeiten und auch neue Inhalte anlegen kannst.

### Vorhandene Inhalte bearbeiten

Gehe dazu auf die [Startseite des Repositories](https://github.com/BCRM/static). Wähle nun die Date aus, die Du bearbeiten willst. Klicke auf die Schaltfläche *Edit*. Nun öffnet sich eine Edtor. Da die meisten Dateien im Markdown-Syntax verfasst sind, kannst Du die Vorschau-Funktion von GitHub verwenden; klicke dazu auf die Schaltfläche *Preview*. Wenn Du mit deinen Änderungen zufrieden bist, klickst Du unten auf die grüne Schaltfläche. Es wäre nett, wenn Du deine Änderungen auch kurz in einem Kommentar beschreibst.

### Neue Inhalte anlegen

Über der Dateiliste gibt es neben der Anzeige des aktuellen Pfades (`static`/) ein *+*-Icon, hiermit kannst Du eine neue Datei anlegen, indem Du den Dateinamen inkl. Endung angibst. Du kannst diese Datei auch in einem Unter-Ordner anlegen, indem Du den Namen des Ordner und einem `/` vor den Dateinamen schreibst.

## Inhalte veröffentlichen

Die Inhalte werden automatisch nach dem Speichern auf der Seite veröffentlich. Du musst nichts weiter dazu tun.

## Seiten-Attribute

Bei den meisten Seiten findest Du am Anfange besonders formatierte Angaben, sogenannte Attribute, z.B. `order: 2`. Diese werden von der Website dazu verwendet, die jeweilige Anzeige anzupassen. Z.B. liefern sie information darüber, wie die Seite in der Unter-Navigation angezeigt wird.

Folgende Seitenattribute kannst Du verwenden:

 * `title: …` Definiert den Text, der als Titel in einem Hyperlink zu dieser Seite verwendet wird.
 * `order: 0…9` Definiert die Reihenfolge in der diese Seite in einer Liste  angezeigt wird, die alle Seiten im gleichen Ordner auflistet.
 * `slider: …` aktiviert den Bilder-Slider auf der Seite und gibt an, welche Datei aus dem Ordner `Slider` verwendet wird. 
 * `history: (true|false)` gibt an, ob es sich um historische Inhalte handelt, dann wird ein entsprechender Hinweise angezeigt.
 * `barcamp: YYYY` wählt das BarCamp aus, das auf dieser Seite angezeigt werden, anstatt dem aktuellen.

## Spezielle Inhalte

Es gibt einige spezielle Inhalte, die nicht direkt als Seiten auf der Website angezeigt werden:

 * In der Date [\_data/barcamps.yml](_data/barcamps.yml) werden die BarCamps (also das aktuelle und die vergangenen) konfiguriert, dort werden auch die Sponsoren eingetragen.
 * Die Datei [\_data/participants.yml](/_data/participants.yml) wir verwendet, um die die öffentliche Teilnehmerliste zu erzeugen.
 * Die Datei [\_data/slides.yml](/_data/slides.yml) wird dazu verwendet den Bilder-Slider auf der Startseite zu erzeugen.
 * In der Datei [\_config.yml](/_config.yml) wird das aktive BarCamp eingetragen
