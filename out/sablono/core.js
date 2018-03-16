// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__30536__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__30533 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__30534 = cljs.core.seq.call(null,vec__30533);
var first__30535 = cljs.core.first.call(null,seq__30534);
var seq__30534__$1 = cljs.core.next.call(null,seq__30534);
var tag = first__30535;
var body = seq__30534__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__30536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30537__i = 0, G__30537__a = new Array(arguments.length -  0);
while (G__30537__i < G__30537__a.length) {G__30537__a[G__30537__i] = arguments[G__30537__i + 0]; ++G__30537__i;}
  args = new cljs.core.IndexedSeq(G__30537__a,0,null);
} 
return G__30536__delegate.call(this,args);};
G__30536.cljs$lang$maxFixedArity = 0;
G__30536.cljs$lang$applyTo = (function (arglist__30538){
var args = cljs.core.seq(arglist__30538);
return G__30536__delegate(args);
});
G__30536.cljs$core$IFn$_invoke$arity$variadic = G__30536__delegate;
return G__30536;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__28797__auto__ = (function sablono$core$update_arglists_$_iter__30539(s__30540){
return (new cljs.core.LazySeq(null,(function (){
var s__30540__$1 = s__30540;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30540__$1);
if(temp__4657__auto__){
var s__30540__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30540__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__30540__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__30542 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__30541 = (0);
while(true){
if((i__30541 < size__28796__auto__)){
var args = cljs.core._nth.call(null,c__28795__auto__,i__30541);
cljs.core.chunk_append.call(null,b__30542,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__30543 = (i__30541 + (1));
i__30541 = G__30543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30542),sablono$core$update_arglists_$_iter__30539.call(null,cljs.core.chunk_rest.call(null,s__30540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30542),null);
}
} else {
var args = cljs.core.first.call(null,s__30540__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__30539.call(null,cljs.core.rest.call(null,s__30540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30549 = arguments.length;
var i__29159__auto___30550 = (0);
while(true){
if((i__29159__auto___30550 < len__29158__auto___30549)){
args__29165__auto__.push((arguments[i__29159__auto___30550]));

var G__30551 = (i__29159__auto___30550 + (1));
i__29159__auto___30550 = G__30551;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__28797__auto__ = (function sablono$core$iter__30545(s__30546){
return (new cljs.core.LazySeq(null,(function (){
var s__30546__$1 = s__30546;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30546__$1);
if(temp__4657__auto__){
var s__30546__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30546__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__30546__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__30548 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__30547 = (0);
while(true){
if((i__30547 < size__28796__auto__)){
var style = cljs.core._nth.call(null,c__28795__auto__,i__30547);
cljs.core.chunk_append.call(null,b__30548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__30552 = (i__30547 + (1));
i__30547 = G__30552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30548),sablono$core$iter__30545.call(null,cljs.core.chunk_rest.call(null,s__30546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30548),null);
}
} else {
var style = cljs.core.first.call(null,s__30546__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__30545.call(null,cljs.core.rest.call(null,s__30546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq30544){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30544));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to30553 = (function sablono$core$link_to30553(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30556 = arguments.length;
var i__29159__auto___30557 = (0);
while(true){
if((i__29159__auto___30557 < len__29158__auto___30556)){
args__29165__auto__.push((arguments[i__29159__auto___30557]));

var G__30558 = (i__29159__auto___30557 + (1));
i__29159__auto___30557 = G__30558;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to30553.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

sablono.core.link_to30553.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to30553.cljs$lang$maxFixedArity = (1);

sablono.core.link_to30553.cljs$lang$applyTo = (function (seq30554){
var G__30555 = cljs.core.first.call(null,seq30554);
var seq30554__$1 = cljs.core.next.call(null,seq30554);
return sablono.core.link_to30553.cljs$core$IFn$_invoke$arity$variadic(G__30555,seq30554__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30553);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to30559 = (function sablono$core$mail_to30559(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30566 = arguments.length;
var i__29159__auto___30567 = (0);
while(true){
if((i__29159__auto___30567 < len__29158__auto___30566)){
args__29165__auto__.push((arguments[i__29159__auto___30567]));

var G__30568 = (i__29159__auto___30567 + (1));
i__29159__auto___30567 = G__30568;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to30559.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

sablono.core.mail_to30559.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__30562){
var vec__30563 = p__30562;
var content = cljs.core.nth.call(null,vec__30563,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__27989__auto__ = content;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to30559.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to30559.cljs$lang$applyTo = (function (seq30560){
var G__30561 = cljs.core.first.call(null,seq30560);
var seq30560__$1 = cljs.core.next.call(null,seq30560);
return sablono.core.mail_to30559.cljs$core$IFn$_invoke$arity$variadic(G__30561,seq30560__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30559);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list30569 = (function sablono$core$unordered_list30569(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__28797__auto__ = (function sablono$core$unordered_list30569_$_iter__30570(s__30571){
return (new cljs.core.LazySeq(null,(function (){
var s__30571__$1 = s__30571;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30571__$1);
if(temp__4657__auto__){
var s__30571__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30571__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__30571__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__30573 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__30572 = (0);
while(true){
if((i__30572 < size__28796__auto__)){
var x = cljs.core._nth.call(null,c__28795__auto__,i__30572);
cljs.core.chunk_append.call(null,b__30573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30574 = (i__30572 + (1));
i__30572 = G__30574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30573),sablono$core$unordered_list30569_$_iter__30570.call(null,cljs.core.chunk_rest.call(null,s__30571__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30573),null);
}
} else {
var x = cljs.core.first.call(null,s__30571__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list30569_$_iter__30570.call(null,cljs.core.rest.call(null,s__30571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30569);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list30575 = (function sablono$core$ordered_list30575(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__28797__auto__ = (function sablono$core$ordered_list30575_$_iter__30576(s__30577){
return (new cljs.core.LazySeq(null,(function (){
var s__30577__$1 = s__30577;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30577__$1);
if(temp__4657__auto__){
var s__30577__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30577__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__30577__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__30579 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__30578 = (0);
while(true){
if((i__30578 < size__28796__auto__)){
var x = cljs.core._nth.call(null,c__28795__auto__,i__30578);
cljs.core.chunk_append.call(null,b__30579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30580 = (i__30578 + (1));
i__30578 = G__30580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30579),sablono$core$ordered_list30575_$_iter__30576.call(null,cljs.core.chunk_rest.call(null,s__30577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30579),null);
}
} else {
var x = cljs.core.first.call(null,s__30577__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list30575_$_iter__30576.call(null,cljs.core.rest.call(null,s__30577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30575);
/**
 * Create an image element.
 */
sablono.core.image30581 = (function sablono$core$image30581(var_args){
var G__30583 = arguments.length;
switch (G__30583) {
case 1:
return sablono.core.image30581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image30581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image30581.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image30581.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image30581.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30581);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__30585_SHARP_,p2__30586_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30585_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30586_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__30587_SHARP_,p2__30588_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30587_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30588_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27989__auto__ = value;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field30589 = (function sablono$core$color_field30589(var_args){
var G__30591 = arguments.length;
switch (G__30591) {
case 1:
return sablono.core.color_field30589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field30589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field30589.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.color_field30589.call(null,name__30523__auto__,null);
});

sablono.core.color_field30589.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.color_field30589.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30589);

/**
 * Creates a date input field.
 */
sablono.core.date_field30592 = (function sablono$core$date_field30592(var_args){
var G__30594 = arguments.length;
switch (G__30594) {
case 1:
return sablono.core.date_field30592.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field30592.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field30592.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.date_field30592.call(null,name__30523__auto__,null);
});

sablono.core.date_field30592.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.date_field30592.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30592);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field30595 = (function sablono$core$datetime_field30595(var_args){
var G__30597 = arguments.length;
switch (G__30597) {
case 1:
return sablono.core.datetime_field30595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field30595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field30595.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.datetime_field30595.call(null,name__30523__auto__,null);
});

sablono.core.datetime_field30595.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.datetime_field30595.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30595);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field30598 = (function sablono$core$datetime_local_field30598(var_args){
var G__30600 = arguments.length;
switch (G__30600) {
case 1:
return sablono.core.datetime_local_field30598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field30598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field30598.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.datetime_local_field30598.call(null,name__30523__auto__,null);
});

sablono.core.datetime_local_field30598.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.datetime_local_field30598.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30598);

/**
 * Creates a email input field.
 */
sablono.core.email_field30601 = (function sablono$core$email_field30601(var_args){
var G__30603 = arguments.length;
switch (G__30603) {
case 1:
return sablono.core.email_field30601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field30601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field30601.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.email_field30601.call(null,name__30523__auto__,null);
});

sablono.core.email_field30601.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.email_field30601.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30601);

/**
 * Creates a file input field.
 */
sablono.core.file_field30604 = (function sablono$core$file_field30604(var_args){
var G__30606 = arguments.length;
switch (G__30606) {
case 1:
return sablono.core.file_field30604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field30604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field30604.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.file_field30604.call(null,name__30523__auto__,null);
});

sablono.core.file_field30604.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.file_field30604.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30604);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field30607 = (function sablono$core$hidden_field30607(var_args){
var G__30609 = arguments.length;
switch (G__30609) {
case 1:
return sablono.core.hidden_field30607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field30607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field30607.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.hidden_field30607.call(null,name__30523__auto__,null);
});

sablono.core.hidden_field30607.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.hidden_field30607.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30607);

/**
 * Creates a month input field.
 */
sablono.core.month_field30610 = (function sablono$core$month_field30610(var_args){
var G__30612 = arguments.length;
switch (G__30612) {
case 1:
return sablono.core.month_field30610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field30610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field30610.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.month_field30610.call(null,name__30523__auto__,null);
});

sablono.core.month_field30610.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.month_field30610.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30610);

/**
 * Creates a number input field.
 */
sablono.core.number_field30613 = (function sablono$core$number_field30613(var_args){
var G__30615 = arguments.length;
switch (G__30615) {
case 1:
return sablono.core.number_field30613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field30613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field30613.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.number_field30613.call(null,name__30523__auto__,null);
});

sablono.core.number_field30613.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.number_field30613.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30613);

/**
 * Creates a password input field.
 */
sablono.core.password_field30616 = (function sablono$core$password_field30616(var_args){
var G__30618 = arguments.length;
switch (G__30618) {
case 1:
return sablono.core.password_field30616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field30616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field30616.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.password_field30616.call(null,name__30523__auto__,null);
});

sablono.core.password_field30616.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.password_field30616.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30616);

/**
 * Creates a range input field.
 */
sablono.core.range_field30619 = (function sablono$core$range_field30619(var_args){
var G__30621 = arguments.length;
switch (G__30621) {
case 1:
return sablono.core.range_field30619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field30619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field30619.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.range_field30619.call(null,name__30523__auto__,null);
});

sablono.core.range_field30619.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.range_field30619.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30619);

/**
 * Creates a search input field.
 */
sablono.core.search_field30622 = (function sablono$core$search_field30622(var_args){
var G__30624 = arguments.length;
switch (G__30624) {
case 1:
return sablono.core.search_field30622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field30622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field30622.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.search_field30622.call(null,name__30523__auto__,null);
});

sablono.core.search_field30622.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.search_field30622.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30622);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field30625 = (function sablono$core$tel_field30625(var_args){
var G__30627 = arguments.length;
switch (G__30627) {
case 1:
return sablono.core.tel_field30625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field30625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field30625.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.tel_field30625.call(null,name__30523__auto__,null);
});

sablono.core.tel_field30625.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.tel_field30625.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30625);

/**
 * Creates a text input field.
 */
sablono.core.text_field30628 = (function sablono$core$text_field30628(var_args){
var G__30630 = arguments.length;
switch (G__30630) {
case 1:
return sablono.core.text_field30628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field30628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field30628.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.text_field30628.call(null,name__30523__auto__,null);
});

sablono.core.text_field30628.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.text_field30628.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30628);

/**
 * Creates a time input field.
 */
sablono.core.time_field30631 = (function sablono$core$time_field30631(var_args){
var G__30633 = arguments.length;
switch (G__30633) {
case 1:
return sablono.core.time_field30631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field30631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field30631.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.time_field30631.call(null,name__30523__auto__,null);
});

sablono.core.time_field30631.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.time_field30631.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30631);

/**
 * Creates a url input field.
 */
sablono.core.url_field30634 = (function sablono$core$url_field30634(var_args){
var G__30636 = arguments.length;
switch (G__30636) {
case 1:
return sablono.core.url_field30634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field30634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field30634.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.url_field30634.call(null,name__30523__auto__,null);
});

sablono.core.url_field30634.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.url_field30634.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30634);

/**
 * Creates a week input field.
 */
sablono.core.week_field30637 = (function sablono$core$week_field30637(var_args){
var G__30639 = arguments.length;
switch (G__30639) {
case 1:
return sablono.core.week_field30637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field30637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field30637.cljs$core$IFn$_invoke$arity$1 = (function (name__30523__auto__){
return sablono.core.week_field30637.call(null,name__30523__auto__,null);
});

sablono.core.week_field30637.cljs$core$IFn$_invoke$arity$2 = (function (name__30523__auto__,value__30524__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__30523__auto__,value__30524__auto__);
});

sablono.core.week_field30637.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30637);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box30657 = (function sablono$core$check_box30657(var_args){
var G__30659 = arguments.length;
switch (G__30659) {
case 1:
return sablono.core.check_box30657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box30657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box30657.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box30657.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box30657.call(null,name,null);
});

sablono.core.check_box30657.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box30657.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box30657.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27989__auto__ = value;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box30657.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30657);
/**
 * Creates a radio button.
 */
sablono.core.radio_button30661 = (function sablono$core$radio_button30661(var_args){
var G__30663 = arguments.length;
switch (G__30663) {
case 1:
return sablono.core.radio_button30661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button30661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button30661.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button30661.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button30661.call(null,group,null);
});

sablono.core.radio_button30661.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button30661.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button30661.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27989__auto__ = value;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button30661.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30661);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options30665 = (function sablono$core$select_options30665(coll){
var iter__28797__auto__ = (function sablono$core$select_options30665_$_iter__30666(s__30667){
return (new cljs.core.LazySeq(null,(function (){
var s__30667__$1 = s__30667;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30667__$1);
if(temp__4657__auto__){
var s__30667__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30667__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__30667__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__30669 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__30668 = (0);
while(true){
if((i__30668 < size__28796__auto__)){
var x = cljs.core._nth.call(null,c__28795__auto__,i__30668);
cljs.core.chunk_append.call(null,b__30669,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30670 = x;
var text = cljs.core.nth.call(null,vec__30670,(0),null);
var val = cljs.core.nth.call(null,vec__30670,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30670,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options30665.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__30676 = (i__30668 + (1));
i__30668 = G__30676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30669),sablono$core$select_options30665_$_iter__30666.call(null,cljs.core.chunk_rest.call(null,s__30667__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30669),null);
}
} else {
var x = cljs.core.first.call(null,s__30667__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30673 = x;
var text = cljs.core.nth.call(null,vec__30673,(0),null);
var val = cljs.core.nth.call(null,vec__30673,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30673,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options30665.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options30665_$_iter__30666.call(null,cljs.core.rest.call(null,s__30667__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30665);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down30677 = (function sablono$core$drop_down30677(var_args){
var G__30679 = arguments.length;
switch (G__30679) {
case 2:
return sablono.core.drop_down30677.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down30677.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down30677.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down30677.call(null,name,options,null);
});

sablono.core.drop_down30677.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down30677.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30677);
/**
 * Creates a text area element.
 */
sablono.core.text_area30681 = (function sablono$core$text_area30681(var_args){
var G__30683 = arguments.length;
switch (G__30683) {
case 1:
return sablono.core.text_area30681.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area30681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area30681.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area30681.call(null,name,null);
});

sablono.core.text_area30681.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27989__auto__ = value;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area30681.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30681);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label30685 = (function sablono$core$label30685(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30685);
/**
 * Creates a submit button.
 */
sablono.core.submit_button30686 = (function sablono$core$submit_button30686(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30686);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button30687 = (function sablono$core$reset_button30687(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30687);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to30688 = (function sablono$core$form_to30688(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30695 = arguments.length;
var i__29159__auto___30696 = (0);
while(true){
if((i__29159__auto___30696 < len__29158__auto___30695)){
args__29165__auto__.push((arguments[i__29159__auto___30696]));

var G__30697 = (i__29159__auto___30696 + (1));
i__29159__auto___30696 = G__30697;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to30688.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

sablono.core.form_to30688.cljs$core$IFn$_invoke$arity$variadic = (function (p__30691,body){
var vec__30692 = p__30691;
var method = cljs.core.nth.call(null,vec__30692,(0),null);
var action = cljs.core.nth.call(null,vec__30692,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to30688.cljs$lang$maxFixedArity = (1);

sablono.core.form_to30688.cljs$lang$applyTo = (function (seq30689){
var G__30690 = cljs.core.first.call(null,seq30689);
var seq30689__$1 = cljs.core.next.call(null,seq30689);
return sablono.core.form_to30688.cljs$core$IFn$_invoke$arity$variadic(G__30690,seq30689__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30688);

//# sourceMappingURL=core.js.map?rel=1521204771708
