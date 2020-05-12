import { Component, OnDestroy, NgZone } from "@angular/core";
import { Camera } from "@ionic-native/camera/ngx";
import {
  ActionSheetController,
  LoadingController,
  ToastController,
  ModalController,
  Events
} from "@ionic/angular";
import { TravelAppService } from "../travel-app.service";
import * as firebase from "firebase";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterPage } from "../routerpage";
import { Crop } from '@ionic-native/crop/ngx';
// import { ModalController } from "@ionic/angular";
import { File } from '@ionic-native/file/ngx';

declare var require: any;
@Component({
  selector: "app-addtrip",
  templateUrl: "./addtrip.page.html",
  styleUrls: ["./addtrip.page.scss"]
})

export class AddtripPage extends RouterPage implements OnDestroy {
  testjson = [
    {
      city: "Aborlan",
      province: "Palawan"
    },
    {
      city: "Abra de Ilog",
      province: "Occidental Mindoro"
    },
    {
      city: "Abucay",
      province: "Bataan"
    },
    {
      city: "Abulug",
      province: "Cagayan"
    },
    {
      city: "Abuyog",
      province: "Leyte"
    },
    {
      city: "Adams",
      province: "Ilocos Norte"
    },
    {
      city: "Agdangan",
      province: "Quezon"
    },
    {
      city: "Aglipay",
      province: "Quirino"
    },
    {
      city: "Agno",
      province: "Pangasinan"
    },
    {
      city: "Agoncillo",
      province: "Batangas"
    },
    {
      city: "Agoo",
      province: "La Union"
    },
    {
      city: "Aguilar",
      province: "Pangasinan"
    },
    {
      city: "Aguinaldo",
      province: "Ifugao"
    },
    {
      city: "Agutaya",
      province: "Palawan"
    },
    {
      city: "Ajuy",
      province: "Iloilo"
    },
    {
      city: "Akbar",
      province: "Basilan"
    },
    {
      city: "Al-Barka",
      province: "Basilan"
    },
    {
      city: "Alabat",
      province: "Quezon"
    },
    {
      city: "Alabel",
      province: "Sarangani"
    },
    {
      city: "Alamada",
      province: "Cotabato"
    },
    {
      city: "Alaminos",
      province: "Laguna"
    },
    {
      city: "Alaminos",
      province: "Pangasinan"
    },
    {
      city: "Alangalang",
      province: "Leyte"
    },
    {
      city: "Albuera",
      province: "Leyte"
    },
    {
      city: "Alburquerque",
      province: "Bohol"
    },
    {
      city: "Alcala",
      province: "Cagayan"
    },
    {
      city: "Alcala",
      province: "Pangasinan"
    },
    {
      city: "Alcantara",
      province: "Cebu"
    },
    {
      city: "Alcantara",
      province: "Romblon"
    },
    {
      city: "Alcoy",
      province: "Cebu"
    },
    {
      city: "Alegria",
      province: "Cebu"
    },
    {
      city: "Alegria",
      province: "Surigao del Norte"
    },
    {
      city: "Aleosan",
      province: "Cotabato"
    },
    {
      city: "Alfonso",
      province: "Cavite"
    },
    {
      city: "Alfonso Castañeda",
      province: "Nueva Vizcaya"
    },
    {
      city: "Alfonso Lista (Potia)",
      province: "Ifugao"
    },
    {
      city: "Aliaga",
      province: "Nueva Ecija"
    },
    {
      city: "Alicia",
      province: "Bohol"
    },
    {
      city: "Alicia",
      province: "Isabela"
    },
    {
      city: "Alicia",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Alilem",
      province: "Ilocos Sur"
    },
    {
      city: "Alimodian",
      province: "Iloilo"
    },
    {
      city: "Alitagtag",
      province: "Batangas"
    },
    {
      city: "Allacapan",
      province: "Cagayan"
    },
    {
      city: "Allen",
      province: "Northern Samar"
    },
    {
      city: "Almagro",
      province: "Samar"
    },
    {
      city: "Almeria",
      province: "Biliran"
    },
    {
      city: "Aloguinsan",
      province: "Cebu"
    },
    {
      city: "Aloran",
      province: "Misamis Occidental"
    },
    {
      city: "Altavas",
      province: "Aklan"
    },
    {
      city: "Alubijid",
      province: "Misamis Oriental"
    },
    {
      city: "Amadeo",
      province: "Cavite"
    },
    {
      city: "Amai Manabilang (Bumbaran)",
      province: "Lanao del Sur"
    },
    {
      city: "Ambaguio",
      province: "Nueva Vizcaya"
    },
    {
      city: "Amlan (Ayuquitan)",
      province: "Negros Oriental"
    },
    {
      city: "Ampatuan",
      province: "Maguindanao"
    },
    {
      city: "Amulung",
      province: "Cagayan"
    },
    {
      city: "Anahawan",
      province: "Southern Leyte"
    },
    {
      city: "Anao",
      province: "Tarlac"
    },
    {
      city: "Anda",
      province: "Bohol"
    },
    {
      city: "Anda",
      province: "Pangasinan"
    },
    {
      city: "Angadanan",
      province: "Isabela"
    },
    {
      city: "Angat",
      province: "Bulacan"
    },
    {
      city: "Angeles",
      province: "Pampanga"
    },
    {
      city: "Angono",
      province: "Rizal"
    },
    {
      city: "Anilao",
      province: "Iloilo"
    },
    {
      city: "Anini-y",
      province: "Antique"
    },
    {
      city: "Antequera",
      province: "Bohol"
    },
    {
      city: "Antipas",
      province: "Cotabato"
    },
    {
      city: "Antipolo",
      province: "Rizal"
    },
    {
      city: "Apalit",
      province: "Pampanga"
    },
    {
      city: "Aparri",
      province: "Cagayan"
    },
    {
      city: "Araceli",
      province: "Palawan"
    },
    {
      city: "Arakan",
      province: "Cotabato"
    },
    {
      city: "Arayat",
      province: "Pampanga"
    },
    {
      city: "Argao",
      province: "Cebu"
    },
    {
      city: "Aringay",
      province: "La Union"
    },
    {
      city: "Aritao",
      province: "Nueva Vizcaya"
    },
    {
      city: "Aroroy",
      province: "Masbate"
    },
    {
      city: "Arteche",
      province: "Eastern Samar"
    },
    {
      city: "Asingan",
      province: "Pangasinan"
    },
    {
      city: "Asipulo",
      province: "Ifugao"
    },
    {
      city: "Asturias",
      province: "Cebu"
    },
    {
      city: "Asuncion (Saug)",
      province: "Davao del Norte"
    },
    {
      city: "Atimonan",
      province: "Quezon"
    },
    {
      city: "Atok",
      province: "Benguet"
    },
    {
      city: "Aurora",
      province: "Isabela"
    },
    {
      city: "Aurora",
      province: "Zamboanga del Sur"
    },
    {
      city: "Ayungon",
      province: "Negros Oriental"
    },
    {
      city: "Baao",
      province: "Camarines Sur"
    },
    {
      city: "Babatngon",
      province: "Leyte"
    },
    {
      city: "Bacacay",
      province: "Albay"
    },
    {
      city: "Bacarra",
      province: "Ilocos Norte"
    },
    {
      city: "Baclayon",
      province: "Bohol"
    },
    {
      city: "Bacnotan",
      province: "La Union"
    },
    {
      city: "Baco",
      province: "Oriental Mindoro"
    },
    {
      city: "Bacolod",
      province: "Lanao del Norte"
    },
    {
      city: "Bacolod",
      province: "Negros Occidental"
    },
    {
      city: "Bacolod-Kalawi (Bacolod-Grande)",
      province: "Lanao del Sur"
    },
    {
      city: "Bacolor",
      province: "Pampanga"
    },
    {
      city: "Bacong",
      province: "Negros Oriental"
    },
    {
      city: "Bacoor",
      province: "Cavite"
    },
    {
      city: "Bacuag",
      province: "Surigao del Norte"
    },
    {
      city: "Badian",
      province: "Cebu"
    },
    {
      city: "Badiangan",
      province: "Iloilo"
    },
    {
      city: "Badoc",
      province: "Ilocos Norte"
    },
    {
      city: "Bagabag",
      province: "Nueva Vizcaya"
    },
    {
      city: "Bagac",
      province: "Bataan"
    },
    {
      city: "Bagamanoc",
      province: "Catanduanes"
    },
    {
      city: "Baganga",
      province: "Davao Oriental"
    },
    {
      city: "Baggao",
      province: "Cagayan"
    },
    {
      city: "Bago",
      province: "Negros Occidental"
    },
    {
      city: "Baguio",
      province: "Benguet"
    },
    {
      city: "Bagulin",
      province: "La Union"
    },
    {
      city: "Bagumbayan",
      province: "Sultan Kudarat"
    },
    {
      city: "Bais",
      province: "Negros Oriental"
    },
    {
      city: "Bakun",
      province: "Benguet"
    },
    {
      city: "Balabac",
      province: "Palawan"
    },
    {
      city: "Balabagan",
      province: "Lanao del Sur"
    },
    {
      city: "Balagtas (Bigaa)",
      province: "Bulacan"
    },
    {
      city: "Balamban",
      province: "Cebu"
    },
    {
      city: "Balanga",
      province: "Bataan"
    },
    {
      city: "Balangiga",
      province: "Eastern Samar"
    },
    {
      city: "Balangkayan",
      province: "Eastern Samar"
    },
    {
      city: "Balaoan",
      province: "La Union"
    },
    {
      city: "Balasan",
      province: "Iloilo"
    },
    {
      city: "Balatan",
      province: "Camarines Sur"
    },
    {
      city: "Balayan",
      province: "Batangas"
    },
    {
      city: "Balbalan",
      province: "Kalinga"
    },
    {
      city: "Baleno",
      province: "Masbate"
    },
    {
      city: "Baler",
      province: "Aurora"
    },
    {
      city: "Balete",
      province: "Aklan"
    },
    {
      city: "Balete",
      province: "Batangas"
    },
    {
      city: "Baliangao",
      province: "Misamis Occidental"
    },
    {
      city: "Baliguian",
      province: "Zamboanga del Norte"
    },
    {
      city: "Balilihan",
      province: "Bohol"
    },
    {
      city: "Balindong (Watu)",
      province: "Lanao del Sur"
    },
    {
      city: "Balingasag",
      province: "Misamis Oriental"
    },
    {
      city: "Balingoan",
      province: "Misamis Oriental"
    },
    {
      city: "Baliuag",
      province: "Bulacan"
    },
    {
      city: "Ballesteros",
      province: "Cagayan"
    },
    {
      city: "Baloi",
      province: "Lanao del Norte"
    },
    {
      city: "Balud",
      province: "Masbate"
    },
    {
      city: "Balungao",
      province: "Pangasinan"
    },
    {
      city: "Bamban",
      province: "Tarlac"
    },
    {
      city: "Bambang",
      province: "Nueva Vizcaya"
    },
    {
      city: "Banate",
      province: "Iloilo"
    },
    {
      city: "Banaue",
      province: "Ifugao"
    },
    {
      city: "Banaybanay",
      province: "Davao Oriental"
    },
    {
      city: "Banayoyo",
      province: "Ilocos Sur"
    },
    {
      city: "Banga",
      province: "Aklan"
    },
    {
      city: "Banga",
      province: "South Cotabato"
    },
    {
      city: "Bangar",
      province: "La Union"
    },
    {
      city: "Bangued",
      province: "Abra"
    },
    {
      city: "Bangui",
      province: "Ilocos Norte"
    },
    {
      city: "Banguingui (Tongkil)",
      province: "Sulu"
    },
    {
      city: "Bani",
      province: "Pangasinan"
    },
    {
      city: "Banisilan",
      province: "Cotabato"
    },
    {
      city: "Banna (Espiritu)",
      province: "Ilocos Norte"
    },
    {
      city: "Bansalan",
      province: "Davao del Sur"
    },
    {
      city: "Bansud",
      province: "Oriental Mindoro"
    },
    {
      city: "Bantay",
      province: "Ilocos Sur"
    },
    {
      city: "Bantayan",
      province: "Cebu"
    },
    {
      city: "Banton (Jones)",
      province: "Romblon"
    },
    {
      city: "Baras",
      province: "Catanduanes"
    },
    {
      city: "Baras",
      province: "Rizal"
    },
    {
      city: "Barbaza",
      province: "Antique"
    },
    {
      city: "Barcelona",
      province: "Sorsogon"
    },
    {
      city: "Barili",
      province: "Cebu"
    },
    {
      city: "Barira",
      province: "Maguindanao"
    },
    {
      city: "Barlig",
      province: "Mountain Province"
    },
    {
      city: "Barobo",
      province: "Surigao del Sur"
    },
    {
      city: "Barotac Nuevo",
      province: "Iloilo"
    },
    {
      city: "Barotac Viejo",
      province: "Iloilo"
    },
    {
      city: "Baroy",
      province: "Lanao del Norte"
    },
    {
      city: "Barugo",
      province: "Leyte"
    },
    {
      city: "Basay",
      province: "Negros Oriental"
    },
    {
      city: "Basco",
      province: "Batanes"
    },
    {
      city: "Basey",
      province: "Samar"
    },
    {
      city: "Basilisa (Rizal)",
      province: "Dinagat Islands"
    },
    {
      city: "Basista",
      province: "Pangasinan"
    },
    {
      city: "Basud",
      province: "Camarines Norte"
    },
    {
      city: "Batac",
      province: "Ilocos Norte"
    },
    {
      city: "Batad",
      province: "Iloilo"
    },
    {
      city: "Batan",
      province: "Aklan"
    },
    {
      city: "Batangas City",
      province: "Batangas"
    },
    {
      city: "Bataraza",
      province: "Palawan"
    },
    {
      city: "Bato",
      province: "Camarines Sur"
    },
    {
      city: "Bato",
      province: "Catanduanes"
    },
    {
      city: "Bato",
      province: "Leyte"
    },
    {
      city: "Batuan",
      province: "Bohol"
    },
    {
      city: "Batuan",
      province: "Masbate"
    },
    {
      city: "Bauan",
      province: "Batangas"
    },
    {
      city: "Bauang",
      province: "La Union"
    },
    {
      city: "Bauko",
      province: "Mountain Province"
    },
    {
      city: "Baungon",
      province: "Bukidnon"
    },
    {
      city: "Bautista",
      province: "Pangasinan"
    },
    {
      city: "Bay",
      province: "Laguna"
    },
    {
      city: "Bayabas",
      province: "Surigao del Sur"
    },
    {
      city: "Bayambang",
      province: "Pangasinan"
    },
    {
      city: "Bayang",
      province: "Lanao del Sur"
    },
    {
      city: "Bayawan (Tulong)",
      province: "Negros Oriental"
    },
    {
      city: "Baybay",
      province: "Leyte"
    },
    {
      city: "Bayog",
      province: "Zamboanga del Sur"
    },
    {
      city: "Bayombong",
      province: "Nueva Vizcaya"
    },
    {
      city: "Bayugan",
      province: "Agusan del Sur"
    },
    {
      city: "Belison",
      province: "Antique"
    },
    {
      city: "Benito Soliven",
      province: "Isabela"
    },
    {
      city: "Besao",
      province: "Mountain Province"
    },
    {
      city: "Bien Unido",
      province: "Bohol"
    },
    {
      city: "Bilar",
      province: "Bohol"
    },
    {
      city: "Biliran",
      province: "Biliran"
    },
    {
      city: "Binalbagan",
      province: "Negros Occidental"
    },
    {
      city: "Binalonan",
      province: "Pangasinan"
    },
    {
      city: "Biñan",
      province: "Laguna"
    },
    {
      city: "Binangonan",
      province: "Rizal"
    },
    {
      city: "Bindoy (Payabon)",
      province: "Negros Oriental"
    },
    {
      city: "Bingawan",
      province: "Iloilo"
    },
    {
      city: "Binidayan",
      province: "Lanao del Sur"
    },
    {
      city: "Binmaley",
      province: "Pangasinan"
    },
    {
      city: "Binuangan",
      province: "Misamis Oriental"
    },
    {
      city: "Biri",
      province: "Northern Samar"
    },
    {
      city: "Bislig",
      province: "Surigao del Sur"
    },
    {
      city: "Boac",
      province: "Marinduque"
    },
    {
      city: "Bobon",
      province: "Northern Samar"
    },
    {
      city: "Bocaue",
      province: "Bulacan"
    },
    {
      city: "Bogo",
      province: "Cebu"
    },
    {
      city: "Bokod",
      province: "Benguet"
    },
    {
      city: "Bolinao",
      province: "Pangasinan"
    },
    {
      city: "Boliney",
      province: "Abra"
    },
    {
      city: "Boljoon",
      province: "Cebu"
    },
    {
      city: "Bombon",
      province: "Camarines Sur"
    },
    {
      city: "Bongabon",
      province: "Nueva Ecija"
    },
    {
      city: "Bongabong",
      province: "Oriental Mindoro"
    },
    {
      city: "Bongao",
      province: "Tawi-Tawi"
    },
    {
      city: "Bonifacio",
      province: "Misamis Occidental"
    },
    {
      city: "Bontoc",
      province: "Mountain Province"
    },
    {
      city: "Bontoc",
      province: "Southern Leyte"
    },
    {
      city: "Borbon",
      province: "Cebu"
    },
    {
      city: "Borongan",
      province: "Eastern Samar"
    },
    {
      city: "Boston",
      province: "Davao Oriental"
    },
    {
      city: "Botolan",
      province: "Zambales"
    },
    {
      city: "Braulio E. Dujali",
      province: "Davao del Norte"
    },
    {
      city: "Brooke's Point",
      province: "Palawan"
    },
    {
      city: "Buadiposo-Buntong",
      province: "Lanao del Sur"
    },
    {
      city: "Bubong",
      province: "Lanao del Sur"
    },
    {
      city: "Bucay",
      province: "Abra"
    },
    {
      city: "Bucloc",
      province: "Abra"
    },
    {
      city: "Buenavista",
      province: "Agusan del Norte"
    },
    {
      city: "Buenavista",
      province: "Bohol"
    },
    {
      city: "Buenavista",
      province: "Guimaras"
    },
    {
      city: "Buenavista",
      province: "Marinduque"
    },
    {
      city: "Buenavista",
      province: "Quezon"
    },
    {
      city: "Bugallon",
      province: "Pangasinan"
    },
    {
      city: "Bugasong",
      province: "Antique"
    },
    {
      city: "Buguey",
      province: "Cagayan"
    },
    {
      city: "Buguias",
      province: "Benguet"
    },
    {
      city: "Buhi",
      province: "Camarines Sur"
    },
    {
      city: "Bula",
      province: "Camarines Sur"
    },
    {
      city: "Bulakan",
      province: "Bulacan"
    },
    {
      city: "Bulalacao (San Pedro)",
      province: "Oriental Mindoro"
    },
    {
      city: "Bulan",
      province: "Sorsogon"
    },
    {
      city: "Buldon",
      province: "Maguindanao"
    },
    {
      city: "Buluan",
      province: "Maguindanao"
    },
    {
      city: "Bulusan",
      province: "Sorsogon"
    },
    {
      city: "Bunawan",
      province: "Agusan del Sur"
    },
    {
      city: "Burauen",
      province: "Leyte"
    },
    {
      city: "Burdeos",
      province: "Quezon"
    },
    {
      city: "Burgos",
      province: "Ilocos Norte"
    },
    {
      city: "Burgos",
      province: "Ilocos Sur"
    },
    {
      city: "Burgos",
      province: "Isabela"
    },
    {
      city: "Burgos",
      province: "La Union"
    },
    {
      city: "Burgos",
      province: "Pangasinan"
    },
    {
      city: "Burgos",
      province: "Surigao del Norte"
    },
    {
      city: "Buruanga",
      province: "Aklan"
    },
    {
      city: "Bustos",
      province: "Bulacan"
    },
    {
      city: "Busuanga",
      province: "Palawan"
    },
    {
      city: "Butig",
      province: "Lanao del Sur"
    },
    {
      city: "Butuan",
      province: "Agusan del Norte"
    },
    {
      city: "Buug",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Caba",
      province: "La Union"
    },
    {
      city: "Cabadbaran",
      province: "Agusan del Norte"
    },
    {
      city: "Cabagan",
      province: "Isabela"
    },
    {
      city: "Cabanatuan",
      province: "Nueva Ecija"
    },
    {
      city: "Cabangan",
      province: "Zambales"
    },
    {
      city: "Cabanglasan",
      province: "Bukidnon"
    },
    {
      city: "Cabarroguis",
      province: "Quirino"
    },
    {
      city: "Cabatuan",
      province: "Iloilo"
    },
    {
      city: "Cabatuan",
      province: "Isabela"
    },
    {
      city: "Cabiao",
      province: "Nueva Ecija"
    },
    {
      city: "Cabucgayan",
      province: "Biliran"
    },
    {
      city: "Cabugao",
      province: "Ilocos Sur"
    },
    {
      city: "Cabusao",
      province: "Camarines Sur"
    },
    {
      city: "Cabuyao",
      province: "Laguna"
    },
    {
      city: "Cadiz",
      province: "Negros Occidental"
    },
    {
      city: "Cagayan de Oro",
      province: "Misamis Oriental"
    },
    {
      city: "Cagayancillo",
      province: "Palawan"
    },
    {
      city: "Cagdianao",
      province: "Dinagat Islands"
    },
    {
      city: "Cagwait",
      province: "Surigao del Sur"
    },
    {
      city: "Caibiran",
      province: "Biliran"
    },
    {
      city: "Cainta",
      province: "Rizal"
    },
    {
      city: "Cajidiocan",
      province: "Romblon"
    },
    {
      city: "Calabanga",
      province: "Camarines Sur"
    },
    {
      city: "Calaca",
      province: "Batangas"
    },
    {
      city: "Calamba",
      province: "Laguna"
    },
    {
      city: "Calamba",
      province: "Misamis Occidental"
    },
    {
      city: "Calanasan",
      province: "Apayao"
    },
    {
      city: "Calanogas",
      province: "Lanao del Sur"
    },
    {
      city: "Calapan",
      province: "Oriental Mindoro"
    },
    {
      city: "Calape",
      province: "Bohol"
    },
    {
      city: "Calasiao",
      province: "Pangasinan"
    },
    {
      city: "Calatagan",
      province: "Batangas"
    },
    {
      city: "Calatrava",
      province: "Negros Occidental"
    },
    {
      city: "Calatrava",
      province: "Romblon"
    },
    {
      city: "Calauag",
      province: "Quezon"
    },
    {
      city: "Calauan",
      province: "Laguna"
    },
    {
      city: "Calayan",
      province: "Cagayan"
    },
    {
      city: "Calbayog",
      province: "Samar"
    },
    {
      city: "Calbiga",
      province: "Samar"
    },
    {
      city: "Calinog",
      province: "Iloilo"
    },
    {
      city: "Calintaan",
      province: "Occidental Mindoro"
    },
    {
      city: "Caloocan",
      province: "NCR, 3rd district"
    },
    {
      city: "Calubian",
      province: "Leyte"
    },
    {
      city: "Calumpit",
      province: "Bulacan"
    },
    {
      city: "Caluya",
      province: "Antique"
    },
    {
      city: "Camalaniugan",
      province: "Cagayan"
    },
    {
      city: "Camalig",
      province: "Albay"
    },
    {
      city: "Camaligan",
      province: "Camarines Sur"
    },
    {
      city: "Camiling",
      province: "Tarlac"
    },
    {
      city: "Can-avid",
      province: "Eastern Samar"
    },
    {
      city: "Canaman",
      province: "Camarines Sur"
    },
    {
      city: "Candaba",
      province: "Pampanga"
    },
    {
      city: "Candelaria",
      province: "Quezon"
    },
    {
      city: "Candelaria",
      province: "Zambales"
    },
    {
      city: "Candijay",
      province: "Bohol"
    },
    {
      city: "Candon",
      province: "Ilocos Sur"
    },
    {
      city: "Candoni",
      province: "Negros Occidental"
    },
    {
      city: "Canlaon",
      province: "Negros Oriental"
    },
    {
      city: "Cantilan",
      province: "Surigao del Sur"
    },
    {
      city: "Caoayan",
      province: "Ilocos Sur"
    },
    {
      city: "Capalonga",
      province: "Camarines Norte"
    },
    {
      city: "Capas",
      province: "Tarlac"
    },
    {
      city: "Capoocan",
      province: "Leyte"
    },
    {
      city: "Capul",
      province: "Northern Samar"
    },
    {
      city: "Caraga",
      province: "Davao Oriental"
    },
    {
      city: "Caramoan",
      province: "Camarines Sur"
    },
    {
      city: "Caramoran",
      province: "Catanduanes"
    },
    {
      city: "Carasi",
      province: "Ilocos Norte"
    },
    {
      city: "Carcar",
      province: "Cebu"
    },
    {
      city: "Cardona",
      province: "Rizal"
    },
    {
      city: "Carigara",
      province: "Leyte"
    },
    {
      city: "Carles",
      province: "Iloilo"
    },
    {
      city: "Carmen",
      province: "Agusan del Norte"
    },
    {
      city: "Carmen",
      province: "Bohol"
    },
    {
      city: "Carmen",
      province: "Cebu"
    },
    {
      city: "Carmen",
      province: "Cotabato"
    },
    {
      city: "Carmen",
      province: "Davao del Norte"
    },
    {
      city: "Carmen",
      province: "Surigao del Sur"
    },
    {
      city: "Carmona",
      province: "Cavite"
    },
    {
      city: "Carranglan",
      province: "Nueva Ecija"
    },
    {
      city: "Carrascal",
      province: "Surigao del Sur"
    },
    {
      city: "Casiguran",
      province: "Aurora"
    },
    {
      city: "Casiguran",
      province: "Sorsogon"
    },
    {
      city: "Castilla",
      province: "Sorsogon"
    },
    {
      city: "Castillejos",
      province: "Zambales"
    },
    {
      city: "Cataingan",
      province: "Masbate"
    },
    {
      city: "Catanauan",
      province: "Quezon"
    },
    {
      city: "Catarman",
      province: "Camiguin"
    },
    {
      city: "Catarman",
      province: "Northern Samar"
    },
    {
      city: "Catbalogan",
      province: "Samar"
    },
    {
      city: "Cateel",
      province: "Davao Oriental"
    },
    {
      city: "Catigbian",
      province: "Bohol"
    },
    {
      city: "Catmon",
      province: "Cebu"
    },
    {
      city: "Catubig",
      province: "Northern Samar"
    },
    {
      city: "Cauayan",
      province: "Isabela"
    },
    {
      city: "Cauayan",
      province: "Negros Occidental"
    },
    {
      city: "Cavinti",
      province: "Laguna"
    },
    {
      city: "Cavite City",
      province: "Cavite"
    },
    {
      city: "Cawayan",
      province: "Masbate"
    },
    {
      city: "Cebu City",
      province: "Cebu"
    },
    {
      city: "Cervantes",
      province: "Ilocos Sur"
    },
    {
      city: "Clarin",
      province: "Bohol"
    },
    {
      city: "Clarin",
      province: "Misamis Occidental"
    },
    {
      city: "Claver",
      province: "Surigao del Norte"
    },
    {
      city: "Claveria",
      province: "Cagayan"
    },
    {
      city: "Claveria",
      province: "Masbate"
    },
    {
      city: "Claveria",
      province: "Misamis Oriental"
    },
    {
      city: "Columbio",
      province: "Sultan Kudarat"
    },
    {
      city: "Compostela",
      province: "Cebu"
    },
    {
      city: "Compostela",
      province: "Compostela Valley"
    },
    {
      city: "Concepcion",
      province: "Iloilo"
    },
    {
      city: "Concepcion",
      province: "Misamis Occidental"
    },
    {
      city: "Concepcion",
      province: "Romblon"
    },
    {
      city: "Concepcion",
      province: "Tarlac"
    },
    {
      city: "Conner",
      province: "Apayao"
    },
    {
      city: "Consolacion",
      province: "Cebu"
    },
    {
      city: "Corcuera",
      province: "Romblon"
    },
    {
      city: "Cordon",
      province: "Isabela"
    },
    {
      city: "Cordova",
      province: "Cebu"
    },
    {
      city: "Corella",
      province: "Bohol"
    },
    {
      city: "Coron",
      province: "Palawan"
    },
    {
      city: "Cortes",
      province: "Bohol"
    },
    {
      city: "Cortes",
      province: "Surigao del Sur"
    },
    {
      city: "Cotabato City",
      province: "Maguindanao"
    },
    {
      city: "Cuartero",
      province: "Capiz"
    },
    {
      city: "Cuenca",
      province: "Batangas"
    },
    {
      city: "Culaba",
      province: "Biliran"
    },
    {
      city: "Culasi",
      province: "Antique"
    },
    {
      city: "Culion",
      province: "Palawan"
    },
    {
      city: "Currimao",
      province: "Ilocos Norte"
    },
    {
      city: "Cuyapo",
      province: "Nueva Ecija"
    },
    {
      city: "Cuyo",
      province: "Palawan"
    },
    {
      city: "Daanbantayan",
      province: "Cebu"
    },
    {
      city: "Daet",
      province: "Camarines Norte"
    },
    {
      city: "Dagami",
      province: "Leyte"
    },
    {
      city: "Dagohoy",
      province: "Bohol"
    },
    {
      city: "Daguioman",
      province: "Abra"
    },
    {
      city: "Dagupan",
      province: "Pangasinan"
    },
    {
      city: "Dalaguete",
      province: "Cebu"
    },
    {
      city: "Damulog",
      province: "Bukidnon"
    },
    {
      city: "Danao",
      province: "Bohol"
    },
    {
      city: "Danao",
      province: "Cebu"
    },
    {
      city: "Dangcagan",
      province: "Bukidnon"
    },
    {
      city: "Danglas",
      province: "Abra"
    },
    {
      city: "Dao",
      province: "Capiz"
    },
    {
      city: "Dapa",
      province: "Surigao del Norte"
    },
    {
      city: "Dapitan",
      province: "Zamboanga del Norte"
    },
    {
      city: "Daraga (Locsin)",
      province: "Albay"
    },
    {
      city: "Daram",
      province: "Samar"
    },
    {
      city: "Dasmariñas",
      province: "Cavite"
    },
    {
      city: "Dasol",
      province: "Pangasinan"
    },
    {
      city: "Datu Abdullah Sangki",
      province: "Maguindanao"
    },
    {
      city: "Datu Anggal Midtimbang",
      province: "Maguindanao"
    },
    {
      city: "Datu Blah T. Sinsuat",
      province: "Maguindanao"
    },
    {
      city: "Datu Hoffer Ampatuan",
      province: "Maguindanao"
    },
    {
      city: "Datu Montawal (Pagagawan)",
      province: "Maguindanao"
    },
    {
      city: "Datu Odin Sinsuat (Dinaig)",
      province: "Maguindanao"
    },
    {
      city: "Datu Paglas",
      province: "Maguindanao"
    },
    {
      city: "Datu Piang (Dulawan)",
      province: "Maguindanao"
    },
    {
      city: "Datu Salibo",
      province: "Maguindanao"
    },
    {
      city: "Datu Saudi-Ampatuan",
      province: "Maguindanao"
    },
    {
      city: "Datu Unsay",
      province: "Maguindanao"
    },
    {
      city: "Dauin",
      province: "Negros Oriental"
    },
    {
      city: "Dauis",
      province: "Bohol"
    },
    {
      city: "Davao City",
      province: "Davao del Sur"
    },
    {
      city: "Del Carmen",
      province: "Surigao del Norte"
    },
    {
      city: "Del Gallego",
      province: "Camarines Sur"
    },
    {
      city: "Delfin Albano (Magsaysay)",
      province: "Isabela"
    },
    {
      city: "Diadi",
      province: "Nueva Vizcaya"
    },
    {
      city: "Diffun",
      province: "Quirino"
    },
    {
      city: "Digos",
      province: "Davao del Sur"
    },
    {
      city: "Dilasag",
      province: "Aurora"
    },
    {
      city: "Dimasalang",
      province: "Masbate"
    },
    {
      city: "Dimataling",
      province: "Zamboanga del Sur"
    },
    {
      city: "Dimiao",
      province: "Bohol"
    },
    {
      city: "Dinagat",
      province: "Dinagat Islands"
    },
    {
      city: "Dinalungan",
      province: "Aurora"
    },
    {
      city: "Dinalupihan",
      province: "Bataan"
    },
    {
      city: "Dinapigue",
      province: "Isabela"
    },
    {
      city: "Dinas",
      province: "Zamboanga del Sur"
    },
    {
      city: "Dingalan",
      province: "Aurora"
    },
    {
      city: "Dingle",
      province: "Iloilo"
    },
    {
      city: "Dingras",
      province: "Ilocos Norte"
    },
    {
      city: "Dipaculao",
      province: "Aurora"
    },
    {
      city: "Diplahan",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Dipolog",
      province: "Zamboanga del Norte"
    },
    {
      city: "Ditsaan-Ramain",
      province: "Lanao del Sur"
    },
    {
      city: "Divilacan",
      province: "Isabela"
    },
    {
      city: "Dolores",
      province: "Abra"
    },
    {
      city: "Dolores",
      province: "Eastern Samar"
    },
    {
      city: "Dolores",
      province: "Quezon"
    },
    {
      city: "Don Carlos",
      province: "Bukidnon"
    },
    {
      city: "Don Marcelino",
      province: "Davao Occidental"
    },
    {
      city: "Don Victoriano Chiongbian (Don Mariano Marcos)",
      province: "Misamis Occidental"
    },
    {
      city: "Doña Remedios Trinidad",
      province: "Bulacan"
    },
    {
      city: "Donsol",
      province: "Sorsogon"
    },
    {
      city: "Dueñas",
      province: "Iloilo"
    },
    {
      city: "Duero",
      province: "Bohol"
    },
    {
      city: "Dulag",
      province: "Leyte"
    },
    {
      city: "Dumaguete",
      province: "Negros Oriental"
    },
    {
      city: "Dumalag",
      province: "Capiz"
    },
    {
      city: "Dumalinao",
      province: "Zamboanga del Sur"
    },
    {
      city: "Dumalneg",
      province: "Ilocos Norte"
    },
    {
      city: "Dumangas",
      province: "Iloilo"
    },
    {
      city: "Dumanjug",
      province: "Cebu"
    },
    {
      city: "Dumaran",
      province: "Palawan"
    },
    {
      city: "Dumarao",
      province: "Capiz"
    },
    {
      city: "Dumingag",
      province: "Zamboanga del Sur"
    },
    {
      city: "Dupax del Norte",
      province: "Nueva Vizcaya"
    },
    {
      city: "Dupax del Sur",
      province: "Nueva Vizcaya"
    },
    {
      city: "Echague",
      province: "Isabela"
    },
    {
      city: "El Nido (Bacuit)",
      province: "Palawan"
    },
    {
      city: "El Salvador",
      province: "Misamis Oriental"
    },
    {
      city: "Enrile",
      province: "Cagayan"
    },
    {
      city: "Enrique B. Magalona (Saravia)",
      province: "Negros Occidental"
    },
    {
      city: "Enrique Villanueva",
      province: "Siquijor"
    },
    {
      city: "Escalante",
      province: "Negros Occidental"
    },
    {
      city: "Esperanza",
      province: "Agusan del Sur"
    },
    {
      city: "Esperanza",
      province: "Masbate"
    },
    {
      city: "Esperanza",
      province: "Sultan Kudarat"
    },
    {
      city: "Estancia",
      province: "Iloilo"
    },
    {
      city: "Famy",
      province: "Laguna"
    },
    {
      city: "Ferrol",
      province: "Romblon"
    },
    {
      city: "Flora",
      province: "Apayao"
    },
    {
      city: "Floridablanca",
      province: "Pampanga"
    },
    {
      city: "Gabaldon (Bitulok & Sabani)",
      province: "Nueva Ecija"
    },
    {
      city: "Gainza",
      province: "Camarines Sur"
    },
    {
      city: "Galimuyod",
      province: "Ilocos Sur"
    },
    {
      city: "Gamay",
      province: "Northern Samar"
    },
    {
      city: "Gamu",
      province: "Isabela"
    },
    {
      city: "Ganassi",
      province: "Lanao del Sur"
    },
    {
      city: "Gandara",
      province: "Samar"
    },
    {
      city: "Gapan",
      province: "Nueva Ecija"
    },
    {
      city: "Garchitorena",
      province: "Camarines Sur"
    },
    {
      city: "Garcia Hernandez",
      province: "Bohol"
    },
    {
      city: "Gasan",
      province: "Marinduque"
    },
    {
      city: "Gattaran",
      province: "Cagayan"
    },
    {
      city: "General Emilio Aguinaldo",
      province: "Cavite"
    },
    {
      city: "General Luna",
      province: "Quezon"
    },
    {
      city: "General Luna",
      province: "Surigao del Norte"
    },
    {
      city: "General MacArthur",
      province: "Eastern Samar"
    },
    {
      city: "General Mamerto Natividad",
      province: "Nueva Ecija"
    },
    {
      city: "General Mariano Alvarez",
      province: "Cavite"
    },
    {
      city: "General Nakar",
      province: "Quezon"
    },
    {
      city: "General Salipada K. Pendatun",
      province: "Maguindanao"
    },
    {
      city: "General Santos (Dadiangas)",
      province: "South Cotabato"
    },
    {
      city: "General Tinio (Papaya)",
      province: "Nueva Ecija"
    },
    {
      city: "General Trias",
      province: "Cavite"
    },
    {
      city: "Gerona",
      province: "Tarlac"
    },
    {
      city: "Getafe",
      province: "Bohol"
    },
    {
      city: "Gigaquit",
      province: "Surigao del Norte"
    },
    {
      city: "Gigmoto",
      province: "Catanduanes"
    },
    {
      city: "Ginatilan",
      province: "Cebu"
    },
    {
      city: "Gingoog",
      province: "Misamis Oriental"
    },
    {
      city: "Giporlos",
      province: "Eastern Samar"
    },
    {
      city: "Gitagum",
      province: "Misamis Oriental"
    },
    {
      city: "Glan",
      province: "Sarangani"
    },
    {
      city: "Gloria",
      province: "Oriental Mindoro"
    },
    {
      city: "Goa",
      province: "Camarines Sur"
    },
    {
      city: "Godod",
      province: "Zamboanga del Norte"
    },
    {
      city: "Gonzaga",
      province: "Cagayan"
    },
    {
      city: "Governor Generoso",
      province: "Davao Oriental"
    },
    {
      city: "Gregorio del Pilar (Concepcion)",
      province: "Ilocos Sur"
    },
    {
      city: "Guagua",
      province: "Pampanga"
    },
    {
      city: "Gubat",
      province: "Sorsogon"
    },
    {
      city: "Guiguinto",
      province: "Bulacan"
    },
    {
      city: "Guihulngan",
      province: "Negros Oriental"
    },
    {
      city: "Guimba",
      province: "Nueva Ecija"
    },
    {
      city: "Guimbal",
      province: "Iloilo"
    },
    {
      city: "Guinayangan",
      province: "Quezon"
    },
    {
      city: "Guindulman",
      province: "Bohol"
    },
    {
      city: "Guindulungan",
      province: "Maguindanao"
    },
    {
      city: "Guinobatan",
      province: "Albay"
    },
    {
      city: "Guinsiliban",
      province: "Camiguin"
    },
    {
      city: "Guipos",
      province: "Zamboanga del Sur"
    },
    {
      city: "Guiuan",
      province: "Eastern Samar"
    },
    {
      city: "Gumaca",
      province: "Quezon"
    },
    {
      city: "Gutalac",
      province: "Zamboanga del Norte"
    },
    {
      city: "Hadji Mohammad Ajul",
      province: "Basilan"
    },
    {
      city: "Hadji Muhtamad",
      province: "Basilan"
    },
    {
      city: "Hadji Panglima Tahil (Marunggas)",
      province: "Sulu"
    },
    {
      city: "Hagonoy",
      province: "Bulacan"
    },
    {
      city: "Hagonoy",
      province: "Davao del Sur"
    },
    {
      city: "Hamtic",
      province: "Antique"
    },
    {
      city: "Hermosa",
      province: "Bataan"
    },
    {
      city: "Hernani",
      province: "Eastern Samar"
    },
    {
      city: "Hilongos",
      province: "Leyte"
    },
    {
      city: "Himamaylan",
      province: "Negros Occidental"
    },
    {
      city: "Hinabangan",
      province: "Samar"
    },
    {
      city: "Hinatuan",
      province: "Surigao del Sur"
    },
    {
      city: "Hindang",
      province: "Leyte"
    },
    {
      city: "Hingyon",
      province: "Ifugao"
    },
    {
      city: "Hinigaran",
      province: "Negros Occidental"
    },
    {
      city: "Hinoba-an (Asia)",
      province: "Negros Occidental"
    },
    {
      city: "Hinunangan",
      province: "Southern Leyte"
    },
    {
      city: "Hinundayan",
      province: "Southern Leyte"
    },
    {
      city: "Hungduan",
      province: "Ifugao"
    },
    {
      city: "Iba",
      province: "Zambales"
    },
    {
      city: "Ibaan",
      province: "Batangas"
    },
    {
      city: "Ibajay",
      province: "Aklan"
    },
    {
      city: "Igbaras",
      province: "Iloilo"
    },
    {
      city: "Iguig",
      province: "Cagayan"
    },
    {
      city: "Ilagan",
      province: "Isabela"
    },
    {
      city: "Iligan",
      province: "Lanao del Norte"
    },
    {
      city: "Ilog",
      province: "Negros Occidental"
    },
    {
      city: "Iloilo City",
      province: "Iloilo"
    },
    {
      city: "Imelda",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Impasugong",
      province: "Bukidnon"
    },
    {
      city: "Imus",
      province: "Cavite"
    },
    {
      city: "Inabanga",
      province: "Bohol"
    },
    {
      city: "Indanan",
      province: "Sulu"
    },
    {
      city: "Indang",
      province: "Cavite"
    },
    {
      city: "Infanta",
      province: "Pangasinan"
    },
    {
      city: "Infanta",
      province: "Quezon"
    },
    {
      city: "Initao",
      province: "Misamis Oriental"
    },
    {
      city: "Inopacan",
      province: "Leyte"
    },
    {
      city: "Ipil",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Iriga",
      province: "Camarines Sur"
    },
    {
      city: "Irosin",
      province: "Sorsogon"
    },
    {
      city: "Isabel",
      province: "Leyte"
    },
    {
      city: "Isabela",
      province: "Negros Occidental"
    },
    {
      city: "Isabela City",
      province: "Basilan"
    },
    {
      city: "Isulan",
      province: "Sultan Kudarat"
    },
    {
      city: "Itbayat",
      province: "Batanes"
    },
    {
      city: "Itogon",
      province: "Benguet"
    },
    {
      city: "Ivana",
      province: "Batanes"
    },
    {
      city: "Ivisan",
      province: "Capiz"
    },
    {
      city: "Jabonga",
      province: "Agusan del Norte"
    },
    {
      city: "Jaen",
      province: "Nueva Ecija"
    },
    {
      city: "Jagna",
      province: "Bohol"
    },
    {
      city: "Jalajala",
      province: "Rizal"
    },
    {
      city: "Jamindan",
      province: "Capiz"
    },
    {
      city: "Janiuay",
      province: "Iloilo"
    },
    {
      city: "Jaro",
      province: "Leyte"
    },
    {
      city: "Jasaan",
      province: "Misamis Oriental"
    },
    {
      city: "Javier (Bugho)",
      province: "Leyte"
    },
    {
      city: "Jiabong",
      province: "Samar"
    },
    {
      city: "Jimalalud",
      province: "Negros Oriental"
    },
    {
      city: "Jimenez",
      province: "Misamis Occidental"
    },
    {
      city: "Jipapad",
      province: "Eastern Samar"
    },
    {
      city: "Jolo",
      province: "Sulu"
    },
    {
      city: "Jomalig",
      province: "Quezon"
    },
    {
      city: "Jones",
      province: "Isabela"
    },
    {
      city: "Jordan",
      province: "Guimaras"
    },
    {
      city: "Jose Abad Santos (Trinidad)",
      province: "Davao Occidental"
    },
    {
      city: "Jose Dalman (Ponot)",
      province: "Zamboanga del Norte"
    },
    {
      city: "Jose Panganiban",
      province: "Camarines Norte"
    },
    {
      city: "Josefina",
      province: "Zamboanga del Sur"
    },
    {
      city: "Jovellar",
      province: "Albay"
    },
    {
      city: "Juban",
      province: "Sorsogon"
    },
    {
      city: "Julita",
      province: "Leyte"
    },
    {
      city: "Kabacan",
      province: "Cotabato"
    },
    {
      city: "Kabankalan",
      province: "Negros Occidental"
    },
    {
      city: "Kabasalan",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Kabayan",
      province: "Benguet"
    },
    {
      city: "Kabugao",
      province: "Apayao"
    },
    {
      city: "Kabuntalan (Tumbao)",
      province: "Maguindanao"
    },
    {
      city: "Kadingilan",
      province: "Bukidnon"
    },
    {
      city: "Kalamansig",
      province: "Sultan Kudarat"
    },
    {
      city: "Kalawit",
      province: "Zamboanga del Norte"
    },
    {
      city: "Kalayaan",
      province: "Laguna"
    },
    {
      city: "Kalayaan",
      province: "Palawan"
    },
    {
      city: "Kalibo",
      province: "Aklan"
    },
    {
      city: "Kalilangan",
      province: "Bukidnon"
    },
    {
      city: "Kalingalan Caluang",
      province: "Sulu"
    },
    {
      city: "Kananga",
      province: "Leyte"
    },
    {
      city: "Kapai",
      province: "Lanao del Sur"
    },
    {
      city: "Kapalong",
      province: "Davao del Norte"
    },
    {
      city: "Kapangan",
      province: "Benguet"
    },
    {
      city: "Kapatagan",
      province: "Lanao del Norte"
    },
    {
      city: "Kapatagan",
      province: "Lanao del Sur"
    },
    {
      city: "Kasibu",
      province: "Nueva Vizcaya"
    },
    {
      city: "Katipunan",
      province: "Zamboanga del Norte"
    },
    {
      city: "Kauswagan",
      province: "Lanao del Norte"
    },
    {
      city: "Kawayan",
      province: "Biliran"
    },
    {
      city: "Kawit",
      province: "Cavite"
    },
    {
      city: "Kayapa",
      province: "Nueva Vizcaya"
    },
    {
      city: "Kiamba",
      province: "Sarangani"
    },
    {
      city: "Kiangan",
      province: "Ifugao"
    },
    {
      city: "Kibawe",
      province: "Bukidnon"
    },
    {
      city: "Kiblawan",
      province: "Davao del Sur"
    },
    {
      city: "Kibungan",
      province: "Benguet"
    },
    {
      city: "Kidapawan",
      province: "Cotabato"
    },
    {
      city: "Kinoguitan",
      province: "Misamis Oriental"
    },
    {
      city: "Kitaotao",
      province: "Bukidnon"
    },
    {
      city: "Kitcharao",
      province: "Agusan del Norte"
    },
    {
      city: "Kolambugan",
      province: "Lanao del Norte"
    },
    {
      city: "Koronadal",
      province: "South Cotabato"
    },
    {
      city: "Kumalarang",
      province: "Zamboanga del Sur"
    },
    {
      city: "La Carlota",
      province: "Negros Occidental"
    },
    {
      city: "La Castellana",
      province: "Negros Occidental"
    },
    {
      city: "La Libertad",
      province: "Negros Oriental"
    },
    {
      city: "La Libertad",
      province: "Zamboanga del Norte"
    },
    {
      city: "La Paz",
      province: "Abra"
    },
    {
      city: "La Paz",
      province: "Agusan del Sur"
    },
    {
      city: "La Paz",
      province: "Leyte"
    },
    {
      city: "La Paz",
      province: "Tarlac"
    },
    {
      city: "La Trinidad",
      province: "Benguet"
    },
    {
      city: "Laak (San Vicente)",
      province: "Compostela Valley"
    },
    {
      city: "Labangan",
      province: "Zamboanga del Sur"
    },
    {
      city: "Labason",
      province: "Zamboanga del Norte"
    },
    {
      city: "Labo",
      province: "Camarines Norte"
    },
    {
      city: "Labrador",
      province: "Pangasinan"
    },
    {
      city: "Lacub",
      province: "Abra"
    },
    {
      city: "Lagangilang",
      province: "Abra"
    },
    {
      city: "Lagawe",
      province: "Ifugao"
    },
    {
      city: "Lagayan",
      province: "Abra"
    },
    {
      city: "Lagonglong",
      province: "Misamis Oriental"
    },
    {
      city: "Lagonoy",
      province: "Camarines Sur"
    },
    {
      city: "Laguindingan",
      province: "Misamis Oriental"
    },
    {
      city: "Lake Sebu",
      province: "South Cotabato"
    },
    {
      city: "Lakewood",
      province: "Zamboanga del Sur"
    },
    {
      city: "Lal-lo",
      province: "Cagayan"
    },
    {
      city: "Lala",
      province: "Lanao del Norte"
    },
    {
      city: "Lambayong (Mariano Marcos)",
      province: "Sultan Kudarat"
    },
    {
      city: "Lambunao",
      province: "Iloilo"
    },
    {
      city: "Lamitan",
      province: "Basilan"
    },
    {
      city: "Lamut",
      province: "Ifugao"
    },
    {
      city: "Langiden",
      province: "Abra"
    },
    {
      city: "Languyan",
      province: "Tawi-Tawi"
    },
    {
      city: "Lantapan",
      province: "Bukidnon"
    },
    {
      city: "Lantawan",
      province: "Basilan"
    },
    {
      city: "Lanuza",
      province: "Surigao del Sur"
    },
    {
      city: "Laoac",
      province: "Pangasinan"
    },
    {
      city: "Laoag",
      province: "Ilocos Norte"
    },
    {
      city: "Laoang",
      province: "Northern Samar"
    },
    {
      city: "Lapinig",
      province: "Northern Samar"
    },
    {
      city: "Lapu-Lapu (Opon)",
      province: "Cebu"
    },
    {
      city: "Lapuyan",
      province: "Zamboanga del Sur"
    },
    {
      city: "Larena",
      province: "Siquijor"
    },
    {
      city: "Las Navas",
      province: "Northern Samar"
    },
    {
      city: "Las Nieves",
      province: "Agusan del Norte"
    },
    {
      city: "Las Piñas",
      province: "NCR, 4th district"
    },
    {
      city: "Lasam",
      province: "Cagayan"
    },
    {
      city: "Laua-an",
      province: "Antique"
    },
    {
      city: "Laur",
      province: "Nueva Ecija"
    },
    {
      city: "Laurel",
      province: "Batangas"
    },
    {
      city: "Lavezares",
      province: "Northern Samar"
    },
    {
      city: "Lawaan",
      province: "Eastern Samar"
    },
    {
      city: "Lazi",
      province: "Siquijor"
    },
    {
      city: "Lebak",
      province: "Sultan Kudarat"
    },
    {
      city: "Leganes",
      province: "Iloilo"
    },
    {
      city: "Legazpi",
      province: "Albay"
    },
    {
      city: "Lemery",
      province: "Batangas"
    },
    {
      city: "Lemery",
      province: "Iloilo"
    },
    {
      city: "Leon",
      province: "Iloilo"
    },
    {
      city: "Leon B. Postigo (Bacungan)",
      province: "Zamboanga del Norte"
    },
    {
      city: "Leyte",
      province: "Leyte"
    },
    {
      city: "Lezo",
      province: "Aklan"
    },
    {
      city: "Lian",
      province: "Batangas"
    },
    {
      city: "Lianga",
      province: "Surigao del Sur"
    },
    {
      city: "Libacao",
      province: "Aklan"
    },
    {
      city: "Libagon",
      province: "Southern Leyte"
    },
    {
      city: "Libertad",
      province: "Antique"
    },
    {
      city: "Libertad",
      province: "Misamis Oriental"
    },
    {
      city: "Libjo (Albor)",
      province: "Dinagat Islands"
    },
    {
      city: "Libmanan",
      province: "Camarines Sur"
    },
    {
      city: "Libon",
      province: "Albay"
    },
    {
      city: "Libona",
      province: "Bukidnon"
    },
    {
      city: "Libungan",
      province: "Cotabato"
    },
    {
      city: "Licab",
      province: "Nueva Ecija"
    },
    {
      city: "Licuan-Baay (Licuan)",
      province: "Abra"
    },
    {
      city: "Lidlidda",
      province: "Ilocos Sur"
    },
    {
      city: "Ligao",
      province: "Albay"
    },
    {
      city: "Lila",
      province: "Bohol"
    },
    {
      city: "Liliw",
      province: "Laguna"
    },
    {
      city: "Liloan",
      province: "Cebu"
    },
    {
      city: "Liloan",
      province: "Southern Leyte"
    },
    {
      city: "Liloy",
      province: "Zamboanga del Norte"
    },
    {
      city: "Limasawa",
      province: "Southern Leyte"
    },
    {
      city: "Limay",
      province: "Bataan"
    },
    {
      city: "Linamon",
      province: "Lanao del Norte"
    },
    {
      city: "Linapacan",
      province: "Palawan"
    },
    {
      city: "Lingayen",
      province: "Pangasinan"
    },
    {
      city: "Lingig",
      province: "Surigao del Sur"
    },
    {
      city: "Lipa",
      province: "Batangas"
    },
    {
      city: "Llanera",
      province: "Nueva Ecija"
    },
    {
      city: "Llorente",
      province: "Eastern Samar"
    },
    {
      city: "Loay",
      province: "Bohol"
    },
    {
      city: "Lobo",
      province: "Batangas"
    },
    {
      city: "Loboc",
      province: "Bohol"
    },
    {
      city: "Looc",
      province: "Occidental Mindoro"
    },
    {
      city: "Looc",
      province: "Romblon"
    },
    {
      city: "Loon",
      province: "Bohol"
    },
    {
      city: "Lope de Vega",
      province: "Northern Samar"
    },
    {
      city: "Lopez",
      province: "Quezon"
    },
    {
      city: "Lopez Jaena",
      province: "Misamis Occidental"
    },
    {
      city: "Loreto",
      province: "Agusan del Sur"
    },
    {
      city: "Loreto",
      province: "Dinagat Islands"
    },
    {
      city: "Los Baños",
      province: "Laguna"
    },
    {
      city: "Luba",
      province: "Abra"
    },
    {
      city: "Lubang",
      province: "Occidental Mindoro"
    },
    {
      city: "Lubao",
      province: "Pampanga"
    },
    {
      city: "Lubuagan",
      province: "Kalinga"
    },
    {
      city: "Lucban",
      province: "Quezon"
    },
    {
      city: "Lucena",
      province: "Quezon"
    },
    {
      city: "Lugait",
      province: "Misamis Oriental"
    },
    {
      city: "Lugus",
      province: "Sulu"
    },
    {
      city: "Luisiana",
      province: "Laguna"
    },
    {
      city: "Lumba-Bayabao (Maguing)",
      province: "Lanao del Sur"
    },
    {
      city: "Lumbaca-Unayan",
      province: "Lanao del Sur"
    },
    {
      city: "Lumban",
      province: "Laguna"
    },
    {
      city: "Lumbatan",
      province: "Lanao del Sur"
    },
    {
      city: "Lumbayanague",
      province: "Lanao del Sur"
    },
    {
      city: "Luna",
      province: "Apayao"
    },
    {
      city: "Luna",
      province: "Isabela"
    },
    {
      city: "Luna",
      province: "La Union"
    },
    {
      city: "Lupao",
      province: "Nueva Ecija"
    },
    {
      city: "Lupi",
      province: "Camarines Sur"
    },
    {
      city: "Lupon",
      province: "Davao Oriental"
    },
    {
      city: "Lutayan",
      province: "Sultan Kudarat"
    },
    {
      city: "Luuk",
      province: "Sulu"
    },
    {
      city: "M'lang",
      province: "Cotabato"
    },
    {
      city: "Maasim",
      province: "Sarangani"
    },
    {
      city: "Maasin",
      province: "Iloilo"
    },
    {
      city: "Maasin",
      province: "Southern Leyte"
    },
    {
      city: "Maayon",
      province: "Capiz"
    },
    {
      city: "Mabalacat",
      province: "Pampanga"
    },
    {
      city: "Mabinay",
      province: "Negros Oriental"
    },
    {
      city: "Mabini",
      province: "Batangas"
    },
    {
      city: "Mabini",
      province: "Bohol"
    },
    {
      city: "Mabini",
      province: "Pangasinan"
    },
    {
      city: "Mabini (Doña Alicia)",
      province: "Compostela Valley"
    },
    {
      city: "Mabitac",
      province: "Laguna"
    },
    {
      city: "Mabuhay",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Macabebe",
      province: "Pampanga"
    },
    {
      city: "Macalelon",
      province: "Quezon"
    },
    {
      city: "MacArthur",
      province: "Leyte"
    },
    {
      city: "Maco",
      province: "Compostela Valley"
    },
    {
      city: "Maconacon",
      province: "Isabela"
    },
    {
      city: "Macrohon",
      province: "Southern Leyte"
    },
    {
      city: "Madalag",
      province: "Aklan"
    },
    {
      city: "Madalum",
      province: "Lanao del Sur"
    },
    {
      city: "Madamba",
      province: "Lanao del Sur"
    },
    {
      city: "Maddela",
      province: "Quirino"
    },
    {
      city: "Madrid",
      province: "Surigao del Sur"
    },
    {
      city: "Madridejos",
      province: "Cebu"
    },
    {
      city: "Magalang",
      province: "Pampanga"
    },
    {
      city: "Magallanes",
      province: "Agusan del Norte"
    },
    {
      city: "Magallanes",
      province: "Cavite"
    },
    {
      city: "Magallanes",
      province: "Sorsogon"
    },
    {
      city: "Magarao",
      province: "Camarines Sur"
    },
    {
      city: "Magdalena",
      province: "Laguna"
    },
    {
      city: "Magdiwang",
      province: "Romblon"
    },
    {
      city: "Magpet",
      province: "Cotabato"
    },
    {
      city: "Magsaysay",
      province: "Davao del Sur"
    },
    {
      city: "Magsaysay",
      province: "Lanao del Norte"
    },
    {
      city: "Magsaysay",
      province: "Occidental Mindoro"
    },
    {
      city: "Magsaysay",
      province: "Palawan"
    },
    {
      city: "Magsaysay (Linugos)",
      province: "Misamis Oriental"
    },
    {
      city: "Magsingal",
      province: "Ilocos Sur"
    },
    {
      city: "Maguing",
      province: "Lanao del Sur"
    },
    {
      city: "Mahaplag",
      province: "Leyte"
    },
    {
      city: "Mahatao",
      province: "Batanes"
    },
    {
      city: "Mahayag",
      province: "Zamboanga del Sur"
    },
    {
      city: "Mahinog",
      province: "Camiguin"
    },
    {
      city: "Maigo",
      province: "Lanao del Norte"
    },
    {
      city: "Maimbung",
      province: "Sulu"
    },
    {
      city: "Mainit",
      province: "Surigao del Norte"
    },
    {
      city: "Maitum",
      province: "Sarangani"
    },
    {
      city: "Majayjay",
      province: "Laguna"
    },
    {
      city: "Makati",
      province: "NCR, 4th district"
    },
    {
      city: "Makato",
      province: "Aklan"
    },
    {
      city: "Makilala",
      province: "Cotabato"
    },
    {
      city: "Malabang",
      province: "Lanao del Sur"
    },
    {
      city: "Malabon",
      province: "NCR, 3rd district"
    },
    {
      city: "Malabuyoc",
      province: "Cebu"
    },
    {
      city: "Malalag",
      province: "Davao del Sur"
    },
    {
      city: "Malangas",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Malapatan",
      province: "Sarangani"
    },
    {
      city: "Malasiqui",
      province: "Pangasinan"
    },
    {
      city: "Malay",
      province: "Aklan"
    },
    {
      city: "Malaybalay",
      province: "Bukidnon"
    },
    {
      city: "Malibcong",
      province: "Abra"
    },
    {
      city: "Malilipot",
      province: "Albay"
    },
    {
      city: "Malimono",
      province: "Surigao del Norte"
    },
    {
      city: "Malinao",
      province: "Aklan"
    },
    {
      city: "Malinao",
      province: "Albay"
    },
    {
      city: "Malita",
      province: "Davao Occidental"
    },
    {
      city: "Malitbog",
      province: "Bukidnon"
    },
    {
      city: "Malitbog",
      province: "Southern Leyte"
    },
    {
      city: "Mallig",
      province: "Isabela"
    },
    {
      city: "Malolos",
      province: "Bulacan"
    },
    {
      city: "Malungon",
      province: "Sarangani"
    },
    {
      city: "Maluso",
      province: "Basilan"
    },
    {
      city: "Malvar",
      province: "Batangas"
    },
    {
      city: "Mamasapano",
      province: "Maguindanao"
    },
    {
      city: "Mambajao",
      province: "Camiguin"
    },
    {
      city: "Mamburao",
      province: "Occidental Mindoro"
    },
    {
      city: "Mambusao",
      province: "Capiz"
    },
    {
      city: "Manabo",
      province: "Abra"
    },
    {
      city: "Manaoag",
      province: "Pangasinan"
    },
    {
      city: "Manapla",
      province: "Negros Occidental"
    },
    {
      city: "Manay",
      province: "Davao Oriental"
    },
    {
      city: "Mandaluyong",
      province: "NCR, 2nd district"
    },
    {
      city: "Mandaon",
      province: "Masbate"
    },
    {
      city: "Mandaue",
      province: "Cebu"
    },
    {
      city: "Mangaldan",
      province: "Pangasinan"
    },
    {
      city: "Mangatarem",
      province: "Pangasinan"
    },
    {
      city: "Mangudadatu",
      province: "Maguindanao"
    },
    {
      city: "Manila",
      province: "NCR, City of Manila, 1st district"
    },
    {
      city: "Manito",
      province: "Albay"
    },
    {
      city: "Manjuyod",
      province: "Negros Oriental"
    },
    {
      city: "Mankayan",
      province: "Benguet"
    },
    {
      city: "Manolo Fortich",
      province: "Bukidnon"
    },
    {
      city: "Mansalay",
      province: "Oriental Mindoro"
    },
    {
      city: "Manticao",
      province: "Misamis Oriental"
    },
    {
      city: "Manukan",
      province: "Zamboanga del Norte"
    },
    {
      city: "Mapanas",
      province: "Northern Samar"
    },
    {
      city: "Mapandan",
      province: "Pangasinan"
    },
    {
      city: "Mapun (Cagayan de Tawi-Tawi)",
      province: "Tawi-Tawi"
    },
    {
      city: "Marabut",
      province: "Samar"
    },
    {
      city: "Maragondon",
      province: "Cavite"
    },
    {
      city: "Maragusan (San Mariano)",
      province: "Compostela Valley"
    },
    {
      city: "Maramag",
      province: "Bukidnon"
    },
    {
      city: "Marantao",
      province: "Lanao del Sur"
    },
    {
      city: "Marawi",
      province: "Lanao del Sur"
    },
    {
      city: "Marcos",
      province: "Ilocos Norte"
    },
    {
      city: "Margosatubig",
      province: "Zamboanga del Sur"
    },
    {
      city: "Maria",
      province: "Siquijor"
    },
    {
      city: "Maria Aurora",
      province: "Aurora"
    },
    {
      city: "Maribojoc",
      province: "Bohol"
    },
    {
      city: "Marihatag",
      province: "Surigao del Sur"
    },
    {
      city: "Marikina",
      province: "NCR, 2nd district"
    },
    {
      city: "Marilao",
      province: "Bulacan"
    },
    {
      city: "Maripipi",
      province: "Biliran"
    },
    {
      city: "Mariveles",
      province: "Bataan"
    },
    {
      city: "Marogong",
      province: "Lanao del Sur"
    },
    {
      city: "Masantol",
      province: "Pampanga"
    },
    {
      city: "Masbate City",
      province: "Masbate"
    },
    {
      city: "Masinloc",
      province: "Zambales"
    },
    {
      city: "Masiu",
      province: "Lanao del Sur"
    },
    {
      city: "Maslog",
      province: "Eastern Samar"
    },
    {
      city: "Mataasnakahoy",
      province: "Batangas"
    },
    {
      city: "Matag-ob",
      province: "Leyte"
    },
    {
      city: "Matalam",
      province: "Cotabato"
    },
    {
      city: "Matalom",
      province: "Leyte"
    },
    {
      city: "Matanao",
      province: "Davao del Sur"
    },
    {
      city: "Matanog",
      province: "Maguindanao"
    },
    {
      city: "Mati",
      province: "Davao Oriental"
    },
    {
      city: "Matnog",
      province: "Sorsogon"
    },
    {
      city: "Matuguinao",
      province: "Samar"
    },
    {
      city: "Matungao",
      province: "Lanao del Norte"
    },
    {
      city: "Mauban",
      province: "Quezon"
    },
    {
      city: "Mawab",
      province: "Compostela Valley"
    },
    {
      city: "Mayantoc",
      province: "Tarlac"
    },
    {
      city: "Maydolong",
      province: "Eastern Samar"
    },
    {
      city: "Mayorga",
      province: "Leyte"
    },
    {
      city: "Mayoyao",
      province: "Ifugao"
    },
    {
      city: "Medellin",
      province: "Cebu"
    },
    {
      city: "Medina",
      province: "Misamis Oriental"
    },
    {
      city: "Mendez (Mendez-Nuñez)",
      province: "Cavite"
    },
    {
      city: "Mercedes",
      province: "Camarines Norte"
    },
    {
      city: "Mercedes",
      province: "Eastern Samar"
    },
    {
      city: "Merida",
      province: "Leyte"
    },
    {
      city: "Mexico",
      province: "Pampanga"
    },
    {
      city: "Meycauayan",
      province: "Bulacan"
    },
    {
      city: "Miagao",
      province: "Iloilo"
    },
    {
      city: "Midsalip",
      province: "Zamboanga del Sur"
    },
    {
      city: "Midsayap",
      province: "Cotabato"
    },
    {
      city: "Milagros",
      province: "Masbate"
    },
    {
      city: "Milaor",
      province: "Camarines Sur"
    },
    {
      city: "Mina",
      province: "Iloilo"
    },
    {
      city: "Minalabac",
      province: "Camarines Sur"
    },
    {
      city: "Minalin",
      province: "Pampanga"
    },
    {
      city: "Minglanilla",
      province: "Cebu"
    },
    {
      city: "Moalboal",
      province: "Cebu"
    },
    {
      city: "Mobo",
      province: "Masbate"
    },
    {
      city: "Mogpog",
      province: "Marinduque"
    },
    {
      city: "Moises Padilla (Magallon)",
      province: "Negros Occidental"
    },
    {
      city: "Molave",
      province: "Zamboanga del Sur"
    },
    {
      city: "Moncada",
      province: "Tarlac"
    },
    {
      city: "Mondragon",
      province: "Northern Samar"
    },
    {
      city: "Monkayo",
      province: "Compostela Valley"
    },
    {
      city: "Monreal",
      province: "Masbate"
    },
    {
      city: "Montevista",
      province: "Compostela Valley"
    },
    {
      city: "Morong",
      province: "Bataan"
    },
    {
      city: "Morong",
      province: "Rizal"
    },
    {
      city: "Motiong",
      province: "Samar"
    },
    {
      city: "Mulanay",
      province: "Quezon"
    },
    {
      city: "Mulondo",
      province: "Lanao del Sur"
    },
    {
      city: "Munai",
      province: "Lanao del Norte"
    },
    {
      city: "Muñoz",
      province: "Nueva Ecija"
    },
    {
      city: "Muntinlupa",
      province: "NCR, 4th district"
    },
    {
      city: "Murcia",
      province: "Negros Occidental"
    },
    {
      city: "Mutia",
      province: "Zamboanga del Norte"
    },
    {
      city: "Naawan",
      province: "Misamis Oriental"
    },
    {
      city: "Nabas",
      province: "Aklan"
    },
    {
      city: "Nabua",
      province: "Camarines Sur"
    },
    {
      city: "Nabunturan",
      province: "Compostela Valley"
    },
    {
      city: "Naga",
      province: "Camarines Sur"
    },
    {
      city: "Naga",
      province: "Cebu"
    },
    {
      city: "Naga",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Nagbukel",
      province: "Ilocos Sur"
    },
    {
      city: "Nagcarlan",
      province: "Laguna"
    },
    {
      city: "Nagtipunan",
      province: "Quirino"
    },
    {
      city: "Naguilian",
      province: "Isabela"
    },
    {
      city: "Naguilian",
      province: "La Union"
    },
    {
      city: "Naic",
      province: "Cavite"
    },
    {
      city: "Nampicuan",
      province: "Nueva Ecija"
    },
    {
      city: "Narra",
      province: "Palawan"
    },
    {
      city: "Narvacan",
      province: "Ilocos Sur"
    },
    {
      city: "Nasipit",
      province: "Agusan del Norte"
    },
    {
      city: "Nasugbu",
      province: "Batangas"
    },
    {
      city: "Natividad",
      province: "Pangasinan"
    },
    {
      city: "Natonin",
      province: "Mountain Province"
    },
    {
      city: "Naujan",
      province: "Oriental Mindoro"
    },
    {
      city: "Naval",
      province: "Biliran"
    },
    {
      city: "Navotas",
      province: "NCR, 3rd district"
    },
    {
      city: "New Bataan",
      province: "Compostela Valley"
    },
    {
      city: "New Corella",
      province: "Davao del Norte"
    },
    {
      city: "New Lucena",
      province: "Iloilo"
    },
    {
      city: "New Washington",
      province: "Aklan"
    },
    {
      city: "Norala",
      province: "South Cotabato"
    },
    {
      city: "Northern Kabuntalan",
      province: "Maguindanao"
    },
    {
      city: "Norzagaray",
      province: "Bulacan"
    },
    {
      city: "Noveleta",
      province: "Cavite"
    },
    {
      city: "Nueva Era",
      province: "Ilocos Norte"
    },
    {
      city: "Nueva Valencia",
      province: "Guimaras"
    },
    {
      city: "Numancia",
      province: "Aklan"
    },
    {
      city: "Nunungan",
      province: "Lanao del Norte"
    },
    {
      city: "Oas",
      province: "Albay"
    },
    {
      city: "Obando",
      province: "Bulacan"
    },
    {
      city: "Ocampo",
      province: "Camarines Sur"
    },
    {
      city: "Odiongan",
      province: "Romblon"
    },
    {
      city: "Old Panamao",
      province: "Sulu"
    },
    {
      city: "Olongapo",
      province: "Zambales"
    },
    {
      city: "Olutanga",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Omar",
      province: "Sulu"
    },
    {
      city: "Opol",
      province: "Misamis Oriental"
    },
    {
      city: "Orani",
      province: "Bataan"
    },
    {
      city: "Oras",
      province: "Eastern Samar"
    },
    {
      city: "Orion",
      province: "Bataan"
    },
    {
      city: "Ormoc",
      province: "Leyte"
    },
    {
      city: "Oroquieta",
      province: "Misamis Occidental"
    },
    {
      city: "Oslob",
      province: "Cebu"
    },
    {
      city: "Oton",
      province: "Iloilo"
    },
    {
      city: "Ozamiz",
      province: "Misamis Occidental"
    },
    {
      city: "Padada",
      province: "Davao del Sur"
    },
    {
      city: "Padre Burgos",
      province: "Quezon"
    },
    {
      city: "Padre Burgos",
      province: "Southern Leyte"
    },
    {
      city: "Padre Garcia",
      province: "Batangas"
    },
    {
      city: "Paete",
      province: "Laguna"
    },
    {
      city: "Pagadian",
      province: "Zamboanga del Sur"
    },
    {
      city: "Pagalungan",
      province: "Maguindanao"
    },
    {
      city: "Pagayawan (Tatarikan)",
      province: "Lanao del Sur"
    },
    {
      city: "Pagbilao",
      province: "Quezon"
    },
    {
      city: "Paglat",
      province: "Maguindanao"
    },
    {
      city: "Pagsanghan",
      province: "Samar"
    },
    {
      city: "Pagsanjan",
      province: "Laguna"
    },
    {
      city: "Pagudpud",
      province: "Ilocos Norte"
    },
    {
      city: "Pakil",
      province: "Laguna"
    },
    {
      city: "Palanan",
      province: "Isabela"
    },
    {
      city: "Palanas",
      province: "Masbate"
    },
    {
      city: "Palapag",
      province: "Northern Samar"
    },
    {
      city: "Palauig",
      province: "Zambales"
    },
    {
      city: "Palayan",
      province: "Nueva Ecija"
    },
    {
      city: "Palimbang",
      province: "Sultan Kudarat"
    },
    {
      city: "Palo",
      province: "Leyte"
    },
    {
      city: "Palompon",
      province: "Leyte"
    },
    {
      city: "Paluan",
      province: "Occidental Mindoro"
    },
    {
      city: "Pambujan",
      province: "Northern Samar"
    },
    {
      city: "Pamplona",
      province: "Cagayan"
    },
    {
      city: "Pamplona",
      province: "Camarines Sur"
    },
    {
      city: "Pamplona",
      province: "Negros Oriental"
    },
    {
      city: "Panabo",
      province: "Davao del Norte"
    },
    {
      city: "Panaon",
      province: "Misamis Occidental"
    },
    {
      city: "Panay",
      province: "Capiz"
    },
    {
      city: "Pandag",
      province: "Maguindanao"
    },
    {
      city: "Pandami",
      province: "Sulu"
    },
    {
      city: "Pandan",
      province: "Antique"
    },
    {
      city: "Pandan",
      province: "Catanduanes"
    },
    {
      city: "Pandi",
      province: "Bulacan"
    },
    {
      city: "Panganiban (Payo)",
      province: "Catanduanes"
    },
    {
      city: "Pangantucan",
      province: "Bukidnon"
    },
    {
      city: "Pangil",
      province: "Laguna"
    },
    {
      city: "Panglao",
      province: "Bohol"
    },
    {
      city: "Panglima Estino (New Panamao)",
      province: "Sulu"
    },
    {
      city: "Panglima Sugala (Balimbing)",
      province: "Tawi-Tawi"
    },
    {
      city: "Pangutaran",
      province: "Sulu"
    },
    {
      city: "Paniqui",
      province: "Tarlac"
    },
    {
      city: "Panitan",
      province: "Capiz"
    },
    {
      city: "Pantabangan",
      province: "Nueva Ecija"
    },
    {
      city: "Pantao Ragat",
      province: "Lanao del Norte"
    },
    {
      city: "Pantar",
      province: "Lanao del Norte"
    },
    {
      city: "Pantukan",
      province: "Compostela Valley"
    },
    {
      city: "Panukulan",
      province: "Quezon"
    },
    {
      city: "Paoay",
      province: "Ilocos Norte"
    },
    {
      city: "Paombong",
      province: "Bulacan"
    },
    {
      city: "Paracale",
      province: "Camarines Norte"
    },
    {
      city: "Paracelis",
      province: "Mountain Province"
    },
    {
      city: "Parañaque",
      province: "NCR, 4th district"
    },
    {
      city: "Paranas (Wright)",
      province: "Samar"
    },
    {
      city: "Parang",
      province: "Maguindanao"
    },
    {
      city: "Parang",
      province: "Sulu"
    },
    {
      city: "Pasacao",
      province: "Camarines Sur"
    },
    {
      city: "Pasay",
      province: "NCR, 4th district"
    },
    {
      city: "Pasig",
      province: "NCR, 2nd district"
    },
    {
      city: "Pasil",
      province: "Kalinga"
    },
    {
      city: "Passi",
      province: "Iloilo"
    },
    {
      city: "Pastrana",
      province: "Leyte"
    },
    {
      city: "Pasuquin",
      province: "Ilocos Norte"
    },
    {
      city: "Pata",
      province: "Sulu"
    },
    {
      city: "Pateros",
      province: "NCR, 4th district"
    },
    {
      city: "Patikul",
      province: "Sulu"
    },
    {
      city: "Patnanungan",
      province: "Quezon"
    },
    {
      city: "Patnongon",
      province: "Antique"
    },
    {
      city: "Pavia",
      province: "Iloilo"
    },
    {
      city: "Payao",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Peñablanca",
      province: "Cagayan"
    },
    {
      city: "Peñaranda",
      province: "Nueva Ecija"
    },
    {
      city: "Peñarrubia",
      province: "Abra"
    },
    {
      city: "Perez",
      province: "Quezon"
    },
    {
      city: "Piagapo",
      province: "Lanao del Sur"
    },
    {
      city: "Piat",
      province: "Cagayan"
    },
    {
      city: "Picong (Sultan Gumander)",
      province: "Lanao del Sur"
    },
    {
      city: "Piddig",
      province: "Ilocos Norte"
    },
    {
      city: "Pidigan",
      province: "Abra"
    },
    {
      city: "Pigcawayan",
      province: "Cotabato"
    },
    {
      city: "Pikit",
      province: "Cotabato"
    },
    {
      city: "Pila",
      province: "Laguna"
    },
    {
      city: "Pilar",
      province: "Abra"
    },
    {
      city: "Pilar",
      province: "Bataan"
    },
    {
      city: "Pilar",
      province: "Bohol"
    },
    {
      city: "Pilar",
      province: "Capiz"
    },
    {
      city: "Pilar",
      province: "Cebu"
    },
    {
      city: "Pilar",
      province: "Sorsogon"
    },
    {
      city: "Pilar",
      province: "Surigao del Norte"
    },
    {
      city: "Pili",
      province: "Camarines Sur"
    },
    {
      city: "Pililla",
      province: "Rizal"
    },
    {
      city: "Pinabacdao",
      province: "Samar"
    },
    {
      city: "Pinamalayan",
      province: "Oriental Mindoro"
    },
    {
      city: "Pinamungajan",
      province: "Cebu"
    },
    {
      city: "Piñan (New Piñan)",
      province: "Zamboanga del Norte"
    },
    {
      city: "Pinili",
      province: "Ilocos Norte"
    },
    {
      city: "Pintuyan",
      province: "Southern Leyte"
    },
    {
      city: "Pinukpuk",
      province: "Kalinga"
    },
    {
      city: "Pio Duran",
      province: "Albay"
    },
    {
      city: "Pio V. Corpuz (Limbuhan)",
      province: "Masbate"
    },
    {
      city: "Pitogo",
      province: "Quezon"
    },
    {
      city: "Pitogo",
      province: "Zamboanga del Sur"
    },
    {
      city: "Placer",
      province: "Masbate"
    },
    {
      city: "Placer",
      province: "Surigao del Norte"
    },
    {
      city: "Plaridel",
      province: "Bulacan"
    },
    {
      city: "Plaridel",
      province: "Misamis Occidental"
    },
    {
      city: "Plaridel",
      province: "Quezon"
    },
    {
      city: "Pola",
      province: "Oriental Mindoro"
    },
    {
      city: "Polanco",
      province: "Zamboanga del Norte"
    },
    {
      city: "Polangui",
      province: "Albay"
    },
    {
      city: "Polillo",
      province: "Quezon"
    },
    {
      city: "Polomolok",
      province: "South Cotabato"
    },
    {
      city: "Pontevedra",
      province: "Capiz"
    },
    {
      city: "Pontevedra",
      province: "Negros Occidental"
    },
    {
      city: "Poona Bayabao (Gata)",
      province: "Lanao del Sur"
    },
    {
      city: "Poona Piagapo",
      province: "Lanao del Norte"
    },
    {
      city: "Porac",
      province: "Pampanga"
    },
    {
      city: "Poro",
      province: "Cebu"
    },
    {
      city: "Pototan",
      province: "Iloilo"
    },
    {
      city: "Pozorrubio",
      province: "Pangasinan"
    },
    {
      city: "Presentacion (Parubcan)",
      province: "Camarines Sur"
    },
    {
      city: "President Carlos P. Garcia (Pitogo)",
      province: "Bohol"
    },
    {
      city: "President Manuel A. Roxas",
      province: "Zamboanga del Norte"
    },
    {
      city: "President Quirino",
      province: "Sultan Kudarat"
    },
    {
      city: "President Roxas",
      province: "Capiz"
    },
    {
      city: "President Roxas",
      province: "Cotabato"
    },
    {
      city: "Prieto Diaz",
      province: "Sorsogon"
    },
    {
      city: "Prosperidad",
      province: "Agusan del Sur"
    },
    {
      city: "Pualas",
      province: "Lanao del Sur"
    },
    {
      city: "Pudtol",
      province: "Apayao"
    },
    {
      city: "Puerto Galera",
      province: "Oriental Mindoro"
    },
    {
      city: "Puerto Princesa",
      province: "Palawan"
    },
    {
      city: "Pugo",
      province: "La Union"
    },
    {
      city: "Pulilan",
      province: "Bulacan"
    },
    {
      city: "Pulupandan",
      province: "Negros Occidental"
    },
    {
      city: "Pura",
      province: "Tarlac"
    },
    {
      city: "Quezon",
      province: "Bukidnon"
    },
    {
      city: "Quezon",
      province: "Isabela"
    },
    {
      city: "Quezon",
      province: "Nueva Ecija"
    },
    {
      city: "Quezon",
      province: "Nueva Vizcaya"
    },
    {
      city: "Quezon",
      province: "Palawan"
    },
    {
      city: "Quezon",
      province: "Quezon"
    },
    {
      city: "Quezon City",
      province: "NCR, 2nd district"
    },
    {
      city: "Quinapondan",
      province: "Eastern Samar"
    },
    {
      city: "Quirino",
      province: "Isabela"
    },
    {
      city: "Quirino (Angkaki)",
      province: "Ilocos Sur"
    },
    {
      city: "Ragay",
      province: "Camarines Sur"
    },
    {
      city: "Rajah Buayan",
      province: "Maguindanao"
    },
    {
      city: "Ramon",
      province: "Isabela"
    },
    {
      city: "Ramon Magsaysay (Liargo)",
      province: "Zamboanga del Sur"
    },
    {
      city: "Ramos",
      province: "Tarlac"
    },
    {
      city: "Rapu-Rapu",
      province: "Albay"
    },
    {
      city: "Real",
      province: "Quezon"
    },
    {
      city: "Reina Mercedes",
      province: "Isabela"
    },
    {
      city: "Remedios T. Romualdez",
      province: "Agusan del Norte"
    },
    {
      city: "Rizal",
      province: "Cagayan"
    },
    {
      city: "Rizal",
      province: "Laguna"
    },
    {
      city: "Rizal",
      province: "Nueva Ecija"
    },
    {
      city: "Rizal",
      province: "Occidental Mindoro"
    },
    {
      city: "Rizal",
      province: "Zamboanga del Norte"
    },
    {
      city: "Rizal (Liwan)",
      province: "Kalinga"
    },
    {
      city: "Rizal (Marcos)",
      province: "Palawan"
    },
    {
      city: "Rodriguez (Montalban)",
      province: "Rizal"
    },
    {
      city: "Romblon",
      province: "Romblon"
    },
    {
      city: "Ronda",
      province: "Cebu"
    },
    {
      city: "Rosales",
      province: "Pangasinan"
    },
    {
      city: "Rosario",
      province: "Agusan del Sur"
    },
    {
      city: "Rosario",
      province: "Batangas"
    },
    {
      city: "Rosario",
      province: "Cavite"
    },
    {
      city: "Rosario",
      province: "La Union"
    },
    {
      city: "Rosario",
      province: "Northern Samar"
    },
    {
      city: "Roseller Lim",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Roxas",
      province: "Isabela"
    },
    {
      city: "Roxas",
      province: "Oriental Mindoro"
    },
    {
      city: "Roxas",
      province: "Palawan"
    },
    {
      city: "Roxas City",
      province: "Capiz"
    },
    {
      city: "Sabangan",
      province: "Mountain Province"
    },
    {
      city: "Sablan",
      province: "Benguet"
    },
    {
      city: "Sablayan",
      province: "Occidental Mindoro"
    },
    {
      city: "Sabtang",
      province: "Batanes"
    },
    {
      city: "Sadanga",
      province: "Mountain Province"
    },
    {
      city: "Sagada",
      province: "Mountain Province"
    },
    {
      city: "Sagay",
      province: "Camiguin"
    },
    {
      city: "Sagay",
      province: "Negros Occidental"
    },
    {
      city: "Sagbayan (Borja)",
      province: "Bohol"
    },
    {
      city: "Sagñay",
      province: "Camarines Sur"
    },
    {
      city: "Saguday",
      province: "Quirino"
    },
    {
      city: "Saguiaran",
      province: "Lanao del Sur"
    },
    {
      city: "Saint Bernard",
      province: "Southern Leyte"
    },
    {
      city: "Salay",
      province: "Misamis Oriental"
    },
    {
      city: "Salcedo",
      province: "Eastern Samar"
    },
    {
      city: "Salcedo (Baugen)",
      province: "Ilocos Sur"
    },
    {
      city: "Sallapadan",
      province: "Abra"
    },
    {
      city: "Salug",
      province: "Zamboanga del Norte"
    },
    {
      city: "Salvador",
      province: "Lanao del Norte"
    },
    {
      city: "Salvador Benedicto",
      province: "Negros Occidental"
    },
    {
      city: "Samal",
      province: "Bataan"
    },
    {
      city: "Samal",
      province: "Davao del Norte"
    },
    {
      city: "Samboan",
      province: "Cebu"
    },
    {
      city: "Sampaloc",
      province: "Quezon"
    },
    {
      city: "San Agustin",
      province: "Isabela"
    },
    {
      city: "San Agustin",
      province: "Romblon"
    },
    {
      city: "San Agustin",
      province: "Surigao del Sur"
    },
    {
      city: "San Andres",
      province: "Quezon"
    },
    {
      city: "San Andres",
      province: "Romblon"
    },
    {
      city: "San Andres (Calolbon)",
      province: "Catanduanes"
    },
    {
      city: "San Antonio",
      province: "Northern Samar"
    },
    {
      city: "San Antonio",
      province: "Nueva Ecija"
    },
    {
      city: "San Antonio",
      province: "Quezon"
    },
    {
      city: "San Antonio",
      province: "Zambales"
    },
    {
      city: "San Benito",
      province: "Surigao del Norte"
    },
    {
      city: "San Carlos",
      province: "Negros Occidental"
    },
    {
      city: "San Carlos",
      province: "Pangasinan"
    },
    {
      city: "San Clemente",
      province: "Tarlac"
    },
    {
      city: "San Dionisio",
      province: "Iloilo"
    },
    {
      city: "San Emilio",
      province: "Ilocos Sur"
    },
    {
      city: "San Enrique",
      province: "Iloilo"
    },
    {
      city: "San Enrique",
      province: "Negros Occidental"
    },
    {
      city: "San Esteban",
      province: "Ilocos Sur"
    },
    {
      city: "San Fabian",
      province: "Pangasinan"
    },
    {
      city: "San Felipe",
      province: "Zambales"
    },
    {
      city: "San Fernando",
      province: "Bukidnon"
    },
    {
      city: "San Fernando",
      province: "Camarines Sur"
    },
    {
      city: "San Fernando",
      province: "Cebu"
    },
    {
      city: "San Fernando",
      province: "La Union"
    },
    {
      city: "San Fernando",
      province: "Masbate"
    },
    {
      city: "San Fernando",
      province: "Pampanga"
    },
    {
      city: "San Fernando",
      province: "Romblon"
    },
    {
      city: "San Francisco",
      province: "Agusan del Sur"
    },
    {
      city: "San Francisco",
      province: "Cebu"
    },
    {
      city: "San Francisco",
      province: "Southern Leyte"
    },
    {
      city: "San Francisco (Anao-Aon)",
      province: "Surigao del Norte"
    },
    {
      city: "San Francisco (Aurora)",
      province: "Quezon"
    },
    {
      city: "San Gabriel",
      province: "La Union"
    },
    {
      city: "San Guillermo",
      province: "Isabela"
    },
    {
      city: "San Ildefonso",
      province: "Bulacan"
    },
    {
      city: "San Ildefonso",
      province: "Ilocos Sur"
    },
    {
      city: "San Isidro",
      province: "Abra"
    },
    {
      city: "San Isidro",
      province: "Bohol"
    },
    {
      city: "San Isidro",
      province: "Davao del Norte"
    },
    {
      city: "San Isidro",
      province: "Davao Oriental"
    },
    {
      city: "San Isidro",
      province: "Isabela"
    },
    {
      city: "San Isidro",
      province: "Leyte"
    },
    {
      city: "San Isidro",
      province: "Northern Samar"
    },
    {
      city: "San Isidro",
      province: "Nueva Ecija"
    },
    {
      city: "San Isidro",
      province: "Surigao del Norte"
    },
    {
      city: "San Jacinto",
      province: "Masbate"
    },
    {
      city: "San Jacinto",
      province: "Pangasinan"
    },
    {
      city: "San Joaquin",
      province: "Iloilo"
    },
    {
      city: "San Jorge",
      province: "Samar"
    },
    {
      city: "San Jose",
      province: "Batangas"
    },
    {
      city: "San Jose",
      province: "Camarines Sur"
    },
    {
      city: "San Jose",
      province: "Dinagat Islands"
    },
    {
      city: "San Jose",
      province: "Negros Oriental"
    },
    {
      city: "San Jose",
      province: "Northern Samar"
    },
    {
      city: "San Jose",
      province: "Nueva Ecija"
    },
    {
      city: "San Jose",
      province: "Occidental Mindoro"
    },
    {
      city: "San Jose",
      province: "Romblon"
    },
    {
      city: "San Jose",
      province: "Tarlac"
    },
    {
      city: "San Jose de Buan",
      province: "Samar"
    },
    {
      city: "San Jose de Buenavista",
      province: "Antique"
    },
    {
      city: "San Jose del Monte",
      province: "Bulacan"
    },
    {
      city: "San Juan",
      province: "Abra"
    },
    {
      city: "San Juan",
      province: "Batangas"
    },
    {
      city: "San Juan",
      province: "La Union"
    },
    {
      city: "San Juan",
      province: "NCR, 2nd district"
    },
    {
      city: "San Juan",
      province: "Siquijor"
    },
    {
      city: "San Juan (Cabalian)",
      province: "Southern Leyte"
    },
    {
      city: "San Juan (Lapog)",
      province: "Ilocos Sur"
    },
    {
      city: "San Julian",
      province: "Eastern Samar"
    },
    {
      city: "San Leonardo",
      province: "Nueva Ecija"
    },
    {
      city: "San Lorenzo",
      province: "Guimaras"
    },
    {
      city: "San Lorenzo Ruiz (Imelda)",
      province: "Camarines Norte"
    },
    {
      city: "San Luis",
      province: "Agusan del Sur"
    },
    {
      city: "San Luis",
      province: "Aurora"
    },
    {
      city: "San Luis",
      province: "Batangas"
    },
    {
      city: "San Luis",
      province: "Pampanga"
    },
    {
      city: "San Manuel",
      province: "Pangasinan"
    },
    {
      city: "San Manuel",
      province: "Tarlac"
    },
    {
      city: "San Manuel (Callang)",
      province: "Isabela"
    },
    {
      city: "San Marcelino",
      province: "Zambales"
    },
    {
      city: "San Mariano",
      province: "Isabela"
    },
    {
      city: "San Mateo",
      province: "Isabela"
    },
    {
      city: "San Mateo",
      province: "Rizal"
    },
    {
      city: "San Miguel",
      province: "Bohol"
    },
    {
      city: "San Miguel",
      province: "Bulacan"
    },
    {
      city: "San Miguel",
      province: "Catanduanes"
    },
    {
      city: "San Miguel",
      province: "Iloilo"
    },
    {
      city: "San Miguel",
      province: "Leyte"
    },
    {
      city: "San Miguel",
      province: "Surigao del Sur"
    },
    {
      city: "San Miguel",
      province: "Zamboanga del Sur"
    },
    {
      city: "San Narciso",
      province: "Quezon"
    },
    {
      city: "San Narciso",
      province: "Zambales"
    },
    {
      city: "San Nicolas",
      province: "Batangas"
    },
    {
      city: "San Nicolas",
      province: "Ilocos Norte"
    },
    {
      city: "San Nicolas",
      province: "Pangasinan"
    },
    {
      city: "San Pablo",
      province: "Isabela"
    },
    {
      city: "San Pablo",
      province: "Laguna"
    },
    {
      city: "San Pablo",
      province: "Zamboanga del Sur"
    },
    {
      city: "San Pascual",
      province: "Batangas"
    },
    {
      city: "San Pascual",
      province: "Masbate"
    },
    {
      city: "San Pedro",
      province: "Laguna"
    },
    {
      city: "San Policarpo",
      province: "Eastern Samar"
    },
    {
      city: "San Quintin",
      province: "Abra"
    },
    {
      city: "San Quintin",
      province: "Pangasinan"
    },
    {
      city: "San Rafael",
      province: "Bulacan"
    },
    {
      city: "San Rafael",
      province: "Iloilo"
    },
    {
      city: "San Remigio",
      province: "Antique"
    },
    {
      city: "San Remigio",
      province: "Cebu"
    },
    {
      city: "San Ricardo",
      province: "Southern Leyte"
    },
    {
      city: "San Roque",
      province: "Northern Samar"
    },
    {
      city: "San Sebastian",
      province: "Samar"
    },
    {
      city: "San Simon",
      province: "Pampanga"
    },
    {
      city: "San Teodoro",
      province: "Oriental Mindoro"
    },
    {
      city: "San Vicente",
      province: "Camarines Norte"
    },
    {
      city: "San Vicente",
      province: "Ilocos Sur"
    },
    {
      city: "San Vicente",
      province: "Northern Samar"
    },
    {
      city: "San Vicente",
      province: "Palawan"
    },
    {
      city: "Sanchez-Mira",
      province: "Cagayan"
    },
    {
      city: "Santa",
      province: "Ilocos Sur"
    },
    {
      city: "Santa Ana",
      province: "Cagayan"
    },
    {
      city: "Santa Ana",
      province: "Pampanga"
    },
    {
      city: "Santa Barbara",
      province: "Iloilo"
    },
    {
      city: "Santa Barbara",
      province: "Pangasinan"
    },
    {
      city: "Santa Catalina",
      province: "Ilocos Sur"
    },
    {
      city: "Santa Catalina",
      province: "Negros Oriental"
    },
    {
      city: "Santa Cruz",
      province: "Davao del Sur"
    },
    {
      city: "Santa Cruz",
      province: "Ilocos Sur"
    },
    {
      city: "Santa Cruz",
      province: "Laguna"
    },
    {
      city: "Santa Cruz",
      province: "Marinduque"
    },
    {
      city: "Santa Cruz",
      province: "Occidental Mindoro"
    },
    {
      city: "Santa Cruz",
      province: "Zambales"
    },
    {
      city: "Santa Elena",
      province: "Camarines Norte"
    },
    {
      city: "Santa Fe",
      province: "Cebu"
    },
    {
      city: "Santa Fe",
      province: "Leyte"
    },
    {
      city: "Santa Fe",
      province: "Romblon"
    },
    {
      city: "Santa Fe (Imugan)",
      province: "Nueva Vizcaya"
    },
    {
      city: "Santa Ignacia",
      province: "Tarlac"
    },
    {
      city: "Santa Josefa",
      province: "Agusan del Sur"
    },
    {
      city: "Santa Lucia",
      province: "Ilocos Sur"
    },
    {
      city: "Santa Magdalena",
      province: "Sorsogon"
    },
    {
      city: "Santa Marcela",
      province: "Apayao"
    },
    {
      city: "Santa Margarita",
      province: "Samar"
    },
    {
      city: "Santa Maria",
      province: "Bulacan"
    },
    {
      city: "Santa Maria",
      province: "Davao Occidental"
    },
    {
      city: "Santa Maria",
      province: "Ilocos Sur"
    },
    {
      city: "Santa Maria",
      province: "Isabela"
    },
    {
      city: "Santa Maria",
      province: "Laguna"
    },
    {
      city: "Santa Maria",
      province: "Pangasinan"
    },
    {
      city: "Santa Maria (Imelda)",
      province: "Romblon"
    },
    {
      city: "Santa Monica (Sapao)",
      province: "Surigao del Norte"
    },
    {
      city: "Santa Praxedes",
      province: "Cagayan"
    },
    {
      city: "Santa Rita",
      province: "Pampanga"
    },
    {
      city: "Santa Rita",
      province: "Samar"
    },
    {
      city: "Santa Rosa",
      province: "Laguna"
    },
    {
      city: "Santa Rosa",
      province: "Nueva Ecija"
    },
    {
      city: "Santa Teresita",
      province: "Batangas"
    },
    {
      city: "Santa Teresita",
      province: "Cagayan"
    },
    {
      city: "Santander",
      province: "Cebu"
    },
    {
      city: "Santiago",
      province: "Agusan del Norte"
    },
    {
      city: "Santiago",
      province: "Ilocos Sur"
    },
    {
      city: "Santiago",
      province: "Isabela"
    },
    {
      city: "Santo Domingo",
      province: "Albay"
    },
    {
      city: "Santo Domingo",
      province: "Ilocos Sur"
    },
    {
      city: "Santo Domingo",
      province: "Nueva Ecija"
    },
    {
      city: "Santo Niño",
      province: "Samar"
    },
    {
      city: "Santo Niño",
      province: "South Cotabato"
    },
    {
      city: "Santo Niño (Faire)",
      province: "Cagayan"
    },
    {
      city: "Santo Tomas",
      province: "Batangas"
    },
    {
      city: "Santo Tomas",
      province: "Davao del Norte"
    },
    {
      city: "Santo Tomas",
      province: "Isabela"
    },
    {
      city: "Santo Tomas",
      province: "La Union"
    },
    {
      city: "Santo Tomas",
      province: "Pampanga"
    },
    {
      city: "Santo Tomas",
      province: "Pangasinan"
    },
    {
      city: "Santol",
      province: "La Union"
    },
    {
      city: "Sapa-Sapa",
      province: "Tawi-Tawi"
    },
    {
      city: "Sapad",
      province: "Lanao del Norte"
    },
    {
      city: "Sapang Dalaga",
      province: "Misamis Occidental"
    },
    {
      city: "Sapian",
      province: "Capiz"
    },
    {
      city: "Sara",
      province: "Iloilo"
    },
    {
      city: "Sarangani",
      province: "Davao Occidental"
    },
    {
      city: "Sariaya",
      province: "Quezon"
    },
    {
      city: "Sarrat",
      province: "Ilocos Norte"
    },
    {
      city: "Sasmuan",
      province: "Pampanga"
    },
    {
      city: "Sebaste",
      province: "Antique"
    },
    {
      city: "Senator Ninoy Aquino",
      province: "Sultan Kudarat"
    },
    {
      city: "Sergio Osmeña Sr.",
      province: "Zamboanga del Norte"
    },
    {
      city: "Sevilla",
      province: "Bohol"
    },
    {
      city: "Shariff Aguak (Maganoy)",
      province: "Maguindanao"
    },
    {
      city: "Shariff Saydona Mustapha",
      province: "Maguindanao"
    },
    {
      city: "Siasi",
      province: "Sulu"
    },
    {
      city: "Siaton",
      province: "Negros Oriental"
    },
    {
      city: "Siay",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Siayan",
      province: "Zamboanga del Norte"
    },
    {
      city: "Sibagat",
      province: "Agusan del Sur"
    },
    {
      city: "Sibalom",
      province: "Antique"
    },
    {
      city: "Sibonga",
      province: "Cebu"
    },
    {
      city: "Sibuco",
      province: "Zamboanga del Norte"
    },
    {
      city: "Sibulan",
      province: "Negros Oriental"
    },
    {
      city: "Sibunag",
      province: "Guimaras"
    },
    {
      city: "Sibutad",
      province: "Zamboanga del Norte"
    },
    {
      city: "Sibutu",
      province: "Tawi-Tawi"
    },
    {
      city: "Sierra Bullones",
      province: "Bohol"
    },
    {
      city: "Sigay",
      province: "Ilocos Sur"
    },
    {
      city: "Sigma",
      province: "Capiz"
    },
    {
      city: "Sikatuna",
      province: "Bohol"
    },
    {
      city: "Silago",
      province: "Southern Leyte"
    },
    {
      city: "Silang",
      province: "Cavite"
    },
    {
      city: "Silay",
      province: "Negros Occidental"
    },
    {
      city: "Silvino Lobos",
      province: "Northern Samar"
    },
    {
      city: "Simunul",
      province: "Tawi-Tawi"
    },
    {
      city: "Sinacaban",
      province: "Misamis Occidental"
    },
    {
      city: "Sinait",
      province: "Ilocos Sur"
    },
    {
      city: "Sindangan",
      province: "Zamboanga del Norte"
    },
    {
      city: "Siniloan",
      province: "Laguna"
    },
    {
      city: "Siocon",
      province: "Zamboanga del Norte"
    },
    {
      city: "Sipalay",
      province: "Negros Occidental"
    },
    {
      city: "Sipocot",
      province: "Camarines Sur"
    },
    {
      city: "Siquijor",
      province: "Siquijor"
    },
    {
      city: "Sirawai",
      province: "Zamboanga del Norte"
    },
    {
      city: "Siruma",
      province: "Camarines Sur"
    },
    {
      city: "Sison",
      province: "Pangasinan"
    },
    {
      city: "Sison",
      province: "Surigao del Norte"
    },
    {
      city: "Sitangkai",
      province: "Tawi-Tawi"
    },
    {
      city: "Socorro",
      province: "Oriental Mindoro"
    },
    {
      city: "Socorro",
      province: "Surigao del Norte"
    },
    {
      city: "Sofronio Española",
      province: "Palawan"
    },
    {
      city: "Sogod",
      province: "Cebu"
    },
    {
      city: "Sogod",
      province: "Southern Leyte"
    },
    {
      city: "Solana",
      province: "Cagayan"
    },
    {
      city: "Solano",
      province: "Nueva Vizcaya"
    },
    {
      city: "Solsona",
      province: "Ilocos Norte"
    },
    {
      city: "Sominot (Don Mariano Marcos)",
      province: "Zamboanga del Sur"
    },
    {
      city: "Sorsogon City",
      province: "Sorsogon"
    },
    {
      city: "South Ubian",
      province: "Tawi-Tawi"
    },
    {
      city: "South Upi",
      province: "Maguindanao"
    },
    {
      city: "Sual",
      province: "Pangasinan"
    },
    {
      city: "Subic",
      province: "Zambales"
    },
    {
      city: "Sudipen",
      province: "La Union"
    },
    {
      city: "Sugbongcogon",
      province: "Misamis Oriental"
    },
    {
      city: "Sugpon",
      province: "Ilocos Sur"
    },
    {
      city: "Sulat",
      province: "Eastern Samar"
    },
    {
      city: "Sulop",
      province: "Davao del Sur"
    },
    {
      city: "Sultan Dumalondong",
      province: "Lanao del Sur"
    },
    {
      city: "Sultan Kudarat (Nuling)",
      province: "Maguindanao"
    },
    {
      city: "Sultan Mastura",
      province: "Maguindanao"
    },
    {
      city: "Sultan Naga Dimaporo (Karomatan)",
      province: "Lanao del Norte"
    },
    {
      city: "Sultan sa Barongis (Lambayong)",
      province: "Maguindanao"
    },
    {
      city: "Sultan Sumagka (Talitay)",
      province: "Maguindanao"
    },
    {
      city: "Sumilao",
      province: "Bukidnon"
    },
    {
      city: "Sumisip",
      province: "Basilan"
    },
    {
      city: "Surallah",
      province: "South Cotabato"
    },
    {
      city: "Surigao City",
      province: "Surigao del Norte"
    },
    {
      city: "Suyo",
      province: "Ilocos Sur"
    },
    {
      city: "T'Boli",
      province: "South Cotabato"
    },
    {
      city: "Taal",
      province: "Batangas"
    },
    {
      city: "Tabaco",
      province: "Albay"
    },
    {
      city: "Tabango",
      province: "Leyte"
    },
    {
      city: "Tabina",
      province: "Zamboanga del Sur"
    },
    {
      city: "Tabogon",
      province: "Cebu"
    },
    {
      city: "Tabontabon",
      province: "Leyte"
    },
    {
      city: "Tabuan-Lasa",
      province: "Basilan"
    },
    {
      city: "Tabuelan",
      province: "Cebu"
    },
    {
      city: "Tabuk",
      province: "Kalinga"
    },
    {
      city: "Tacloban",
      province: "Leyte"
    },
    {
      city: "Tacurong",
      province: "Sultan Kudarat"
    },
    {
      city: "Tadian",
      province: "Mountain Province"
    },
    {
      city: "Taft",
      province: "Eastern Samar"
    },
    {
      city: "Tagana-an",
      province: "Surigao del Norte"
    },
    {
      city: "Tagapul-an",
      province: "Samar"
    },
    {
      city: "Tagaytay",
      province: "Cavite"
    },
    {
      city: "Tagbilaran",
      province: "Bohol"
    },
    {
      city: "Tagbina",
      province: "Surigao del Sur"
    },
    {
      city: "Tagkawayan",
      province: "Quezon"
    },
    {
      city: "Tago",
      province: "Surigao del Sur"
    },
    {
      city: "Tagoloan",
      province: "Lanao del Norte"
    },
    {
      city: "Tagoloan",
      province: "Misamis Oriental"
    },
    {
      city: "Tagoloan II",
      province: "Lanao del Sur"
    },
    {
      city: "Tagudin",
      province: "Ilocos Sur"
    },
    {
      city: "Taguig",
      province: "NCR, 4th district"
    },
    {
      city: "Tagum",
      province: "Davao del Norte"
    },
    {
      city: "Talacogon",
      province: "Agusan del Sur"
    },
    {
      city: "Talaingod",
      province: "Davao del Norte"
    },
    {
      city: "Talakag",
      province: "Bukidnon"
    },
    {
      city: "Talalora",
      province: "Samar"
    },
    {
      city: "Talavera",
      province: "Nueva Ecija"
    },
    {
      city: "Talayan",
      province: "Maguindanao"
    },
    {
      city: "Talibon",
      province: "Bohol"
    },
    {
      city: "Talipao",
      province: "Sulu"
    },
    {
      city: "Talisay",
      province: "Batangas"
    },
    {
      city: "Talisay",
      province: "Camarines Norte"
    },
    {
      city: "Talisay",
      province: "Cebu"
    },
    {
      city: "Talisay",
      province: "Negros Occidental"
    },
    {
      city: "Talisayan",
      province: "Misamis Oriental"
    },
    {
      city: "Talugtug",
      province: "Nueva Ecija"
    },
    {
      city: "Talusan",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Tambulig",
      province: "Zamboanga del Sur"
    },
    {
      city: "Tampakan",
      province: "South Cotabato"
    },
    {
      city: "Tamparan",
      province: "Lanao del Sur"
    },
    {
      city: "Tampilisan",
      province: "Zamboanga del Norte"
    },
    {
      city: "Tanauan",
      province: "Batangas"
    },
    {
      city: "Tanauan",
      province: "Leyte"
    },
    {
      city: "Tanay",
      province: "Rizal"
    },
    {
      city: "Tandag",
      province: "Surigao del Sur"
    },
    {
      city: "Tandubas",
      province: "Tawi-Tawi"
    },
    {
      city: "Tangalan",
      province: "Aklan"
    },
    {
      city: "Tangcal",
      province: "Lanao del Norte"
    },
    {
      city: "Tangub",
      province: "Misamis Occidental"
    },
    {
      city: "Tanjay",
      province: "Negros Oriental"
    },
    {
      city: "Tantangan",
      province: "South Cotabato"
    },
    {
      city: "Tanudan",
      province: "Kalinga"
    },
    {
      city: "Tanza",
      province: "Cavite"
    },
    {
      city: "Tapaz",
      province: "Capiz"
    },
    {
      city: "Tapul",
      province: "Sulu"
    },
    {
      city: "Taraka",
      province: "Lanao del Sur"
    },
    {
      city: "Tarangnan",
      province: "Samar"
    },
    {
      city: "Tarlac City",
      province: "Tarlac"
    },
    {
      city: "Tarragona",
      province: "Davao Oriental"
    },
    {
      city: "Tayabas",
      province: "Quezon"
    },
    {
      city: "Tayasan",
      province: "Negros Oriental"
    },
    {
      city: "Taysan",
      province: "Batangas"
    },
    {
      city: "Taytay",
      province: "Palawan"
    },
    {
      city: "Taytay",
      province: "Rizal"
    },
    {
      city: "Tayug",
      province: "Pangasinan"
    },
    {
      city: "Tayum",
      province: "Abra"
    },
    {
      city: "Teresa",
      province: "Rizal"
    },
    {
      city: "Ternate",
      province: "Cavite"
    },
    {
      city: "Tiaong",
      province: "Quezon"
    },
    {
      city: "Tibiao",
      province: "Antique"
    },
    {
      city: "Tigaon",
      province: "Camarines Sur"
    },
    {
      city: "Tigbao",
      province: "Zamboanga del Sur"
    },
    {
      city: "Tigbauan",
      province: "Iloilo"
    },
    {
      city: "Tinambac",
      province: "Camarines Sur"
    },
    {
      city: "Tineg",
      province: "Abra"
    },
    {
      city: "Tinglayan",
      province: "Kalinga"
    },
    {
      city: "Tingloy",
      province: "Batangas"
    },
    {
      city: "Tinoc",
      province: "Ifugao"
    },
    {
      city: "Tipo-Tipo",
      province: "Basilan"
    },
    {
      city: "Titay",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Tiwi",
      province: "Albay"
    },
    {
      city: "Tobias Fornier (Dao)",
      province: "Antique"
    },
    {
      city: "Toboso",
      province: "Negros Occidental"
    },
    {
      city: "Toledo",
      province: "Cebu"
    },
    {
      city: "Tolosa",
      province: "Leyte"
    },
    {
      city: "Tomas Oppus",
      province: "Southern Leyte"
    },
    {
      city: "Torrijos",
      province: "Marinduque"
    },
    {
      city: "Trece Martires",
      province: "Cavite"
    },
    {
      city: "Trento",
      province: "Agusan del Sur"
    },
    {
      city: "Trinidad",
      province: "Bohol"
    },
    {
      city: "Tuao",
      province: "Cagayan"
    },
    {
      city: "Tuba",
      province: "Benguet"
    },
    {
      city: "Tubajon",
      province: "Dinagat Islands"
    },
    {
      city: "Tubao",
      province: "La Union"
    },
    {
      city: "Tubaran",
      province: "Lanao del Sur"
    },
    {
      city: "Tubay",
      province: "Agusan del Norte"
    },
    {
      city: "Tubigon",
      province: "Bohol"
    },
    {
      city: "Tublay",
      province: "Benguet"
    },
    {
      city: "Tubo",
      province: "Abra"
    },
    {
      city: "Tubod",
      province: "Lanao del Norte"
    },
    {
      city: "Tubod",
      province: "Surigao del Norte"
    },
    {
      city: "Tubungan",
      province: "Iloilo"
    },
    {
      city: "Tuburan",
      province: "Basilan"
    },
    {
      city: "Tuburan",
      province: "Cebu"
    },
    {
      city: "Tudela",
      province: "Cebu"
    },
    {
      city: "Tudela",
      province: "Misamis Occidental"
    },
    {
      city: "Tugaya",
      province: "Lanao del Sur"
    },
    {
      city: "Tuguegarao",
      province: "Cagayan"
    },
    {
      city: "Tukuran",
      province: "Zamboanga del Sur"
    },
    {
      city: "Tulunan",
      province: "Cotabato"
    },
    {
      city: "Tumauini",
      province: "Isabela"
    },
    {
      city: "Tunga",
      province: "Leyte"
    },
    {
      city: "Tungawan",
      province: "Zamboanga Sibugay"
    },
    {
      city: "Tupi",
      province: "South Cotabato"
    },
    {
      city: "Turtle Islands (Taganak)",
      province: "Tawi-Tawi"
    },
    {
      city: "Tuy",
      province: "Batangas"
    },
    {
      city: "Ubay",
      province: "Bohol"
    },
    {
      city: "Umingan",
      province: "Pangasinan"
    },
    {
      city: "Ungkaya Pukan",
      province: "Basilan"
    },
    {
      city: "Unisan",
      province: "Quezon"
    },
    {
      city: "Upi",
      province: "Maguindanao"
    },
    {
      city: "Urbiztondo",
      province: "Pangasinan"
    },
    {
      city: "Urdaneta",
      province: "Pangasinan"
    },
    {
      city: "Uson",
      province: "Masbate"
    },
    {
      city: "Uyugan",
      province: "Batanes"
    },
    {
      city: "Valderrama",
      province: "Antique"
    },
    {
      city: "Valencia",
      province: "Bohol"
    },
    {
      city: "Valencia",
      province: "Bukidnon"
    },
    {
      city: "Valencia (Luzurriaga)",
      province: "Negros Oriental"
    },
    {
      city: "Valenzuela",
      province: "NCR, 3rd district"
    },
    {
      city: "Valladolid",
      province: "Negros Occidental"
    },
    {
      city: "Vallehermoso",
      province: "Negros Oriental"
    },
    {
      city: "Veruela",
      province: "Agusan del Sur"
    },
    {
      city: "Victoria",
      province: "Laguna"
    },
    {
      city: "Victoria",
      province: "Northern Samar"
    },
    {
      city: "Victoria",
      province: "Oriental Mindoro"
    },
    {
      city: "Victoria",
      province: "Tarlac"
    },
    {
      city: "Victorias",
      province: "Negros Occidental"
    },
    {
      city: "Viga",
      province: "Catanduanes"
    },
    {
      city: "Vigan",
      province: "Ilocos Sur"
    },
    {
      city: "Villaba",
      province: "Leyte"
    },
    {
      city: "Villanueva",
      province: "Misamis Oriental"
    },
    {
      city: "Villareal",
      province: "Samar"
    },
    {
      city: "Villasis",
      province: "Pangasinan"
    },
    {
      city: "Villaverde (Ibung)",
      province: "Nueva Vizcaya"
    },
    {
      city: "Villaviciosa",
      province: "Abra"
    },
    {
      city: "Vincenzo A. Sagun",
      province: "Zamboanga del Sur"
    },
    {
      city: "Vintar",
      province: "Ilocos Norte"
    },
    {
      city: "Vinzons",
      province: "Camarines Norte"
    },
    {
      city: "Virac",
      province: "Catanduanes"
    },
    {
      city: "Wao",
      province: "Lanao del Sur"
    },
    {
      city: "Zamboanga City",
      province: "Zamboanga del Sur"
    },
    {
      city: "Zamboanguita",
      province: "Negros Oriental"
    },
    {
      city: "Zaragoza",
      province: "Nueva Ecija"
    },
    {
      city: "Zarraga",
      province: "Iloilo"
    },
    {
      city: "Zumarraga",
      province: "Samar"
    }
  ];
  myForm;
  useruid;
  base64TripPhoto = "";
  aboutTrip = "";
  city = "";
  fromDate = "";
  toDate = "";
  eventTitle = "";
  province = "";
  frommax = "";
  tomin = "";
  tomax = "";
  states = [];
  currentdate;
  cities = [];
  provincesVisited = "";
  visitedProvincesArray: any = [];
  hideplaceholder = false;
  hidepickerone;
  hidepickertwo;
  timestamp;
  postedtimetimestamp;
  datePickerObj: any = {};
  selectedDate;
  mydate = "";
  isItemAvailable = false;
  provinceSearchTerm = "";
  isItemAvailable2 = false;
  citySearchTerm = "";


  constructor(
    public camera: Camera,
    public router: Router,
    public events: Events,
    public crop: Crop,
    public file: File,

    public zone: NgZone,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public route: ActivatedRoute,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public travelAppService: TravelAppService
  ) {
    super(router, route);

    this.useruid = firebase.auth().currentUser.uid;
    // this.useruid = "6rH3EDAYwjUXsVBgTo5PU1ipbkQ2";

    firebase.database().ref("/users").child(this.useruid)
      .once("value", snapshot => {
        this.provincesVisited = snapshot.val().provincesVisited;
        this.visitedProvincesArray = snapshot.val().visitedProvincesArray;
      })
      .then(() => {
        console.log(this.provincesVisited);
        console.log(this.visitedProvincesArray);
      })
      .catch(err => {
        console.log(err);
      });

      this.initDatePicker(0);

      this.postedtimetimestamp = this.convertDateToTimeStamp(this.getCurrentDate(new Date()))
      console.log(this.getCurrentDate(new Date()));

      // console.log()
  }

  getItems(event){
    console.log(event)

    this.states = this.getProvinces();

    const val = event.target.value;

 // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
        this.isItemAvailable = true;
        this.states = this.states.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
 }
 else if(val.trim() == ""){
   this.states = [];
   this.isItemAvailable = false;

 }
  }

  getItems2(event){

   this.cities = this.showCities(this.province);

    const val = event.target.value;

 // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
        this.isItemAvailable2 = true;
        this.cities = this.cities.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
 }

 else if(val.trim() == ""){
  this.cities = [];
  this.isItemAvailable2 = false;

}
  }

  checkEndDate(){
    if(this.fromDate == ""){
      this.presentToast("Please select a start date first");
    }else{
      
    }
  }

  selectProvince(){

  }

  onChangeFromDate(){
    console.log(this.fromDate)
    this.initDatePicker(1);
  }

  onChangeToDate(){
    console.log(this.toDate)
    var myDate:any = this.toDate;
    myDate=myDate.split("-");
    console.log(myDate)
    var newDate=myDate[1]+"/"+myDate[2]+"/"+myDate[0];
    console.log(newDate)
    this.timestamp = new Date(newDate).getTime();
    console.log(this.timestamp);
  }

  convertDateToTimeStamp(date){
    var myDate:any = date;
    myDate=myDate.split("-");
    console.log(myDate)
    var newDate=myDate[1]+"/"+myDate[2]+"/"+myDate[0];
    console.log(newDate)

    var returned = new Date(newDate).getTime();
    return returned;
  }

  initDatePicker(instanceCalled) {

    var inputDate:any;
    var fromDate:any;
    var toDate:any;
    if(instanceCalled == 0){
      inputDate = new Date(this.getCurrentDate(new Date()))
      toDate = new Date(this.getCurrentDate(new Date()))
    }else if(instanceCalled == 1){
      inputDate = new Date(this.fromDate)
      fromDate = new Date(this.fromDate)
      toDate = new Date(this.getCurrentDate(new Date()))
    }
    this.datePickerObj = {
      inputDate: inputDate,
      fromDate: fromDate,
      toDate: toDate,
      showTodayButton: false,
      // dateFormat: 'yyyy-MM-DD',
      isSundayHighlighted: {
            fontColor: "#ff5a23" // Default null
          }, // Default {},
      dateFormat: "YYYY-MM-DD",
      clearButton: false,

      // fromDate: new Date('2018-12-08'), // default null
      // toDate: new Date('2018-12-28'), // default null

      titleLabel: "Select a Date", // default null
      // monthsList: this.monthsList,
      // weeksList: this.weeksList,
      momentLocale: "pt-BR",
      yearInAscending: true
    };

    console.log()
  }

  showCities(provincevalue) {
    var citiesarray = [];

    for (var i = 0; i < this.testjson.length; i++) {
      var province = this.testjson[i].province;
      var city = this.testjson[i].city;

      if (province == provincevalue) {
        citiesarray.push(city);
      }
    }
    citiesarray = citiesarray.sort();
    return citiesarray;
  }

  getProvinces() {
    var provincesarray = [];
    for (var i = 0; i < this.testjson.length; i++) {
      if (this.testjson[i].province.includes("NCR")) {
        this.testjson[i].province = "Metropolitan Manila";
      }
      if (!provincesarray.includes(this.testjson[i].province)) {
        provincesarray.push(this.testjson[i].province);
      }
    }
    provincesarray = provincesarray.sort();
    return provincesarray;
  }

  ionViewWillLeave() {
    console.log("Should clear fields")
    this.clearFields();
  }

  clearFields() {
    // this.base64TripPhoto = "../../assets/browsephoto.png";
    this.hideplaceholder = false;
    this.fromDate = "";
    this.toDate = "";
    this.aboutTrip = "";
    this.city = "";
    // this.fromDate = "";
    // this.toDate = "";
    this.eventTitle = "";
    this.province = "";
    this.frommax = "";
    this.tomin = "";
    this.tomax = "";

    this.initDatePicker(0);

  }

  onEnter() {
    this.zone.run(() => {
      this.currentdate = new Date();
      this.frommax = this.getCurrentDate(this.currentdate);
      this.tomax = this.getCurrentDate(this.currentdate);
      this.states = this.getProvinces();

      // Update visited provinces
      this.travelAppService.fetchVisitedProvicesArray().then(visitedArray => {
        this.visitedProvincesArray = visitedArray;
        this.provincesVisited = "" + this.visitedProvincesArray.length;
      });

      this.hidepickerone = true;
      this.hidepickertwo = true;

      // Check if addtrip event was closed
      // this.events.subscribe('addtripevent', res =>{
      //   console.log(res);
      // })
    });
  }

  onDestroy() {
    super.ngOnDestroy();
  }

  getCurrentDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  parseDate(date: any) {

    date = date + "0";
    var year = date.slice(0, -7);
    var month = date.slice(5, -4);
    // var day = date.slice(8, 0);
    var day = date.slice(8, -1);

    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var newdate = months[month - 1] + " " + day + ", " + year;

    return newdate;
  }

  onStateChange(value) {

    this.province = value;
    this.cities = this.showCities(value);
    console.log(value);
    this.city = "";
    this.isItemAvailable = false;
    this.provinceSearchTerm = value;

    this.citySearchTerm = "";
    
  }

  onCityChange(value) {

    this.city = value;
    console.log(value);
    this.isItemAvailable2 = false;
    this.citySearchTerm = value;

  }

  uploadTrip() {

    if (this.province == "") {
      this.presentToast("Please select a province");
    } else if (this.city == "") {
      this.presentToast("Please select a state");
    } else if (this.fromDate == "") {
      this.presentToast("Please select a start date");
    } else if (this.toDate == "") {
      this.presentToast("Please select an end date");
    } else if (this.eventTitle == "") {
      this.presentToast("Title field cannot be left blank");
    } else if (this.eventTitle.length < 3) {
      this.presentToast("Title length is too short, input at least 3 characters");
    } else if (this.aboutTrip == "") {
      this.presentToast("About trip field cannot be left blank");
    } else if (this.aboutTrip.length < 3) {
      this.presentToast("About trip length is too short, input at least 3 characters");
    } else if (this.hideplaceholder == false) {
      this.presentToast("Please select an image");
    } else {
      this.loadingCtrl.create({ message: "Uploading your trip" }).then(res => {
        res.present();

        console.log(this.timestamp);
        this.travelAppService
          .addTrip(
            this.useruid,
            this.aboutTrip,
            this.city,
            this.fromDate,
            this.toDate,
            this.parseDate(this.fromDate),
            this.parseDate(this.toDate),
            this.eventTitle,
            this.province,
            this.base64TripPhoto,
            this.timestamp,
            this.postedtimetimestamp
          )
          .then(() => {

            res.dismiss();

            if (!this.visitedProvincesArray.includes(this.province)) {
              this.visitedProvincesArray.push(this.province);
              this.provincesVisited = "" + this.visitedProvincesArray.length;

              console.log(this.visitedProvincesArray);
              console.log(this.provincesVisited);

              this.updateVisitedProvinces();
            }
            this.clearFields();
            this.close();
          })
          .catch(err => {
            res.dismiss();
            this.presentToast(err);
          });
      });
    }
  }

  updateVisitedProvinces() {
    if (this.visitedProvincesArray != []) {
      this.travelAppService
        .updateVisitedProvinces(
          this.provincesVisited,
          this.visitedProvincesArray
        )
        .then(() => {
          console.log("Provinces updated");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  close() {
    this.events.publish("addtripevent", "closed");
    this.router.navigateByUrl("/tabs/profile");
  }

  AccessGallery() {
    this.camera
      .getPicture({
        quality: 100,
        targetWidth: 600,
        targetHeight: 800,
        correctOrientation: true,
        // encodingType: Camera.EncodingType.JPEG,
        // allowEdit: true,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL
      })
      .then(
        imageData => {

          this.base64TripPhoto = "data:image/jpeg;base64," + imageData;
          this.hideplaceholder = true;

        },
        err => {
          console.log(err);
        }
      );
  }

  // cropImage(fileUrl) {
  //   this.crop.crop(fileUrl, { quality: 50 })
  //     .then(
  //       newPath => {
  //         this.showCroppedImage(newPath.split('?')[0])
  //       },
  //       error => {
  //         // alert('Error cropping image' + error);
  //         console.log('Error cropping image' + error);

  //       }
  //     );
  // }

  // showCroppedImage(ImagePath) {
  //   // this.isLoading = true;
  //   var copyPath = ImagePath;
  //   var splitPath = copyPath.split('/');
  //   var imageName = splitPath[splitPath.length - 1];
  //   var filePath = ImagePath.split(imageName)[0];

  //   this.file.readAsDataURL(filePath, imageName).then(base64 => {

  //               this.base64TripPhoto = base64;
  //         this.hideplaceholder = true;
  //   }, error => {
  //     alert('Error in showing image' + error);
  //     this.hideplaceholder = false;

  //   });
  // }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: "dark"
    });
    toast.present();
  }

}
