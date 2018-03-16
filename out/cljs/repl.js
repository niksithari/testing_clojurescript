// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36272){
var map__36273 = p__36272;
var map__36273__$1 = ((((!((map__36273 == null)))?((((map__36273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36273):map__36273);
var m = map__36273__$1;
var n = cljs.core.get.call(null,map__36273__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36275_36297 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36276_36298 = null;
var count__36277_36299 = (0);
var i__36278_36300 = (0);
while(true){
if((i__36278_36300 < count__36277_36299)){
var f_36301 = cljs.core._nth.call(null,chunk__36276_36298,i__36278_36300);
cljs.core.println.call(null,"  ",f_36301);

var G__36302 = seq__36275_36297;
var G__36303 = chunk__36276_36298;
var G__36304 = count__36277_36299;
var G__36305 = (i__36278_36300 + (1));
seq__36275_36297 = G__36302;
chunk__36276_36298 = G__36303;
count__36277_36299 = G__36304;
i__36278_36300 = G__36305;
continue;
} else {
var temp__4657__auto___36306 = cljs.core.seq.call(null,seq__36275_36297);
if(temp__4657__auto___36306){
var seq__36275_36307__$1 = temp__4657__auto___36306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36275_36307__$1)){
var c__28828__auto___36308 = cljs.core.chunk_first.call(null,seq__36275_36307__$1);
var G__36309 = cljs.core.chunk_rest.call(null,seq__36275_36307__$1);
var G__36310 = c__28828__auto___36308;
var G__36311 = cljs.core.count.call(null,c__28828__auto___36308);
var G__36312 = (0);
seq__36275_36297 = G__36309;
chunk__36276_36298 = G__36310;
count__36277_36299 = G__36311;
i__36278_36300 = G__36312;
continue;
} else {
var f_36313 = cljs.core.first.call(null,seq__36275_36307__$1);
cljs.core.println.call(null,"  ",f_36313);

var G__36314 = cljs.core.next.call(null,seq__36275_36307__$1);
var G__36315 = null;
var G__36316 = (0);
var G__36317 = (0);
seq__36275_36297 = G__36314;
chunk__36276_36298 = G__36315;
count__36277_36299 = G__36316;
i__36278_36300 = G__36317;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36318 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36318);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36318)))?cljs.core.second.call(null,arglists_36318):arglists_36318));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36279_36319 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36280_36320 = null;
var count__36281_36321 = (0);
var i__36282_36322 = (0);
while(true){
if((i__36282_36322 < count__36281_36321)){
var vec__36283_36323 = cljs.core._nth.call(null,chunk__36280_36320,i__36282_36322);
var name_36324 = cljs.core.nth.call(null,vec__36283_36323,(0),null);
var map__36286_36325 = cljs.core.nth.call(null,vec__36283_36323,(1),null);
var map__36286_36326__$1 = ((((!((map__36286_36325 == null)))?((((map__36286_36325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36286_36325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36286_36325):map__36286_36325);
var doc_36327 = cljs.core.get.call(null,map__36286_36326__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36328 = cljs.core.get.call(null,map__36286_36326__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36324);

cljs.core.println.call(null," ",arglists_36328);

if(cljs.core.truth_(doc_36327)){
cljs.core.println.call(null," ",doc_36327);
} else {
}

var G__36329 = seq__36279_36319;
var G__36330 = chunk__36280_36320;
var G__36331 = count__36281_36321;
var G__36332 = (i__36282_36322 + (1));
seq__36279_36319 = G__36329;
chunk__36280_36320 = G__36330;
count__36281_36321 = G__36331;
i__36282_36322 = G__36332;
continue;
} else {
var temp__4657__auto___36333 = cljs.core.seq.call(null,seq__36279_36319);
if(temp__4657__auto___36333){
var seq__36279_36334__$1 = temp__4657__auto___36333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36279_36334__$1)){
var c__28828__auto___36335 = cljs.core.chunk_first.call(null,seq__36279_36334__$1);
var G__36336 = cljs.core.chunk_rest.call(null,seq__36279_36334__$1);
var G__36337 = c__28828__auto___36335;
var G__36338 = cljs.core.count.call(null,c__28828__auto___36335);
var G__36339 = (0);
seq__36279_36319 = G__36336;
chunk__36280_36320 = G__36337;
count__36281_36321 = G__36338;
i__36282_36322 = G__36339;
continue;
} else {
var vec__36288_36340 = cljs.core.first.call(null,seq__36279_36334__$1);
var name_36341 = cljs.core.nth.call(null,vec__36288_36340,(0),null);
var map__36291_36342 = cljs.core.nth.call(null,vec__36288_36340,(1),null);
var map__36291_36343__$1 = ((((!((map__36291_36342 == null)))?((((map__36291_36342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36291_36342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36291_36342):map__36291_36342);
var doc_36344 = cljs.core.get.call(null,map__36291_36343__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36345 = cljs.core.get.call(null,map__36291_36343__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36341);

cljs.core.println.call(null," ",arglists_36345);

if(cljs.core.truth_(doc_36344)){
cljs.core.println.call(null," ",doc_36344);
} else {
}

var G__36346 = cljs.core.next.call(null,seq__36279_36334__$1);
var G__36347 = null;
var G__36348 = (0);
var G__36349 = (0);
seq__36279_36319 = G__36346;
chunk__36280_36320 = G__36347;
count__36281_36321 = G__36348;
i__36282_36322 = G__36349;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36293 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36294 = null;
var count__36295 = (0);
var i__36296 = (0);
while(true){
if((i__36296 < count__36295)){
var role = cljs.core._nth.call(null,chunk__36294,i__36296);
var temp__4657__auto___36350__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36350__$1)){
var spec_36351 = temp__4657__auto___36350__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36351));
} else {
}

var G__36352 = seq__36293;
var G__36353 = chunk__36294;
var G__36354 = count__36295;
var G__36355 = (i__36296 + (1));
seq__36293 = G__36352;
chunk__36294 = G__36353;
count__36295 = G__36354;
i__36296 = G__36355;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36293);
if(temp__4657__auto____$1){
var seq__36293__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36293__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__36293__$1);
var G__36356 = cljs.core.chunk_rest.call(null,seq__36293__$1);
var G__36357 = c__28828__auto__;
var G__36358 = cljs.core.count.call(null,c__28828__auto__);
var G__36359 = (0);
seq__36293 = G__36356;
chunk__36294 = G__36357;
count__36295 = G__36358;
i__36296 = G__36359;
continue;
} else {
var role = cljs.core.first.call(null,seq__36293__$1);
var temp__4657__auto___36360__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36360__$2)){
var spec_36361 = temp__4657__auto___36360__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36361));
} else {
}

var G__36362 = cljs.core.next.call(null,seq__36293__$1);
var G__36363 = null;
var G__36364 = (0);
var G__36365 = (0);
seq__36293 = G__36362;
chunk__36294 = G__36363;
count__36295 = G__36364;
i__36296 = G__36365;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1521204780703
