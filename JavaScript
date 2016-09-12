function menuthumbs(json){document.write('<ul id="menu_with_thumbs">');for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}var thumburl;try{thumburl=entry.media$thumbnail.url;}catch(error)
{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='http://2.bp.blogspot.com/-M297yON1Bgk/U7a7d75ygaI/AAAAAAAADMY/sonubx-DZRY/s250/no_image.png';}
var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Sty";monthnames[2]="Lut";monthnames[3]="Mar";monthnames[4]="Kwi";monthnames[5]="Maj";monthnames[6]="Cze";monthnames[7]="Lip";monthnames[8]="Sie";monthnames[9]="Wrz";monthnames[10]="Paź";monthnames[11]="Lis";monthnames[12]="Gru";document.write('<li class="clearfix">');if(showpostthumbnails==true)
document.write('<a href="'+posturl+'" target ="_top"><img class="menu_thumb" src="'+thumburl+'"/></a>');

document.write('<div id="menu_with">');
document.write('<div id="menu_with_center">');
document.write('<strong><a href="'+posturl+'" target ="_top">'+posttitle+'</a></strong><br><br/>');


if("content"in entry){var postcontent=entry.content.$t;}
else


if("summary"in entry){var postcontent=entry.summary.$t;}


else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");if(showpostsummary==true){if(postcontent.length<numchars){document.write('');document.write(postcontent);document.write('');}
else{document.write('');postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...');document.write('');}}
var towrite='';var flag=0;document.write('<br><br>');if(showpostdate==true){towrite=towrite+monthnames[parseInt(cdmonth,10)]+'-'+cdday+' - '+cdyear;flag=1;}
if(showcommentnum==true)
{if(flag==1){towrite=towrite+' | ';}
if(commenttext=='1 Komentarz')commenttext='1 Komentarz';if(commenttext=='0 Komentarzy')commenttext='Brak komentarzy';commenttext='<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';towrite=towrite+commenttext;flag=1;;}
if(displaymore==true)
{if(flag==1)towrite=towrite+' | ';towrite=towrite+'<a href="'+posturl+'" class="url" target ="_top">CZYTAJ DALEJ »</a>';flag=1;;}
document.write(towrite);



document.write('</div>');
document.write('</div>');
document.write('</li>');if(displayseparator==true)
if(i!=(numposts-1))
document.write('');}document.write('</ul>');}
