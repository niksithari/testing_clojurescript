// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35477 = arguments.length;
var i__29159__auto___35478 = (0);
while(true){
if((i__29159__auto___35478 < len__29158__auto___35477)){
args__29165__auto__.push((arguments[i__29159__auto___35478]));

var G__35479 = (i__29159__auto___35478 + (1));
i__29159__auto___35478 = G__35479;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35476){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35476));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35481 = arguments.length;
var i__29159__auto___35482 = (0);
while(true){
if((i__29159__auto___35482 < len__29158__auto___35481)){
args__29165__auto__.push((arguments[i__29159__auto___35482]));

var G__35483 = (i__29159__auto___35482 + (1));
i__29159__auto___35482 = G__35483;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35480){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35480));
});

var g_QMARK__35484 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_35485 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35484){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__35484))
,null));
var mkg_35486 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35484,g_35485){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__35484,g_35485))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35484,g_35485,mkg_35486){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35484).call(null,x);
});})(g_QMARK__35484,g_35485,mkg_35486))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35484,g_35485,mkg_35486){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35486).call(null,gfn);
});})(g_QMARK__35484,g_35485,mkg_35486))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35484,g_35485,mkg_35486){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35485).call(null,generator);
});})(g_QMARK__35484,g_35485,mkg_35486))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29251__auto___35506 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29251__auto___35506){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35507 = arguments.length;
var i__29159__auto___35508 = (0);
while(true){
if((i__29159__auto___35508 < len__29158__auto___35507)){
args__29165__auto__.push((arguments[i__29159__auto___35508]));

var G__35509 = (i__29159__auto___35508 + (1));
i__29159__auto___35508 = G__35509;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35506))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35506){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35506),args);
});})(g__29251__auto___35506))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29251__auto___35506){
return (function (seq35487){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35487));
});})(g__29251__auto___35506))
;


var g__29251__auto___35510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29251__auto___35510){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35511 = arguments.length;
var i__29159__auto___35512 = (0);
while(true){
if((i__29159__auto___35512 < len__29158__auto___35511)){
args__29165__auto__.push((arguments[i__29159__auto___35512]));

var G__35513 = (i__29159__auto___35512 + (1));
i__29159__auto___35512 = G__35513;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35510))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35510),args);
});})(g__29251__auto___35510))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29251__auto___35510){
return (function (seq35488){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35488));
});})(g__29251__auto___35510))
;


var g__29251__auto___35514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29251__auto___35514){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35515 = arguments.length;
var i__29159__auto___35516 = (0);
while(true){
if((i__29159__auto___35516 < len__29158__auto___35515)){
args__29165__auto__.push((arguments[i__29159__auto___35516]));

var G__35517 = (i__29159__auto___35516 + (1));
i__29159__auto___35516 = G__35517;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35514))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35514),args);
});})(g__29251__auto___35514))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29251__auto___35514){
return (function (seq35489){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35489));
});})(g__29251__auto___35514))
;


var g__29251__auto___35518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29251__auto___35518){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35519 = arguments.length;
var i__29159__auto___35520 = (0);
while(true){
if((i__29159__auto___35520 < len__29158__auto___35519)){
args__29165__auto__.push((arguments[i__29159__auto___35520]));

var G__35521 = (i__29159__auto___35520 + (1));
i__29159__auto___35520 = G__35521;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35518))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35518),args);
});})(g__29251__auto___35518))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29251__auto___35518){
return (function (seq35490){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35490));
});})(g__29251__auto___35518))
;


var g__29251__auto___35522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29251__auto___35522){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35523 = arguments.length;
var i__29159__auto___35524 = (0);
while(true){
if((i__29159__auto___35524 < len__29158__auto___35523)){
args__29165__auto__.push((arguments[i__29159__auto___35524]));

var G__35525 = (i__29159__auto___35524 + (1));
i__29159__auto___35524 = G__35525;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35522))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35522),args);
});})(g__29251__auto___35522))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29251__auto___35522){
return (function (seq35491){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35491));
});})(g__29251__auto___35522))
;


var g__29251__auto___35526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29251__auto___35526){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35527 = arguments.length;
var i__29159__auto___35528 = (0);
while(true){
if((i__29159__auto___35528 < len__29158__auto___35527)){
args__29165__auto__.push((arguments[i__29159__auto___35528]));

var G__35529 = (i__29159__auto___35528 + (1));
i__29159__auto___35528 = G__35529;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35526))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35526),args);
});})(g__29251__auto___35526))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29251__auto___35526){
return (function (seq35492){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35492));
});})(g__29251__auto___35526))
;


var g__29251__auto___35530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29251__auto___35530){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35531 = arguments.length;
var i__29159__auto___35532 = (0);
while(true){
if((i__29159__auto___35532 < len__29158__auto___35531)){
args__29165__auto__.push((arguments[i__29159__auto___35532]));

var G__35533 = (i__29159__auto___35532 + (1));
i__29159__auto___35532 = G__35533;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35530))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35530),args);
});})(g__29251__auto___35530))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29251__auto___35530){
return (function (seq35493){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35493));
});})(g__29251__auto___35530))
;


var g__29251__auto___35534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29251__auto___35534){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35535 = arguments.length;
var i__29159__auto___35536 = (0);
while(true){
if((i__29159__auto___35536 < len__29158__auto___35535)){
args__29165__auto__.push((arguments[i__29159__auto___35536]));

var G__35537 = (i__29159__auto___35536 + (1));
i__29159__auto___35536 = G__35537;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35534))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35534),args);
});})(g__29251__auto___35534))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29251__auto___35534){
return (function (seq35494){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35494));
});})(g__29251__auto___35534))
;


var g__29251__auto___35538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29251__auto___35538){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35539 = arguments.length;
var i__29159__auto___35540 = (0);
while(true){
if((i__29159__auto___35540 < len__29158__auto___35539)){
args__29165__auto__.push((arguments[i__29159__auto___35540]));

var G__35541 = (i__29159__auto___35540 + (1));
i__29159__auto___35540 = G__35541;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35538))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35538),args);
});})(g__29251__auto___35538))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29251__auto___35538){
return (function (seq35495){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35495));
});})(g__29251__auto___35538))
;


var g__29251__auto___35542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29251__auto___35542){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35543 = arguments.length;
var i__29159__auto___35544 = (0);
while(true){
if((i__29159__auto___35544 < len__29158__auto___35543)){
args__29165__auto__.push((arguments[i__29159__auto___35544]));

var G__35545 = (i__29159__auto___35544 + (1));
i__29159__auto___35544 = G__35545;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35542))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35542),args);
});})(g__29251__auto___35542))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29251__auto___35542){
return (function (seq35496){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35496));
});})(g__29251__auto___35542))
;


var g__29251__auto___35546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29251__auto___35546){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35547 = arguments.length;
var i__29159__auto___35548 = (0);
while(true){
if((i__29159__auto___35548 < len__29158__auto___35547)){
args__29165__auto__.push((arguments[i__29159__auto___35548]));

var G__35549 = (i__29159__auto___35548 + (1));
i__29159__auto___35548 = G__35549;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35546))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35546),args);
});})(g__29251__auto___35546))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29251__auto___35546){
return (function (seq35497){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35497));
});})(g__29251__auto___35546))
;


var g__29251__auto___35550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29251__auto___35550){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35551 = arguments.length;
var i__29159__auto___35552 = (0);
while(true){
if((i__29159__auto___35552 < len__29158__auto___35551)){
args__29165__auto__.push((arguments[i__29159__auto___35552]));

var G__35553 = (i__29159__auto___35552 + (1));
i__29159__auto___35552 = G__35553;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35550))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35550),args);
});})(g__29251__auto___35550))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29251__auto___35550){
return (function (seq35498){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35498));
});})(g__29251__auto___35550))
;


var g__29251__auto___35554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29251__auto___35554){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35555 = arguments.length;
var i__29159__auto___35556 = (0);
while(true){
if((i__29159__auto___35556 < len__29158__auto___35555)){
args__29165__auto__.push((arguments[i__29159__auto___35556]));

var G__35557 = (i__29159__auto___35556 + (1));
i__29159__auto___35556 = G__35557;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35554))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35554),args);
});})(g__29251__auto___35554))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29251__auto___35554){
return (function (seq35499){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35499));
});})(g__29251__auto___35554))
;


var g__29251__auto___35558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29251__auto___35558){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35559 = arguments.length;
var i__29159__auto___35560 = (0);
while(true){
if((i__29159__auto___35560 < len__29158__auto___35559)){
args__29165__auto__.push((arguments[i__29159__auto___35560]));

var G__35561 = (i__29159__auto___35560 + (1));
i__29159__auto___35560 = G__35561;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35558))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35558),args);
});})(g__29251__auto___35558))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29251__auto___35558){
return (function (seq35500){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35500));
});})(g__29251__auto___35558))
;


var g__29251__auto___35562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29251__auto___35562){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35563 = arguments.length;
var i__29159__auto___35564 = (0);
while(true){
if((i__29159__auto___35564 < len__29158__auto___35563)){
args__29165__auto__.push((arguments[i__29159__auto___35564]));

var G__35565 = (i__29159__auto___35564 + (1));
i__29159__auto___35564 = G__35565;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35562))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35562),args);
});})(g__29251__auto___35562))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29251__auto___35562){
return (function (seq35501){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35501));
});})(g__29251__auto___35562))
;


var g__29251__auto___35566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29251__auto___35566){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35567 = arguments.length;
var i__29159__auto___35568 = (0);
while(true){
if((i__29159__auto___35568 < len__29158__auto___35567)){
args__29165__auto__.push((arguments[i__29159__auto___35568]));

var G__35569 = (i__29159__auto___35568 + (1));
i__29159__auto___35568 = G__35569;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35566))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35566),args);
});})(g__29251__auto___35566))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29251__auto___35566){
return (function (seq35502){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35502));
});})(g__29251__auto___35566))
;


var g__29251__auto___35570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29251__auto___35570){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35571 = arguments.length;
var i__29159__auto___35572 = (0);
while(true){
if((i__29159__auto___35572 < len__29158__auto___35571)){
args__29165__auto__.push((arguments[i__29159__auto___35572]));

var G__35573 = (i__29159__auto___35572 + (1));
i__29159__auto___35572 = G__35573;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35570))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35570),args);
});})(g__29251__auto___35570))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29251__auto___35570){
return (function (seq35503){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35503));
});})(g__29251__auto___35570))
;


var g__29251__auto___35574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29251__auto___35574){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35575 = arguments.length;
var i__29159__auto___35576 = (0);
while(true){
if((i__29159__auto___35576 < len__29158__auto___35575)){
args__29165__auto__.push((arguments[i__29159__auto___35576]));

var G__35577 = (i__29159__auto___35576 + (1));
i__29159__auto___35576 = G__35577;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35574))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35574),args);
});})(g__29251__auto___35574))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29251__auto___35574){
return (function (seq35504){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35504));
});})(g__29251__auto___35574))
;


var g__29251__auto___35578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29251__auto___35578){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35579 = arguments.length;
var i__29159__auto___35580 = (0);
while(true){
if((i__29159__auto___35580 < len__29158__auto___35579)){
args__29165__auto__.push((arguments[i__29159__auto___35580]));

var G__35581 = (i__29159__auto___35580 + (1));
i__29159__auto___35580 = G__35581;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29251__auto___35578))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29251__auto___35578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29251__auto___35578),args);
});})(g__29251__auto___35578))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29251__auto___35578){
return (function (seq35505){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35505));
});})(g__29251__auto___35578))
;

var g__29264__auto___35603 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29264__auto___35603){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35604 = arguments.length;
var i__29159__auto___35605 = (0);
while(true){
if((i__29159__auto___35605 < len__29158__auto___35604)){
args__29165__auto__.push((arguments[i__29159__auto___35605]));

var G__35606 = (i__29159__auto___35605 + (1));
i__29159__auto___35605 = G__35606;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35603))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35603){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35603);
});})(g__29264__auto___35603))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29264__auto___35603){
return (function (seq35582){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35582));
});})(g__29264__auto___35603))
;


var g__29264__auto___35607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29264__auto___35607){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35608 = arguments.length;
var i__29159__auto___35609 = (0);
while(true){
if((i__29159__auto___35609 < len__29158__auto___35608)){
args__29165__auto__.push((arguments[i__29159__auto___35609]));

var G__35610 = (i__29159__auto___35609 + (1));
i__29159__auto___35609 = G__35610;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35607))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35607){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35607);
});})(g__29264__auto___35607))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29264__auto___35607){
return (function (seq35583){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35583));
});})(g__29264__auto___35607))
;


var g__29264__auto___35611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29264__auto___35611){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35612 = arguments.length;
var i__29159__auto___35613 = (0);
while(true){
if((i__29159__auto___35613 < len__29158__auto___35612)){
args__29165__auto__.push((arguments[i__29159__auto___35613]));

var G__35614 = (i__29159__auto___35613 + (1));
i__29159__auto___35613 = G__35614;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35611))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35611){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35611);
});})(g__29264__auto___35611))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29264__auto___35611){
return (function (seq35584){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35584));
});})(g__29264__auto___35611))
;


var g__29264__auto___35615 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29264__auto___35615){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35616 = arguments.length;
var i__29159__auto___35617 = (0);
while(true){
if((i__29159__auto___35617 < len__29158__auto___35616)){
args__29165__auto__.push((arguments[i__29159__auto___35617]));

var G__35618 = (i__29159__auto___35617 + (1));
i__29159__auto___35617 = G__35618;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35615))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35615){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35615);
});})(g__29264__auto___35615))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29264__auto___35615){
return (function (seq35585){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35585));
});})(g__29264__auto___35615))
;


var g__29264__auto___35619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29264__auto___35619){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35620 = arguments.length;
var i__29159__auto___35621 = (0);
while(true){
if((i__29159__auto___35621 < len__29158__auto___35620)){
args__29165__auto__.push((arguments[i__29159__auto___35621]));

var G__35622 = (i__29159__auto___35621 + (1));
i__29159__auto___35621 = G__35622;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35619))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35619){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35619);
});})(g__29264__auto___35619))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29264__auto___35619){
return (function (seq35586){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35586));
});})(g__29264__auto___35619))
;


var g__29264__auto___35623 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29264__auto___35623){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35624 = arguments.length;
var i__29159__auto___35625 = (0);
while(true){
if((i__29159__auto___35625 < len__29158__auto___35624)){
args__29165__auto__.push((arguments[i__29159__auto___35625]));

var G__35626 = (i__29159__auto___35625 + (1));
i__29159__auto___35625 = G__35626;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35623))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35623){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35623);
});})(g__29264__auto___35623))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29264__auto___35623){
return (function (seq35587){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35587));
});})(g__29264__auto___35623))
;


var g__29264__auto___35627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29264__auto___35627){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35628 = arguments.length;
var i__29159__auto___35629 = (0);
while(true){
if((i__29159__auto___35629 < len__29158__auto___35628)){
args__29165__auto__.push((arguments[i__29159__auto___35629]));

var G__35630 = (i__29159__auto___35629 + (1));
i__29159__auto___35629 = G__35630;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35627))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35627){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35627);
});})(g__29264__auto___35627))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29264__auto___35627){
return (function (seq35588){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35588));
});})(g__29264__auto___35627))
;


var g__29264__auto___35631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29264__auto___35631){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35632 = arguments.length;
var i__29159__auto___35633 = (0);
while(true){
if((i__29159__auto___35633 < len__29158__auto___35632)){
args__29165__auto__.push((arguments[i__29159__auto___35633]));

var G__35634 = (i__29159__auto___35633 + (1));
i__29159__auto___35633 = G__35634;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35631))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35631){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35631);
});})(g__29264__auto___35631))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29264__auto___35631){
return (function (seq35589){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35589));
});})(g__29264__auto___35631))
;


var g__29264__auto___35635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29264__auto___35635){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35636 = arguments.length;
var i__29159__auto___35637 = (0);
while(true){
if((i__29159__auto___35637 < len__29158__auto___35636)){
args__29165__auto__.push((arguments[i__29159__auto___35637]));

var G__35638 = (i__29159__auto___35637 + (1));
i__29159__auto___35637 = G__35638;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35635))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35635){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35635);
});})(g__29264__auto___35635))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29264__auto___35635){
return (function (seq35590){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35590));
});})(g__29264__auto___35635))
;


var g__29264__auto___35639 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29264__auto___35639){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35640 = arguments.length;
var i__29159__auto___35641 = (0);
while(true){
if((i__29159__auto___35641 < len__29158__auto___35640)){
args__29165__auto__.push((arguments[i__29159__auto___35641]));

var G__35642 = (i__29159__auto___35641 + (1));
i__29159__auto___35641 = G__35642;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35639))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35639){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35639);
});})(g__29264__auto___35639))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29264__auto___35639){
return (function (seq35591){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35591));
});})(g__29264__auto___35639))
;


var g__29264__auto___35643 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29264__auto___35643){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35644 = arguments.length;
var i__29159__auto___35645 = (0);
while(true){
if((i__29159__auto___35645 < len__29158__auto___35644)){
args__29165__auto__.push((arguments[i__29159__auto___35645]));

var G__35646 = (i__29159__auto___35645 + (1));
i__29159__auto___35645 = G__35646;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35643))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35643){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35643);
});})(g__29264__auto___35643))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29264__auto___35643){
return (function (seq35592){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35592));
});})(g__29264__auto___35643))
;


var g__29264__auto___35647 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29264__auto___35647){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35648 = arguments.length;
var i__29159__auto___35649 = (0);
while(true){
if((i__29159__auto___35649 < len__29158__auto___35648)){
args__29165__auto__.push((arguments[i__29159__auto___35649]));

var G__35650 = (i__29159__auto___35649 + (1));
i__29159__auto___35649 = G__35650;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35647))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35647){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35647);
});})(g__29264__auto___35647))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29264__auto___35647){
return (function (seq35593){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35593));
});})(g__29264__auto___35647))
;


var g__29264__auto___35651 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29264__auto___35651){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35652 = arguments.length;
var i__29159__auto___35653 = (0);
while(true){
if((i__29159__auto___35653 < len__29158__auto___35652)){
args__29165__auto__.push((arguments[i__29159__auto___35653]));

var G__35654 = (i__29159__auto___35653 + (1));
i__29159__auto___35653 = G__35654;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35651))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35651){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35651);
});})(g__29264__auto___35651))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29264__auto___35651){
return (function (seq35594){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35594));
});})(g__29264__auto___35651))
;


var g__29264__auto___35655 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29264__auto___35655){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35656 = arguments.length;
var i__29159__auto___35657 = (0);
while(true){
if((i__29159__auto___35657 < len__29158__auto___35656)){
args__29165__auto__.push((arguments[i__29159__auto___35657]));

var G__35658 = (i__29159__auto___35657 + (1));
i__29159__auto___35657 = G__35658;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35655))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35655){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35655);
});})(g__29264__auto___35655))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29264__auto___35655){
return (function (seq35595){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35595));
});})(g__29264__auto___35655))
;


var g__29264__auto___35659 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29264__auto___35659){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35660 = arguments.length;
var i__29159__auto___35661 = (0);
while(true){
if((i__29159__auto___35661 < len__29158__auto___35660)){
args__29165__auto__.push((arguments[i__29159__auto___35661]));

var G__35662 = (i__29159__auto___35661 + (1));
i__29159__auto___35661 = G__35662;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35659))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35659){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35659);
});})(g__29264__auto___35659))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29264__auto___35659){
return (function (seq35596){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35596));
});})(g__29264__auto___35659))
;


var g__29264__auto___35663 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29264__auto___35663){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35664 = arguments.length;
var i__29159__auto___35665 = (0);
while(true){
if((i__29159__auto___35665 < len__29158__auto___35664)){
args__29165__auto__.push((arguments[i__29159__auto___35665]));

var G__35666 = (i__29159__auto___35665 + (1));
i__29159__auto___35665 = G__35666;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35663))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35663){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35663);
});})(g__29264__auto___35663))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29264__auto___35663){
return (function (seq35597){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35597));
});})(g__29264__auto___35663))
;


var g__29264__auto___35667 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29264__auto___35667){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35668 = arguments.length;
var i__29159__auto___35669 = (0);
while(true){
if((i__29159__auto___35669 < len__29158__auto___35668)){
args__29165__auto__.push((arguments[i__29159__auto___35669]));

var G__35670 = (i__29159__auto___35669 + (1));
i__29159__auto___35669 = G__35670;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35667))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35667){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35667);
});})(g__29264__auto___35667))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29264__auto___35667){
return (function (seq35598){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35598));
});})(g__29264__auto___35667))
;


var g__29264__auto___35671 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29264__auto___35671){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35672 = arguments.length;
var i__29159__auto___35673 = (0);
while(true){
if((i__29159__auto___35673 < len__29158__auto___35672)){
args__29165__auto__.push((arguments[i__29159__auto___35673]));

var G__35674 = (i__29159__auto___35673 + (1));
i__29159__auto___35673 = G__35674;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35671))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35671){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35671);
});})(g__29264__auto___35671))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29264__auto___35671){
return (function (seq35599){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35599));
});})(g__29264__auto___35671))
;


var g__29264__auto___35675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29264__auto___35675){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35676 = arguments.length;
var i__29159__auto___35677 = (0);
while(true){
if((i__29159__auto___35677 < len__29158__auto___35676)){
args__29165__auto__.push((arguments[i__29159__auto___35677]));

var G__35678 = (i__29159__auto___35677 + (1));
i__29159__auto___35677 = G__35678;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35675))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35675){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35675);
});})(g__29264__auto___35675))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29264__auto___35675){
return (function (seq35600){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35600));
});})(g__29264__auto___35675))
;


var g__29264__auto___35679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29264__auto___35679){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35680 = arguments.length;
var i__29159__auto___35681 = (0);
while(true){
if((i__29159__auto___35681 < len__29158__auto___35680)){
args__29165__auto__.push((arguments[i__29159__auto___35681]));

var G__35682 = (i__29159__auto___35681 + (1));
i__29159__auto___35681 = G__35682;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35679))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35679){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35679);
});})(g__29264__auto___35679))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29264__auto___35679){
return (function (seq35601){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35601));
});})(g__29264__auto___35679))
;


var g__29264__auto___35683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29264__auto___35683){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35684 = arguments.length;
var i__29159__auto___35685 = (0);
while(true){
if((i__29159__auto___35685 < len__29158__auto___35684)){
args__29165__auto__.push((arguments[i__29159__auto___35685]));

var G__35686 = (i__29159__auto___35685 + (1));
i__29159__auto___35685 = G__35686;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});})(g__29264__auto___35683))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29264__auto___35683){
return (function (args){
return cljs.core.deref.call(null,g__29264__auto___35683);
});})(g__29264__auto___35683))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29264__auto___35683){
return (function (seq35602){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35602));
});})(g__29264__auto___35683))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35689 = arguments.length;
var i__29159__auto___35690 = (0);
while(true){
if((i__29159__auto___35690 < len__29158__auto___35689)){
args__29165__auto__.push((arguments[i__29159__auto___35690]));

var G__35691 = (i__29159__auto___35690 + (1));
i__29159__auto___35690 = G__35691;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35687_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35687_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35688){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35688));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35692_SHARP_){
return (new Date(p1__35692_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1521204778938
