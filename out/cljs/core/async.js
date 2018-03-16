// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31716 = arguments.length;
switch (G__31716) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31717 = (function (f,blockable,meta31718){
this.f = f;
this.blockable = blockable;
this.meta31718 = meta31718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31719,meta31718__$1){
var self__ = this;
var _31719__$1 = this;
return (new cljs.core.async.t_cljs$core$async31717(self__.f,self__.blockable,meta31718__$1));
});

cljs.core.async.t_cljs$core$async31717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31719){
var self__ = this;
var _31719__$1 = this;
return self__.meta31718;
});

cljs.core.async.t_cljs$core$async31717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31718","meta31718",-2130886452,null)], null);
});

cljs.core.async.t_cljs$core$async31717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31717";

cljs.core.async.t_cljs$core$async31717.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31717");
});

cljs.core.async.__GT_t_cljs$core$async31717 = (function cljs$core$async$__GT_t_cljs$core$async31717(f__$1,blockable__$1,meta31718){
return (new cljs.core.async.t_cljs$core$async31717(f__$1,blockable__$1,meta31718));
});

}

return (new cljs.core.async.t_cljs$core$async31717(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31723 = arguments.length;
switch (G__31723) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31726 = arguments.length;
switch (G__31726) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31729 = arguments.length;
switch (G__31729) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31731 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31731);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31731,ret){
return (function (){
return fn1.call(null,val_31731);
});})(val_31731,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31733 = arguments.length;
switch (G__31733) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28934__auto___31735 = n;
var x_31736 = (0);
while(true){
if((x_31736 < n__28934__auto___31735)){
(a[x_31736] = (0));

var G__31737 = (x_31736 + (1));
x_31736 = G__31737;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31738 = (i + (1));
i = G__31738;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31739 = (function (flag,meta31740){
this.flag = flag;
this.meta31740 = meta31740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31741,meta31740__$1){
var self__ = this;
var _31741__$1 = this;
return (new cljs.core.async.t_cljs$core$async31739(self__.flag,meta31740__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31741){
var self__ = this;
var _31741__$1 = this;
return self__.meta31740;
});})(flag))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31739.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31740","meta31740",2112704458,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31739";

cljs.core.async.t_cljs$core$async31739.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31739");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31739 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31739(flag__$1,meta31740){
return (new cljs.core.async.t_cljs$core$async31739(flag__$1,meta31740));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31739(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31742 = (function (flag,cb,meta31743){
this.flag = flag;
this.cb = cb;
this.meta31743 = meta31743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31744,meta31743__$1){
var self__ = this;
var _31744__$1 = this;
return (new cljs.core.async.t_cljs$core$async31742(self__.flag,self__.cb,meta31743__$1));
});

cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31744){
var self__ = this;
var _31744__$1 = this;
return self__.meta31743;
});

cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31743","meta31743",357375986,null)], null);
});

cljs.core.async.t_cljs$core$async31742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31742";

cljs.core.async.t_cljs$core$async31742.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31742");
});

cljs.core.async.__GT_t_cljs$core$async31742 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31742(flag__$1,cb__$1,meta31743){
return (new cljs.core.async.t_cljs$core$async31742(flag__$1,cb__$1,meta31743));
});

}

return (new cljs.core.async.t_cljs$core$async31742(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31745_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31745_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31746_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31746_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27989__auto__ = wport;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31747 = (i + (1));
i = G__31747;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27989__auto__ = ret;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27977__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27977__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27977__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___31753 = arguments.length;
var i__29159__auto___31754 = (0);
while(true){
if((i__29159__auto___31754 < len__29158__auto___31753)){
args__29165__auto__.push((arguments[i__29159__auto___31754]));

var G__31755 = (i__29159__auto___31754 + (1));
i__29159__auto___31754 = G__31755;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31750){
var map__31751 = p__31750;
var map__31751__$1 = ((((!((map__31751 == null)))?((((map__31751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31751):map__31751);
var opts = map__31751__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31748){
var G__31749 = cljs.core.first.call(null,seq31748);
var seq31748__$1 = cljs.core.next.call(null,seq31748);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31749,seq31748__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31757 = arguments.length;
switch (G__31757) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31670__auto___31803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___31803){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___31803){
return (function (state_31781){
var state_val_31782 = (state_31781[(1)]);
if((state_val_31782 === (7))){
var inst_31777 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31783_31804 = state_31781__$1;
(statearr_31783_31804[(2)] = inst_31777);

(statearr_31783_31804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (1))){
var state_31781__$1 = state_31781;
var statearr_31784_31805 = state_31781__$1;
(statearr_31784_31805[(2)] = null);

(statearr_31784_31805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (4))){
var inst_31760 = (state_31781[(7)]);
var inst_31760__$1 = (state_31781[(2)]);
var inst_31761 = (inst_31760__$1 == null);
var state_31781__$1 = (function (){var statearr_31785 = state_31781;
(statearr_31785[(7)] = inst_31760__$1);

return statearr_31785;
})();
if(cljs.core.truth_(inst_31761)){
var statearr_31786_31806 = state_31781__$1;
(statearr_31786_31806[(1)] = (5));

} else {
var statearr_31787_31807 = state_31781__$1;
(statearr_31787_31807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (13))){
var state_31781__$1 = state_31781;
var statearr_31788_31808 = state_31781__$1;
(statearr_31788_31808[(2)] = null);

(statearr_31788_31808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (6))){
var inst_31760 = (state_31781[(7)]);
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31781__$1,(11),to,inst_31760);
} else {
if((state_val_31782 === (3))){
var inst_31779 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31781__$1,inst_31779);
} else {
if((state_val_31782 === (12))){
var state_31781__$1 = state_31781;
var statearr_31789_31809 = state_31781__$1;
(statearr_31789_31809[(2)] = null);

(statearr_31789_31809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (2))){
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31781__$1,(4),from);
} else {
if((state_val_31782 === (11))){
var inst_31770 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
if(cljs.core.truth_(inst_31770)){
var statearr_31790_31810 = state_31781__$1;
(statearr_31790_31810[(1)] = (12));

} else {
var statearr_31791_31811 = state_31781__$1;
(statearr_31791_31811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (9))){
var state_31781__$1 = state_31781;
var statearr_31792_31812 = state_31781__$1;
(statearr_31792_31812[(2)] = null);

(statearr_31792_31812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (5))){
var state_31781__$1 = state_31781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31793_31813 = state_31781__$1;
(statearr_31793_31813[(1)] = (8));

} else {
var statearr_31794_31814 = state_31781__$1;
(statearr_31794_31814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (14))){
var inst_31775 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31795_31815 = state_31781__$1;
(statearr_31795_31815[(2)] = inst_31775);

(statearr_31795_31815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (10))){
var inst_31767 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31796_31816 = state_31781__$1;
(statearr_31796_31816[(2)] = inst_31767);

(statearr_31796_31816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (8))){
var inst_31764 = cljs.core.async.close_BANG_.call(null,to);
var state_31781__$1 = state_31781;
var statearr_31797_31817 = state_31781__$1;
(statearr_31797_31817[(2)] = inst_31764);

(statearr_31797_31817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___31803))
;
return ((function (switch__31582__auto__,c__31670__auto___31803){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_31781){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_31781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e31799){if((e31799 instanceof Object)){
var ex__31586__auto__ = e31799;
var statearr_31800_31818 = state_31781;
(statearr_31800_31818[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_31781;
state_31781 = G__31819;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_31781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_31781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___31803))
})();
var state__31672__auto__ = (function (){var statearr_31801 = f__31671__auto__.call(null);
(statearr_31801[(6)] = c__31670__auto___31803);

return statearr_31801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___31803))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31820){
var vec__31821 = p__31820;
var v = cljs.core.nth.call(null,vec__31821,(0),null);
var p = cljs.core.nth.call(null,vec__31821,(1),null);
var job = vec__31821;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31670__auto___31992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___31992,res,vec__31821,v,p,job,jobs,results){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___31992,res,vec__31821,v,p,job,jobs,results){
return (function (state_31828){
var state_val_31829 = (state_31828[(1)]);
if((state_val_31829 === (1))){
var state_31828__$1 = state_31828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31828__$1,(2),res,v);
} else {
if((state_val_31829 === (2))){
var inst_31825 = (state_31828[(2)]);
var inst_31826 = cljs.core.async.close_BANG_.call(null,res);
var state_31828__$1 = (function (){var statearr_31830 = state_31828;
(statearr_31830[(7)] = inst_31825);

return statearr_31830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31828__$1,inst_31826);
} else {
return null;
}
}
});})(c__31670__auto___31992,res,vec__31821,v,p,job,jobs,results))
;
return ((function (switch__31582__auto__,c__31670__auto___31992,res,vec__31821,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_31831 = [null,null,null,null,null,null,null,null];
(statearr_31831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_31831[(1)] = (1));

return statearr_31831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_31828){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_31828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e31832){if((e31832 instanceof Object)){
var ex__31586__auto__ = e31832;
var statearr_31833_31993 = state_31828;
(statearr_31833_31993[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31994 = state_31828;
state_31828 = G__31994;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_31828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_31828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___31992,res,vec__31821,v,p,job,jobs,results))
})();
var state__31672__auto__ = (function (){var statearr_31834 = f__31671__auto__.call(null);
(statearr_31834[(6)] = c__31670__auto___31992);

return statearr_31834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___31992,res,vec__31821,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31835){
var vec__31836 = p__31835;
var v = cljs.core.nth.call(null,vec__31836,(0),null);
var p = cljs.core.nth.call(null,vec__31836,(1),null);
var job = vec__31836;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28934__auto___31995 = n;
var __31996 = (0);
while(true){
if((__31996 < n__28934__auto___31995)){
var G__31839_31997 = type;
var G__31839_31998__$1 = (((G__31839_31997 instanceof cljs.core.Keyword))?G__31839_31997.fqn:null);
switch (G__31839_31998__$1) {
case "compute":
var c__31670__auto___32000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31996,c__31670__auto___32000,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (__31996,c__31670__auto___32000,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async){
return (function (state_31852){
var state_val_31853 = (state_31852[(1)]);
if((state_val_31853 === (1))){
var state_31852__$1 = state_31852;
var statearr_31854_32001 = state_31852__$1;
(statearr_31854_32001[(2)] = null);

(statearr_31854_32001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (2))){
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31852__$1,(4),jobs);
} else {
if((state_val_31853 === (3))){
var inst_31850 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31852__$1,inst_31850);
} else {
if((state_val_31853 === (4))){
var inst_31842 = (state_31852[(2)]);
var inst_31843 = process.call(null,inst_31842);
var state_31852__$1 = state_31852;
if(cljs.core.truth_(inst_31843)){
var statearr_31855_32002 = state_31852__$1;
(statearr_31855_32002[(1)] = (5));

} else {
var statearr_31856_32003 = state_31852__$1;
(statearr_31856_32003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (5))){
var state_31852__$1 = state_31852;
var statearr_31857_32004 = state_31852__$1;
(statearr_31857_32004[(2)] = null);

(statearr_31857_32004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (6))){
var state_31852__$1 = state_31852;
var statearr_31858_32005 = state_31852__$1;
(statearr_31858_32005[(2)] = null);

(statearr_31858_32005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (7))){
var inst_31848 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31859_32006 = state_31852__$1;
(statearr_31859_32006[(2)] = inst_31848);

(statearr_31859_32006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31996,c__31670__auto___32000,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async))
;
return ((function (__31996,switch__31582__auto__,c__31670__auto___32000,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_31860 = [null,null,null,null,null,null,null];
(statearr_31860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_31860[(1)] = (1));

return statearr_31860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_31852){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_31852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e31861){if((e31861 instanceof Object)){
var ex__31586__auto__ = e31861;
var statearr_31862_32007 = state_31852;
(statearr_31862_32007[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32008 = state_31852;
state_31852 = G__32008;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_31852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_31852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(__31996,switch__31582__auto__,c__31670__auto___32000,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async))
})();
var state__31672__auto__ = (function (){var statearr_31863 = f__31671__auto__.call(null);
(statearr_31863[(6)] = c__31670__auto___32000);

return statearr_31863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(__31996,c__31670__auto___32000,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async))
);


break;
case "async":
var c__31670__auto___32009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31996,c__31670__auto___32009,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (__31996,c__31670__auto___32009,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async){
return (function (state_31876){
var state_val_31877 = (state_31876[(1)]);
if((state_val_31877 === (1))){
var state_31876__$1 = state_31876;
var statearr_31878_32010 = state_31876__$1;
(statearr_31878_32010[(2)] = null);

(statearr_31878_32010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (2))){
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31876__$1,(4),jobs);
} else {
if((state_val_31877 === (3))){
var inst_31874 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31876__$1,inst_31874);
} else {
if((state_val_31877 === (4))){
var inst_31866 = (state_31876[(2)]);
var inst_31867 = async.call(null,inst_31866);
var state_31876__$1 = state_31876;
if(cljs.core.truth_(inst_31867)){
var statearr_31879_32011 = state_31876__$1;
(statearr_31879_32011[(1)] = (5));

} else {
var statearr_31880_32012 = state_31876__$1;
(statearr_31880_32012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (5))){
var state_31876__$1 = state_31876;
var statearr_31881_32013 = state_31876__$1;
(statearr_31881_32013[(2)] = null);

(statearr_31881_32013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (6))){
var state_31876__$1 = state_31876;
var statearr_31882_32014 = state_31876__$1;
(statearr_31882_32014[(2)] = null);

(statearr_31882_32014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (7))){
var inst_31872 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31883_32015 = state_31876__$1;
(statearr_31883_32015[(2)] = inst_31872);

(statearr_31883_32015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31996,c__31670__auto___32009,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async))
;
return ((function (__31996,switch__31582__auto__,c__31670__auto___32009,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_31884 = [null,null,null,null,null,null,null];
(statearr_31884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_31884[(1)] = (1));

return statearr_31884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_31876){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_31876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e31885){if((e31885 instanceof Object)){
var ex__31586__auto__ = e31885;
var statearr_31886_32016 = state_31876;
(statearr_31886_32016[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32017 = state_31876;
state_31876 = G__32017;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_31876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_31876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(__31996,switch__31582__auto__,c__31670__auto___32009,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async))
})();
var state__31672__auto__ = (function (){var statearr_31887 = f__31671__auto__.call(null);
(statearr_31887[(6)] = c__31670__auto___32009);

return statearr_31887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(__31996,c__31670__auto___32009,G__31839_31997,G__31839_31998__$1,n__28934__auto___31995,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31839_31998__$1)].join('')));

}

var G__32018 = (__31996 + (1));
__31996 = G__32018;
continue;
} else {
}
break;
}

var c__31670__auto___32019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___32019,jobs,results,process,async){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___32019,jobs,results,process,async){
return (function (state_31909){
var state_val_31910 = (state_31909[(1)]);
if((state_val_31910 === (1))){
var state_31909__$1 = state_31909;
var statearr_31911_32020 = state_31909__$1;
(statearr_31911_32020[(2)] = null);

(statearr_31911_32020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (2))){
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31909__$1,(4),from);
} else {
if((state_val_31910 === (3))){
var inst_31907 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31909__$1,inst_31907);
} else {
if((state_val_31910 === (4))){
var inst_31890 = (state_31909[(7)]);
var inst_31890__$1 = (state_31909[(2)]);
var inst_31891 = (inst_31890__$1 == null);
var state_31909__$1 = (function (){var statearr_31912 = state_31909;
(statearr_31912[(7)] = inst_31890__$1);

return statearr_31912;
})();
if(cljs.core.truth_(inst_31891)){
var statearr_31913_32021 = state_31909__$1;
(statearr_31913_32021[(1)] = (5));

} else {
var statearr_31914_32022 = state_31909__$1;
(statearr_31914_32022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (5))){
var inst_31893 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31909__$1 = state_31909;
var statearr_31915_32023 = state_31909__$1;
(statearr_31915_32023[(2)] = inst_31893);

(statearr_31915_32023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (6))){
var inst_31890 = (state_31909[(7)]);
var inst_31895 = (state_31909[(8)]);
var inst_31895__$1 = cljs.core.async.chan.call(null,(1));
var inst_31896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31897 = [inst_31890,inst_31895__$1];
var inst_31898 = (new cljs.core.PersistentVector(null,2,(5),inst_31896,inst_31897,null));
var state_31909__$1 = (function (){var statearr_31916 = state_31909;
(statearr_31916[(8)] = inst_31895__$1);

return statearr_31916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31909__$1,(8),jobs,inst_31898);
} else {
if((state_val_31910 === (7))){
var inst_31905 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31917_32024 = state_31909__$1;
(statearr_31917_32024[(2)] = inst_31905);

(statearr_31917_32024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (8))){
var inst_31895 = (state_31909[(8)]);
var inst_31900 = (state_31909[(2)]);
var state_31909__$1 = (function (){var statearr_31918 = state_31909;
(statearr_31918[(9)] = inst_31900);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31909__$1,(9),results,inst_31895);
} else {
if((state_val_31910 === (9))){
var inst_31902 = (state_31909[(2)]);
var state_31909__$1 = (function (){var statearr_31919 = state_31909;
(statearr_31919[(10)] = inst_31902);

return statearr_31919;
})();
var statearr_31920_32025 = state_31909__$1;
(statearr_31920_32025[(2)] = null);

(statearr_31920_32025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___32019,jobs,results,process,async))
;
return ((function (switch__31582__auto__,c__31670__auto___32019,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_31921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_31921[(1)] = (1));

return statearr_31921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_31909){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_31909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e31922){if((e31922 instanceof Object)){
var ex__31586__auto__ = e31922;
var statearr_31923_32026 = state_31909;
(statearr_31923_32026[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32027 = state_31909;
state_31909 = G__32027;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_31909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_31909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___32019,jobs,results,process,async))
})();
var state__31672__auto__ = (function (){var statearr_31924 = f__31671__auto__.call(null);
(statearr_31924[(6)] = c__31670__auto___32019);

return statearr_31924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___32019,jobs,results,process,async))
);


var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__,jobs,results,process,async){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__,jobs,results,process,async){
return (function (state_31962){
var state_val_31963 = (state_31962[(1)]);
if((state_val_31963 === (7))){
var inst_31958 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
var statearr_31964_32028 = state_31962__$1;
(statearr_31964_32028[(2)] = inst_31958);

(statearr_31964_32028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (20))){
var state_31962__$1 = state_31962;
var statearr_31965_32029 = state_31962__$1;
(statearr_31965_32029[(2)] = null);

(statearr_31965_32029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (1))){
var state_31962__$1 = state_31962;
var statearr_31966_32030 = state_31962__$1;
(statearr_31966_32030[(2)] = null);

(statearr_31966_32030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (4))){
var inst_31927 = (state_31962[(7)]);
var inst_31927__$1 = (state_31962[(2)]);
var inst_31928 = (inst_31927__$1 == null);
var state_31962__$1 = (function (){var statearr_31967 = state_31962;
(statearr_31967[(7)] = inst_31927__$1);

return statearr_31967;
})();
if(cljs.core.truth_(inst_31928)){
var statearr_31968_32031 = state_31962__$1;
(statearr_31968_32031[(1)] = (5));

} else {
var statearr_31969_32032 = state_31962__$1;
(statearr_31969_32032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (15))){
var inst_31940 = (state_31962[(8)]);
var state_31962__$1 = state_31962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31962__$1,(18),to,inst_31940);
} else {
if((state_val_31963 === (21))){
var inst_31953 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
var statearr_31970_32033 = state_31962__$1;
(statearr_31970_32033[(2)] = inst_31953);

(statearr_31970_32033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (13))){
var inst_31955 = (state_31962[(2)]);
var state_31962__$1 = (function (){var statearr_31971 = state_31962;
(statearr_31971[(9)] = inst_31955);

return statearr_31971;
})();
var statearr_31972_32034 = state_31962__$1;
(statearr_31972_32034[(2)] = null);

(statearr_31972_32034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (6))){
var inst_31927 = (state_31962[(7)]);
var state_31962__$1 = state_31962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31962__$1,(11),inst_31927);
} else {
if((state_val_31963 === (17))){
var inst_31948 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
if(cljs.core.truth_(inst_31948)){
var statearr_31973_32035 = state_31962__$1;
(statearr_31973_32035[(1)] = (19));

} else {
var statearr_31974_32036 = state_31962__$1;
(statearr_31974_32036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (3))){
var inst_31960 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31962__$1,inst_31960);
} else {
if((state_val_31963 === (12))){
var inst_31937 = (state_31962[(10)]);
var state_31962__$1 = state_31962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31962__$1,(14),inst_31937);
} else {
if((state_val_31963 === (2))){
var state_31962__$1 = state_31962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31962__$1,(4),results);
} else {
if((state_val_31963 === (19))){
var state_31962__$1 = state_31962;
var statearr_31975_32037 = state_31962__$1;
(statearr_31975_32037[(2)] = null);

(statearr_31975_32037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (11))){
var inst_31937 = (state_31962[(2)]);
var state_31962__$1 = (function (){var statearr_31976 = state_31962;
(statearr_31976[(10)] = inst_31937);

return statearr_31976;
})();
var statearr_31977_32038 = state_31962__$1;
(statearr_31977_32038[(2)] = null);

(statearr_31977_32038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (9))){
var state_31962__$1 = state_31962;
var statearr_31978_32039 = state_31962__$1;
(statearr_31978_32039[(2)] = null);

(statearr_31978_32039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (5))){
var state_31962__$1 = state_31962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31979_32040 = state_31962__$1;
(statearr_31979_32040[(1)] = (8));

} else {
var statearr_31980_32041 = state_31962__$1;
(statearr_31980_32041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (14))){
var inst_31940 = (state_31962[(8)]);
var inst_31942 = (state_31962[(11)]);
var inst_31940__$1 = (state_31962[(2)]);
var inst_31941 = (inst_31940__$1 == null);
var inst_31942__$1 = cljs.core.not.call(null,inst_31941);
var state_31962__$1 = (function (){var statearr_31981 = state_31962;
(statearr_31981[(8)] = inst_31940__$1);

(statearr_31981[(11)] = inst_31942__$1);

return statearr_31981;
})();
if(inst_31942__$1){
var statearr_31982_32042 = state_31962__$1;
(statearr_31982_32042[(1)] = (15));

} else {
var statearr_31983_32043 = state_31962__$1;
(statearr_31983_32043[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (16))){
var inst_31942 = (state_31962[(11)]);
var state_31962__$1 = state_31962;
var statearr_31984_32044 = state_31962__$1;
(statearr_31984_32044[(2)] = inst_31942);

(statearr_31984_32044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (10))){
var inst_31934 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
var statearr_31985_32045 = state_31962__$1;
(statearr_31985_32045[(2)] = inst_31934);

(statearr_31985_32045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (18))){
var inst_31945 = (state_31962[(2)]);
var state_31962__$1 = state_31962;
var statearr_31986_32046 = state_31962__$1;
(statearr_31986_32046[(2)] = inst_31945);

(statearr_31986_32046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31963 === (8))){
var inst_31931 = cljs.core.async.close_BANG_.call(null,to);
var state_31962__$1 = state_31962;
var statearr_31987_32047 = state_31962__$1;
(statearr_31987_32047[(2)] = inst_31931);

(statearr_31987_32047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto__,jobs,results,process,async))
;
return ((function (switch__31582__auto__,c__31670__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_31988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_31988[(1)] = (1));

return statearr_31988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_31962){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_31962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e31989){if((e31989 instanceof Object)){
var ex__31586__auto__ = e31989;
var statearr_31990_32048 = state_31962;
(statearr_31990_32048[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32049 = state_31962;
state_31962 = G__32049;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_31962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_31962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__,jobs,results,process,async))
})();
var state__31672__auto__ = (function (){var statearr_31991 = f__31671__auto__.call(null);
(statearr_31991[(6)] = c__31670__auto__);

return statearr_31991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__,jobs,results,process,async))
);

return c__31670__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32051 = arguments.length;
switch (G__32051) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32054 = arguments.length;
switch (G__32054) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32057 = arguments.length;
switch (G__32057) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31670__auto___32106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___32106,tc,fc){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___32106,tc,fc){
return (function (state_32083){
var state_val_32084 = (state_32083[(1)]);
if((state_val_32084 === (7))){
var inst_32079 = (state_32083[(2)]);
var state_32083__$1 = state_32083;
var statearr_32085_32107 = state_32083__$1;
(statearr_32085_32107[(2)] = inst_32079);

(statearr_32085_32107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (1))){
var state_32083__$1 = state_32083;
var statearr_32086_32108 = state_32083__$1;
(statearr_32086_32108[(2)] = null);

(statearr_32086_32108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (4))){
var inst_32060 = (state_32083[(7)]);
var inst_32060__$1 = (state_32083[(2)]);
var inst_32061 = (inst_32060__$1 == null);
var state_32083__$1 = (function (){var statearr_32087 = state_32083;
(statearr_32087[(7)] = inst_32060__$1);

return statearr_32087;
})();
if(cljs.core.truth_(inst_32061)){
var statearr_32088_32109 = state_32083__$1;
(statearr_32088_32109[(1)] = (5));

} else {
var statearr_32089_32110 = state_32083__$1;
(statearr_32089_32110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (13))){
var state_32083__$1 = state_32083;
var statearr_32090_32111 = state_32083__$1;
(statearr_32090_32111[(2)] = null);

(statearr_32090_32111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (6))){
var inst_32060 = (state_32083[(7)]);
var inst_32066 = p.call(null,inst_32060);
var state_32083__$1 = state_32083;
if(cljs.core.truth_(inst_32066)){
var statearr_32091_32112 = state_32083__$1;
(statearr_32091_32112[(1)] = (9));

} else {
var statearr_32092_32113 = state_32083__$1;
(statearr_32092_32113[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (3))){
var inst_32081 = (state_32083[(2)]);
var state_32083__$1 = state_32083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32083__$1,inst_32081);
} else {
if((state_val_32084 === (12))){
var state_32083__$1 = state_32083;
var statearr_32093_32114 = state_32083__$1;
(statearr_32093_32114[(2)] = null);

(statearr_32093_32114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (2))){
var state_32083__$1 = state_32083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32083__$1,(4),ch);
} else {
if((state_val_32084 === (11))){
var inst_32060 = (state_32083[(7)]);
var inst_32070 = (state_32083[(2)]);
var state_32083__$1 = state_32083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32083__$1,(8),inst_32070,inst_32060);
} else {
if((state_val_32084 === (9))){
var state_32083__$1 = state_32083;
var statearr_32094_32115 = state_32083__$1;
(statearr_32094_32115[(2)] = tc);

(statearr_32094_32115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (5))){
var inst_32063 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32064 = cljs.core.async.close_BANG_.call(null,fc);
var state_32083__$1 = (function (){var statearr_32095 = state_32083;
(statearr_32095[(8)] = inst_32063);

return statearr_32095;
})();
var statearr_32096_32116 = state_32083__$1;
(statearr_32096_32116[(2)] = inst_32064);

(statearr_32096_32116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (14))){
var inst_32077 = (state_32083[(2)]);
var state_32083__$1 = state_32083;
var statearr_32097_32117 = state_32083__$1;
(statearr_32097_32117[(2)] = inst_32077);

(statearr_32097_32117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (10))){
var state_32083__$1 = state_32083;
var statearr_32098_32118 = state_32083__$1;
(statearr_32098_32118[(2)] = fc);

(statearr_32098_32118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32084 === (8))){
var inst_32072 = (state_32083[(2)]);
var state_32083__$1 = state_32083;
if(cljs.core.truth_(inst_32072)){
var statearr_32099_32119 = state_32083__$1;
(statearr_32099_32119[(1)] = (12));

} else {
var statearr_32100_32120 = state_32083__$1;
(statearr_32100_32120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___32106,tc,fc))
;
return ((function (switch__31582__auto__,c__31670__auto___32106,tc,fc){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_32101 = [null,null,null,null,null,null,null,null,null];
(statearr_32101[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_32101[(1)] = (1));

return statearr_32101;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_32083){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_32083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e32102){if((e32102 instanceof Object)){
var ex__31586__auto__ = e32102;
var statearr_32103_32121 = state_32083;
(statearr_32103_32121[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32122 = state_32083;
state_32083 = G__32122;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_32083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_32083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___32106,tc,fc))
})();
var state__31672__auto__ = (function (){var statearr_32104 = f__31671__auto__.call(null);
(statearr_32104[(6)] = c__31670__auto___32106);

return statearr_32104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___32106,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__){
return (function (state_32143){
var state_val_32144 = (state_32143[(1)]);
if((state_val_32144 === (7))){
var inst_32139 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32145_32163 = state_32143__$1;
(statearr_32145_32163[(2)] = inst_32139);

(statearr_32145_32163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (1))){
var inst_32123 = init;
var state_32143__$1 = (function (){var statearr_32146 = state_32143;
(statearr_32146[(7)] = inst_32123);

return statearr_32146;
})();
var statearr_32147_32164 = state_32143__$1;
(statearr_32147_32164[(2)] = null);

(statearr_32147_32164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (4))){
var inst_32126 = (state_32143[(8)]);
var inst_32126__$1 = (state_32143[(2)]);
var inst_32127 = (inst_32126__$1 == null);
var state_32143__$1 = (function (){var statearr_32148 = state_32143;
(statearr_32148[(8)] = inst_32126__$1);

return statearr_32148;
})();
if(cljs.core.truth_(inst_32127)){
var statearr_32149_32165 = state_32143__$1;
(statearr_32149_32165[(1)] = (5));

} else {
var statearr_32150_32166 = state_32143__$1;
(statearr_32150_32166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (6))){
var inst_32126 = (state_32143[(8)]);
var inst_32130 = (state_32143[(9)]);
var inst_32123 = (state_32143[(7)]);
var inst_32130__$1 = f.call(null,inst_32123,inst_32126);
var inst_32131 = cljs.core.reduced_QMARK_.call(null,inst_32130__$1);
var state_32143__$1 = (function (){var statearr_32151 = state_32143;
(statearr_32151[(9)] = inst_32130__$1);

return statearr_32151;
})();
if(inst_32131){
var statearr_32152_32167 = state_32143__$1;
(statearr_32152_32167[(1)] = (8));

} else {
var statearr_32153_32168 = state_32143__$1;
(statearr_32153_32168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (3))){
var inst_32141 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32143__$1,inst_32141);
} else {
if((state_val_32144 === (2))){
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32143__$1,(4),ch);
} else {
if((state_val_32144 === (9))){
var inst_32130 = (state_32143[(9)]);
var inst_32123 = inst_32130;
var state_32143__$1 = (function (){var statearr_32154 = state_32143;
(statearr_32154[(7)] = inst_32123);

return statearr_32154;
})();
var statearr_32155_32169 = state_32143__$1;
(statearr_32155_32169[(2)] = null);

(statearr_32155_32169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (5))){
var inst_32123 = (state_32143[(7)]);
var state_32143__$1 = state_32143;
var statearr_32156_32170 = state_32143__$1;
(statearr_32156_32170[(2)] = inst_32123);

(statearr_32156_32170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (10))){
var inst_32137 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32157_32171 = state_32143__$1;
(statearr_32157_32171[(2)] = inst_32137);

(statearr_32157_32171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (8))){
var inst_32130 = (state_32143[(9)]);
var inst_32133 = cljs.core.deref.call(null,inst_32130);
var state_32143__$1 = state_32143;
var statearr_32158_32172 = state_32143__$1;
(statearr_32158_32172[(2)] = inst_32133);

(statearr_32158_32172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto__))
;
return ((function (switch__31582__auto__,c__31670__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31583__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31583__auto____0 = (function (){
var statearr_32159 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32159[(0)] = cljs$core$async$reduce_$_state_machine__31583__auto__);

(statearr_32159[(1)] = (1));

return statearr_32159;
});
var cljs$core$async$reduce_$_state_machine__31583__auto____1 = (function (state_32143){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_32143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e32160){if((e32160 instanceof Object)){
var ex__31586__auto__ = e32160;
var statearr_32161_32173 = state_32143;
(statearr_32161_32173[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32174 = state_32143;
state_32143 = G__32174;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31583__auto__ = function(state_32143){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31583__auto____1.call(this,state_32143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31583__auto____0;
cljs$core$async$reduce_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31583__auto____1;
return cljs$core$async$reduce_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__))
})();
var state__31672__auto__ = (function (){var statearr_32162 = f__31671__auto__.call(null);
(statearr_32162[(6)] = c__31670__auto__);

return statearr_32162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__))
);

return c__31670__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__,f__$1){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__,f__$1){
return (function (state_32180){
var state_val_32181 = (state_32180[(1)]);
if((state_val_32181 === (1))){
var inst_32175 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32180__$1,(2),inst_32175);
} else {
if((state_val_32181 === (2))){
var inst_32177 = (state_32180[(2)]);
var inst_32178 = f__$1.call(null,inst_32177);
var state_32180__$1 = state_32180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32180__$1,inst_32178);
} else {
return null;
}
}
});})(c__31670__auto__,f__$1))
;
return ((function (switch__31582__auto__,c__31670__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31583__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31583__auto____0 = (function (){
var statearr_32182 = [null,null,null,null,null,null,null];
(statearr_32182[(0)] = cljs$core$async$transduce_$_state_machine__31583__auto__);

(statearr_32182[(1)] = (1));

return statearr_32182;
});
var cljs$core$async$transduce_$_state_machine__31583__auto____1 = (function (state_32180){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_32180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e32183){if((e32183 instanceof Object)){
var ex__31586__auto__ = e32183;
var statearr_32184_32186 = state_32180;
(statearr_32184_32186[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32187 = state_32180;
state_32180 = G__32187;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31583__auto__ = function(state_32180){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31583__auto____1.call(this,state_32180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31583__auto____0;
cljs$core$async$transduce_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31583__auto____1;
return cljs$core$async$transduce_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__,f__$1))
})();
var state__31672__auto__ = (function (){var statearr_32185 = f__31671__auto__.call(null);
(statearr_32185[(6)] = c__31670__auto__);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__,f__$1))
);

return c__31670__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32189 = arguments.length;
switch (G__32189) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__){
return (function (state_32214){
var state_val_32215 = (state_32214[(1)]);
if((state_val_32215 === (7))){
var inst_32196 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32216_32237 = state_32214__$1;
(statearr_32216_32237[(2)] = inst_32196);

(statearr_32216_32237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (1))){
var inst_32190 = cljs.core.seq.call(null,coll);
var inst_32191 = inst_32190;
var state_32214__$1 = (function (){var statearr_32217 = state_32214;
(statearr_32217[(7)] = inst_32191);

return statearr_32217;
})();
var statearr_32218_32238 = state_32214__$1;
(statearr_32218_32238[(2)] = null);

(statearr_32218_32238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (4))){
var inst_32191 = (state_32214[(7)]);
var inst_32194 = cljs.core.first.call(null,inst_32191);
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32214__$1,(7),ch,inst_32194);
} else {
if((state_val_32215 === (13))){
var inst_32208 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32219_32239 = state_32214__$1;
(statearr_32219_32239[(2)] = inst_32208);

(statearr_32219_32239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (6))){
var inst_32199 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
if(cljs.core.truth_(inst_32199)){
var statearr_32220_32240 = state_32214__$1;
(statearr_32220_32240[(1)] = (8));

} else {
var statearr_32221_32241 = state_32214__$1;
(statearr_32221_32241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (3))){
var inst_32212 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32214__$1,inst_32212);
} else {
if((state_val_32215 === (12))){
var state_32214__$1 = state_32214;
var statearr_32222_32242 = state_32214__$1;
(statearr_32222_32242[(2)] = null);

(statearr_32222_32242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (2))){
var inst_32191 = (state_32214[(7)]);
var state_32214__$1 = state_32214;
if(cljs.core.truth_(inst_32191)){
var statearr_32223_32243 = state_32214__$1;
(statearr_32223_32243[(1)] = (4));

} else {
var statearr_32224_32244 = state_32214__$1;
(statearr_32224_32244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (11))){
var inst_32205 = cljs.core.async.close_BANG_.call(null,ch);
var state_32214__$1 = state_32214;
var statearr_32225_32245 = state_32214__$1;
(statearr_32225_32245[(2)] = inst_32205);

(statearr_32225_32245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (9))){
var state_32214__$1 = state_32214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32226_32246 = state_32214__$1;
(statearr_32226_32246[(1)] = (11));

} else {
var statearr_32227_32247 = state_32214__$1;
(statearr_32227_32247[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (5))){
var inst_32191 = (state_32214[(7)]);
var state_32214__$1 = state_32214;
var statearr_32228_32248 = state_32214__$1;
(statearr_32228_32248[(2)] = inst_32191);

(statearr_32228_32248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (10))){
var inst_32210 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32229_32249 = state_32214__$1;
(statearr_32229_32249[(2)] = inst_32210);

(statearr_32229_32249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (8))){
var inst_32191 = (state_32214[(7)]);
var inst_32201 = cljs.core.next.call(null,inst_32191);
var inst_32191__$1 = inst_32201;
var state_32214__$1 = (function (){var statearr_32230 = state_32214;
(statearr_32230[(7)] = inst_32191__$1);

return statearr_32230;
})();
var statearr_32231_32250 = state_32214__$1;
(statearr_32231_32250[(2)] = null);

(statearr_32231_32250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto__))
;
return ((function (switch__31582__auto__,c__31670__auto__){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_32232 = [null,null,null,null,null,null,null,null];
(statearr_32232[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_32232[(1)] = (1));

return statearr_32232;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_32214){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_32214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e32233){if((e32233 instanceof Object)){
var ex__31586__auto__ = e32233;
var statearr_32234_32251 = state_32214;
(statearr_32234_32251[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32252 = state_32214;
state_32214 = G__32252;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_32214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_32214);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__))
})();
var state__31672__auto__ = (function (){var statearr_32235 = f__31671__auto__.call(null);
(statearr_32235[(6)] = c__31670__auto__);

return statearr_32235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__))
);

return c__31670__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28672__auto__ = (((_ == null))?null:_);
var m__28673__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,_);
} else {
var m__28673__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32253 = (function (ch,cs,meta32254){
this.ch = ch;
this.cs = cs;
this.meta32254 = meta32254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32255,meta32254__$1){
var self__ = this;
var _32255__$1 = this;
return (new cljs.core.async.t_cljs$core$async32253(self__.ch,self__.cs,meta32254__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32255){
var self__ = this;
var _32255__$1 = this;
return self__.meta32254;
});})(cs))
;

cljs.core.async.t_cljs$core$async32253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32253.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32253.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32253.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32253.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32253.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32254","meta32254",-1663629717,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32253";

cljs.core.async.t_cljs$core$async32253.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32253");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32253 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32253(ch__$1,cs__$1,meta32254){
return (new cljs.core.async.t_cljs$core$async32253(ch__$1,cs__$1,meta32254));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32253(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31670__auto___32475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___32475,cs,m,dchan,dctr,done){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___32475,cs,m,dchan,dctr,done){
return (function (state_32390){
var state_val_32391 = (state_32390[(1)]);
if((state_val_32391 === (7))){
var inst_32386 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32392_32476 = state_32390__$1;
(statearr_32392_32476[(2)] = inst_32386);

(statearr_32392_32476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (20))){
var inst_32289 = (state_32390[(7)]);
var inst_32301 = cljs.core.first.call(null,inst_32289);
var inst_32302 = cljs.core.nth.call(null,inst_32301,(0),null);
var inst_32303 = cljs.core.nth.call(null,inst_32301,(1),null);
var state_32390__$1 = (function (){var statearr_32393 = state_32390;
(statearr_32393[(8)] = inst_32302);

return statearr_32393;
})();
if(cljs.core.truth_(inst_32303)){
var statearr_32394_32477 = state_32390__$1;
(statearr_32394_32477[(1)] = (22));

} else {
var statearr_32395_32478 = state_32390__$1;
(statearr_32395_32478[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (27))){
var inst_32331 = (state_32390[(9)]);
var inst_32258 = (state_32390[(10)]);
var inst_32333 = (state_32390[(11)]);
var inst_32338 = (state_32390[(12)]);
var inst_32338__$1 = cljs.core._nth.call(null,inst_32331,inst_32333);
var inst_32339 = cljs.core.async.put_BANG_.call(null,inst_32338__$1,inst_32258,done);
var state_32390__$1 = (function (){var statearr_32396 = state_32390;
(statearr_32396[(12)] = inst_32338__$1);

return statearr_32396;
})();
if(cljs.core.truth_(inst_32339)){
var statearr_32397_32479 = state_32390__$1;
(statearr_32397_32479[(1)] = (30));

} else {
var statearr_32398_32480 = state_32390__$1;
(statearr_32398_32480[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (1))){
var state_32390__$1 = state_32390;
var statearr_32399_32481 = state_32390__$1;
(statearr_32399_32481[(2)] = null);

(statearr_32399_32481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (24))){
var inst_32289 = (state_32390[(7)]);
var inst_32308 = (state_32390[(2)]);
var inst_32309 = cljs.core.next.call(null,inst_32289);
var inst_32267 = inst_32309;
var inst_32268 = null;
var inst_32269 = (0);
var inst_32270 = (0);
var state_32390__$1 = (function (){var statearr_32400 = state_32390;
(statearr_32400[(13)] = inst_32269);

(statearr_32400[(14)] = inst_32308);

(statearr_32400[(15)] = inst_32270);

(statearr_32400[(16)] = inst_32267);

(statearr_32400[(17)] = inst_32268);

return statearr_32400;
})();
var statearr_32401_32482 = state_32390__$1;
(statearr_32401_32482[(2)] = null);

(statearr_32401_32482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (39))){
var state_32390__$1 = state_32390;
var statearr_32405_32483 = state_32390__$1;
(statearr_32405_32483[(2)] = null);

(statearr_32405_32483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (4))){
var inst_32258 = (state_32390[(10)]);
var inst_32258__$1 = (state_32390[(2)]);
var inst_32259 = (inst_32258__$1 == null);
var state_32390__$1 = (function (){var statearr_32406 = state_32390;
(statearr_32406[(10)] = inst_32258__$1);

return statearr_32406;
})();
if(cljs.core.truth_(inst_32259)){
var statearr_32407_32484 = state_32390__$1;
(statearr_32407_32484[(1)] = (5));

} else {
var statearr_32408_32485 = state_32390__$1;
(statearr_32408_32485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (15))){
var inst_32269 = (state_32390[(13)]);
var inst_32270 = (state_32390[(15)]);
var inst_32267 = (state_32390[(16)]);
var inst_32268 = (state_32390[(17)]);
var inst_32285 = (state_32390[(2)]);
var inst_32286 = (inst_32270 + (1));
var tmp32402 = inst_32269;
var tmp32403 = inst_32267;
var tmp32404 = inst_32268;
var inst_32267__$1 = tmp32403;
var inst_32268__$1 = tmp32404;
var inst_32269__$1 = tmp32402;
var inst_32270__$1 = inst_32286;
var state_32390__$1 = (function (){var statearr_32409 = state_32390;
(statearr_32409[(13)] = inst_32269__$1);

(statearr_32409[(15)] = inst_32270__$1);

(statearr_32409[(16)] = inst_32267__$1);

(statearr_32409[(18)] = inst_32285);

(statearr_32409[(17)] = inst_32268__$1);

return statearr_32409;
})();
var statearr_32410_32486 = state_32390__$1;
(statearr_32410_32486[(2)] = null);

(statearr_32410_32486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (21))){
var inst_32312 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32414_32487 = state_32390__$1;
(statearr_32414_32487[(2)] = inst_32312);

(statearr_32414_32487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (31))){
var inst_32338 = (state_32390[(12)]);
var inst_32342 = done.call(null,null);
var inst_32343 = cljs.core.async.untap_STAR_.call(null,m,inst_32338);
var state_32390__$1 = (function (){var statearr_32415 = state_32390;
(statearr_32415[(19)] = inst_32342);

return statearr_32415;
})();
var statearr_32416_32488 = state_32390__$1;
(statearr_32416_32488[(2)] = inst_32343);

(statearr_32416_32488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (32))){
var inst_32331 = (state_32390[(9)]);
var inst_32332 = (state_32390[(20)]);
var inst_32333 = (state_32390[(11)]);
var inst_32330 = (state_32390[(21)]);
var inst_32345 = (state_32390[(2)]);
var inst_32346 = (inst_32333 + (1));
var tmp32411 = inst_32331;
var tmp32412 = inst_32332;
var tmp32413 = inst_32330;
var inst_32330__$1 = tmp32413;
var inst_32331__$1 = tmp32411;
var inst_32332__$1 = tmp32412;
var inst_32333__$1 = inst_32346;
var state_32390__$1 = (function (){var statearr_32417 = state_32390;
(statearr_32417[(9)] = inst_32331__$1);

(statearr_32417[(20)] = inst_32332__$1);

(statearr_32417[(22)] = inst_32345);

(statearr_32417[(11)] = inst_32333__$1);

(statearr_32417[(21)] = inst_32330__$1);

return statearr_32417;
})();
var statearr_32418_32489 = state_32390__$1;
(statearr_32418_32489[(2)] = null);

(statearr_32418_32489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (40))){
var inst_32358 = (state_32390[(23)]);
var inst_32362 = done.call(null,null);
var inst_32363 = cljs.core.async.untap_STAR_.call(null,m,inst_32358);
var state_32390__$1 = (function (){var statearr_32419 = state_32390;
(statearr_32419[(24)] = inst_32362);

return statearr_32419;
})();
var statearr_32420_32490 = state_32390__$1;
(statearr_32420_32490[(2)] = inst_32363);

(statearr_32420_32490[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (33))){
var inst_32349 = (state_32390[(25)]);
var inst_32351 = cljs.core.chunked_seq_QMARK_.call(null,inst_32349);
var state_32390__$1 = state_32390;
if(inst_32351){
var statearr_32421_32491 = state_32390__$1;
(statearr_32421_32491[(1)] = (36));

} else {
var statearr_32422_32492 = state_32390__$1;
(statearr_32422_32492[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (13))){
var inst_32279 = (state_32390[(26)]);
var inst_32282 = cljs.core.async.close_BANG_.call(null,inst_32279);
var state_32390__$1 = state_32390;
var statearr_32423_32493 = state_32390__$1;
(statearr_32423_32493[(2)] = inst_32282);

(statearr_32423_32493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (22))){
var inst_32302 = (state_32390[(8)]);
var inst_32305 = cljs.core.async.close_BANG_.call(null,inst_32302);
var state_32390__$1 = state_32390;
var statearr_32424_32494 = state_32390__$1;
(statearr_32424_32494[(2)] = inst_32305);

(statearr_32424_32494[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (36))){
var inst_32349 = (state_32390[(25)]);
var inst_32353 = cljs.core.chunk_first.call(null,inst_32349);
var inst_32354 = cljs.core.chunk_rest.call(null,inst_32349);
var inst_32355 = cljs.core.count.call(null,inst_32353);
var inst_32330 = inst_32354;
var inst_32331 = inst_32353;
var inst_32332 = inst_32355;
var inst_32333 = (0);
var state_32390__$1 = (function (){var statearr_32425 = state_32390;
(statearr_32425[(9)] = inst_32331);

(statearr_32425[(20)] = inst_32332);

(statearr_32425[(11)] = inst_32333);

(statearr_32425[(21)] = inst_32330);

return statearr_32425;
})();
var statearr_32426_32495 = state_32390__$1;
(statearr_32426_32495[(2)] = null);

(statearr_32426_32495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (41))){
var inst_32349 = (state_32390[(25)]);
var inst_32365 = (state_32390[(2)]);
var inst_32366 = cljs.core.next.call(null,inst_32349);
var inst_32330 = inst_32366;
var inst_32331 = null;
var inst_32332 = (0);
var inst_32333 = (0);
var state_32390__$1 = (function (){var statearr_32427 = state_32390;
(statearr_32427[(9)] = inst_32331);

(statearr_32427[(20)] = inst_32332);

(statearr_32427[(11)] = inst_32333);

(statearr_32427[(27)] = inst_32365);

(statearr_32427[(21)] = inst_32330);

return statearr_32427;
})();
var statearr_32428_32496 = state_32390__$1;
(statearr_32428_32496[(2)] = null);

(statearr_32428_32496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (43))){
var state_32390__$1 = state_32390;
var statearr_32429_32497 = state_32390__$1;
(statearr_32429_32497[(2)] = null);

(statearr_32429_32497[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (29))){
var inst_32374 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32430_32498 = state_32390__$1;
(statearr_32430_32498[(2)] = inst_32374);

(statearr_32430_32498[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (44))){
var inst_32383 = (state_32390[(2)]);
var state_32390__$1 = (function (){var statearr_32431 = state_32390;
(statearr_32431[(28)] = inst_32383);

return statearr_32431;
})();
var statearr_32432_32499 = state_32390__$1;
(statearr_32432_32499[(2)] = null);

(statearr_32432_32499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (6))){
var inst_32322 = (state_32390[(29)]);
var inst_32321 = cljs.core.deref.call(null,cs);
var inst_32322__$1 = cljs.core.keys.call(null,inst_32321);
var inst_32323 = cljs.core.count.call(null,inst_32322__$1);
var inst_32324 = cljs.core.reset_BANG_.call(null,dctr,inst_32323);
var inst_32329 = cljs.core.seq.call(null,inst_32322__$1);
var inst_32330 = inst_32329;
var inst_32331 = null;
var inst_32332 = (0);
var inst_32333 = (0);
var state_32390__$1 = (function (){var statearr_32433 = state_32390;
(statearr_32433[(9)] = inst_32331);

(statearr_32433[(20)] = inst_32332);

(statearr_32433[(11)] = inst_32333);

(statearr_32433[(30)] = inst_32324);

(statearr_32433[(21)] = inst_32330);

(statearr_32433[(29)] = inst_32322__$1);

return statearr_32433;
})();
var statearr_32434_32500 = state_32390__$1;
(statearr_32434_32500[(2)] = null);

(statearr_32434_32500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (28))){
var inst_32349 = (state_32390[(25)]);
var inst_32330 = (state_32390[(21)]);
var inst_32349__$1 = cljs.core.seq.call(null,inst_32330);
var state_32390__$1 = (function (){var statearr_32435 = state_32390;
(statearr_32435[(25)] = inst_32349__$1);

return statearr_32435;
})();
if(inst_32349__$1){
var statearr_32436_32501 = state_32390__$1;
(statearr_32436_32501[(1)] = (33));

} else {
var statearr_32437_32502 = state_32390__$1;
(statearr_32437_32502[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (25))){
var inst_32332 = (state_32390[(20)]);
var inst_32333 = (state_32390[(11)]);
var inst_32335 = (inst_32333 < inst_32332);
var inst_32336 = inst_32335;
var state_32390__$1 = state_32390;
if(cljs.core.truth_(inst_32336)){
var statearr_32438_32503 = state_32390__$1;
(statearr_32438_32503[(1)] = (27));

} else {
var statearr_32439_32504 = state_32390__$1;
(statearr_32439_32504[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (34))){
var state_32390__$1 = state_32390;
var statearr_32440_32505 = state_32390__$1;
(statearr_32440_32505[(2)] = null);

(statearr_32440_32505[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (17))){
var state_32390__$1 = state_32390;
var statearr_32441_32506 = state_32390__$1;
(statearr_32441_32506[(2)] = null);

(statearr_32441_32506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (3))){
var inst_32388 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32390__$1,inst_32388);
} else {
if((state_val_32391 === (12))){
var inst_32317 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32442_32507 = state_32390__$1;
(statearr_32442_32507[(2)] = inst_32317);

(statearr_32442_32507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (2))){
var state_32390__$1 = state_32390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32390__$1,(4),ch);
} else {
if((state_val_32391 === (23))){
var state_32390__$1 = state_32390;
var statearr_32443_32508 = state_32390__$1;
(statearr_32443_32508[(2)] = null);

(statearr_32443_32508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (35))){
var inst_32372 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32444_32509 = state_32390__$1;
(statearr_32444_32509[(2)] = inst_32372);

(statearr_32444_32509[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (19))){
var inst_32289 = (state_32390[(7)]);
var inst_32293 = cljs.core.chunk_first.call(null,inst_32289);
var inst_32294 = cljs.core.chunk_rest.call(null,inst_32289);
var inst_32295 = cljs.core.count.call(null,inst_32293);
var inst_32267 = inst_32294;
var inst_32268 = inst_32293;
var inst_32269 = inst_32295;
var inst_32270 = (0);
var state_32390__$1 = (function (){var statearr_32445 = state_32390;
(statearr_32445[(13)] = inst_32269);

(statearr_32445[(15)] = inst_32270);

(statearr_32445[(16)] = inst_32267);

(statearr_32445[(17)] = inst_32268);

return statearr_32445;
})();
var statearr_32446_32510 = state_32390__$1;
(statearr_32446_32510[(2)] = null);

(statearr_32446_32510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (11))){
var inst_32267 = (state_32390[(16)]);
var inst_32289 = (state_32390[(7)]);
var inst_32289__$1 = cljs.core.seq.call(null,inst_32267);
var state_32390__$1 = (function (){var statearr_32447 = state_32390;
(statearr_32447[(7)] = inst_32289__$1);

return statearr_32447;
})();
if(inst_32289__$1){
var statearr_32448_32511 = state_32390__$1;
(statearr_32448_32511[(1)] = (16));

} else {
var statearr_32449_32512 = state_32390__$1;
(statearr_32449_32512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (9))){
var inst_32319 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32450_32513 = state_32390__$1;
(statearr_32450_32513[(2)] = inst_32319);

(statearr_32450_32513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (5))){
var inst_32265 = cljs.core.deref.call(null,cs);
var inst_32266 = cljs.core.seq.call(null,inst_32265);
var inst_32267 = inst_32266;
var inst_32268 = null;
var inst_32269 = (0);
var inst_32270 = (0);
var state_32390__$1 = (function (){var statearr_32451 = state_32390;
(statearr_32451[(13)] = inst_32269);

(statearr_32451[(15)] = inst_32270);

(statearr_32451[(16)] = inst_32267);

(statearr_32451[(17)] = inst_32268);

return statearr_32451;
})();
var statearr_32452_32514 = state_32390__$1;
(statearr_32452_32514[(2)] = null);

(statearr_32452_32514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (14))){
var state_32390__$1 = state_32390;
var statearr_32453_32515 = state_32390__$1;
(statearr_32453_32515[(2)] = null);

(statearr_32453_32515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (45))){
var inst_32380 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32454_32516 = state_32390__$1;
(statearr_32454_32516[(2)] = inst_32380);

(statearr_32454_32516[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (26))){
var inst_32322 = (state_32390[(29)]);
var inst_32376 = (state_32390[(2)]);
var inst_32377 = cljs.core.seq.call(null,inst_32322);
var state_32390__$1 = (function (){var statearr_32455 = state_32390;
(statearr_32455[(31)] = inst_32376);

return statearr_32455;
})();
if(inst_32377){
var statearr_32456_32517 = state_32390__$1;
(statearr_32456_32517[(1)] = (42));

} else {
var statearr_32457_32518 = state_32390__$1;
(statearr_32457_32518[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (16))){
var inst_32289 = (state_32390[(7)]);
var inst_32291 = cljs.core.chunked_seq_QMARK_.call(null,inst_32289);
var state_32390__$1 = state_32390;
if(inst_32291){
var statearr_32458_32519 = state_32390__$1;
(statearr_32458_32519[(1)] = (19));

} else {
var statearr_32459_32520 = state_32390__$1;
(statearr_32459_32520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (38))){
var inst_32369 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32460_32521 = state_32390__$1;
(statearr_32460_32521[(2)] = inst_32369);

(statearr_32460_32521[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (30))){
var state_32390__$1 = state_32390;
var statearr_32461_32522 = state_32390__$1;
(statearr_32461_32522[(2)] = null);

(statearr_32461_32522[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (10))){
var inst_32270 = (state_32390[(15)]);
var inst_32268 = (state_32390[(17)]);
var inst_32278 = cljs.core._nth.call(null,inst_32268,inst_32270);
var inst_32279 = cljs.core.nth.call(null,inst_32278,(0),null);
var inst_32280 = cljs.core.nth.call(null,inst_32278,(1),null);
var state_32390__$1 = (function (){var statearr_32462 = state_32390;
(statearr_32462[(26)] = inst_32279);

return statearr_32462;
})();
if(cljs.core.truth_(inst_32280)){
var statearr_32463_32523 = state_32390__$1;
(statearr_32463_32523[(1)] = (13));

} else {
var statearr_32464_32524 = state_32390__$1;
(statearr_32464_32524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (18))){
var inst_32315 = (state_32390[(2)]);
var state_32390__$1 = state_32390;
var statearr_32465_32525 = state_32390__$1;
(statearr_32465_32525[(2)] = inst_32315);

(statearr_32465_32525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (42))){
var state_32390__$1 = state_32390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32390__$1,(45),dchan);
} else {
if((state_val_32391 === (37))){
var inst_32258 = (state_32390[(10)]);
var inst_32358 = (state_32390[(23)]);
var inst_32349 = (state_32390[(25)]);
var inst_32358__$1 = cljs.core.first.call(null,inst_32349);
var inst_32359 = cljs.core.async.put_BANG_.call(null,inst_32358__$1,inst_32258,done);
var state_32390__$1 = (function (){var statearr_32466 = state_32390;
(statearr_32466[(23)] = inst_32358__$1);

return statearr_32466;
})();
if(cljs.core.truth_(inst_32359)){
var statearr_32467_32526 = state_32390__$1;
(statearr_32467_32526[(1)] = (39));

} else {
var statearr_32468_32527 = state_32390__$1;
(statearr_32468_32527[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32391 === (8))){
var inst_32269 = (state_32390[(13)]);
var inst_32270 = (state_32390[(15)]);
var inst_32272 = (inst_32270 < inst_32269);
var inst_32273 = inst_32272;
var state_32390__$1 = state_32390;
if(cljs.core.truth_(inst_32273)){
var statearr_32469_32528 = state_32390__$1;
(statearr_32469_32528[(1)] = (10));

} else {
var statearr_32470_32529 = state_32390__$1;
(statearr_32470_32529[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___32475,cs,m,dchan,dctr,done))
;
return ((function (switch__31582__auto__,c__31670__auto___32475,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31583__auto__ = null;
var cljs$core$async$mult_$_state_machine__31583__auto____0 = (function (){
var statearr_32471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32471[(0)] = cljs$core$async$mult_$_state_machine__31583__auto__);

(statearr_32471[(1)] = (1));

return statearr_32471;
});
var cljs$core$async$mult_$_state_machine__31583__auto____1 = (function (state_32390){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_32390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e32472){if((e32472 instanceof Object)){
var ex__31586__auto__ = e32472;
var statearr_32473_32530 = state_32390;
(statearr_32473_32530[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32531 = state_32390;
state_32390 = G__32531;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31583__auto__ = function(state_32390){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31583__auto____1.call(this,state_32390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31583__auto____0;
cljs$core$async$mult_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31583__auto____1;
return cljs$core$async$mult_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___32475,cs,m,dchan,dctr,done))
})();
var state__31672__auto__ = (function (){var statearr_32474 = f__31671__auto__.call(null);
(statearr_32474[(6)] = c__31670__auto___32475);

return statearr_32474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___32475,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32533 = arguments.length;
switch (G__32533) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,state_map);
} else {
var m__28673__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,mode);
} else {
var m__28673__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___32545 = arguments.length;
var i__29159__auto___32546 = (0);
while(true){
if((i__29159__auto___32546 < len__29158__auto___32545)){
args__29165__auto__.push((arguments[i__29159__auto___32546]));

var G__32547 = (i__29159__auto___32546 + (1));
i__29159__auto___32546 = G__32547;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((3) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32539){
var map__32540 = p__32539;
var map__32540__$1 = ((((!((map__32540 == null)))?((((map__32540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32540):map__32540);
var opts = map__32540__$1;
var statearr_32542_32548 = state;
(statearr_32542_32548[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32540,map__32540__$1,opts){
return (function (val){
var statearr_32543_32549 = state;
(statearr_32543_32549[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32540,map__32540__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32544_32550 = state;
(statearr_32544_32550[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32535){
var G__32536 = cljs.core.first.call(null,seq32535);
var seq32535__$1 = cljs.core.next.call(null,seq32535);
var G__32537 = cljs.core.first.call(null,seq32535__$1);
var seq32535__$2 = cljs.core.next.call(null,seq32535__$1);
var G__32538 = cljs.core.first.call(null,seq32535__$2);
var seq32535__$3 = cljs.core.next.call(null,seq32535__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32536,G__32537,G__32538,seq32535__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32551 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32552){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32552 = meta32552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32553,meta32552__$1){
var self__ = this;
var _32553__$1 = this;
return (new cljs.core.async.t_cljs$core$async32551(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32552__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32553){
var self__ = this;
var _32553__$1 = this;
return self__.meta32552;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32552","meta32552",-928178587,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32551";

cljs.core.async.t_cljs$core$async32551.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32551");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32551 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32551(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32552){
return (new cljs.core.async.t_cljs$core$async32551(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32552));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32551(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31670__auto___32715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___32715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___32715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32655){
var state_val_32656 = (state_32655[(1)]);
if((state_val_32656 === (7))){
var inst_32570 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32657_32716 = state_32655__$1;
(statearr_32657_32716[(2)] = inst_32570);

(statearr_32657_32716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (20))){
var inst_32582 = (state_32655[(7)]);
var state_32655__$1 = state_32655;
var statearr_32658_32717 = state_32655__$1;
(statearr_32658_32717[(2)] = inst_32582);

(statearr_32658_32717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (27))){
var state_32655__$1 = state_32655;
var statearr_32659_32718 = state_32655__$1;
(statearr_32659_32718[(2)] = null);

(statearr_32659_32718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (1))){
var inst_32557 = (state_32655[(8)]);
var inst_32557__$1 = calc_state.call(null);
var inst_32559 = (inst_32557__$1 == null);
var inst_32560 = cljs.core.not.call(null,inst_32559);
var state_32655__$1 = (function (){var statearr_32660 = state_32655;
(statearr_32660[(8)] = inst_32557__$1);

return statearr_32660;
})();
if(inst_32560){
var statearr_32661_32719 = state_32655__$1;
(statearr_32661_32719[(1)] = (2));

} else {
var statearr_32662_32720 = state_32655__$1;
(statearr_32662_32720[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (24))){
var inst_32615 = (state_32655[(9)]);
var inst_32629 = (state_32655[(10)]);
var inst_32606 = (state_32655[(11)]);
var inst_32629__$1 = inst_32606.call(null,inst_32615);
var state_32655__$1 = (function (){var statearr_32663 = state_32655;
(statearr_32663[(10)] = inst_32629__$1);

return statearr_32663;
})();
if(cljs.core.truth_(inst_32629__$1)){
var statearr_32664_32721 = state_32655__$1;
(statearr_32664_32721[(1)] = (29));

} else {
var statearr_32665_32722 = state_32655__$1;
(statearr_32665_32722[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (4))){
var inst_32573 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
if(cljs.core.truth_(inst_32573)){
var statearr_32666_32723 = state_32655__$1;
(statearr_32666_32723[(1)] = (8));

} else {
var statearr_32667_32724 = state_32655__$1;
(statearr_32667_32724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (15))){
var inst_32600 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
if(cljs.core.truth_(inst_32600)){
var statearr_32668_32725 = state_32655__$1;
(statearr_32668_32725[(1)] = (19));

} else {
var statearr_32669_32726 = state_32655__$1;
(statearr_32669_32726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (21))){
var inst_32605 = (state_32655[(12)]);
var inst_32605__$1 = (state_32655[(2)]);
var inst_32606 = cljs.core.get.call(null,inst_32605__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32607 = cljs.core.get.call(null,inst_32605__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32608 = cljs.core.get.call(null,inst_32605__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32655__$1 = (function (){var statearr_32670 = state_32655;
(statearr_32670[(12)] = inst_32605__$1);

(statearr_32670[(13)] = inst_32607);

(statearr_32670[(11)] = inst_32606);

return statearr_32670;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32655__$1,(22),inst_32608);
} else {
if((state_val_32656 === (31))){
var inst_32637 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
if(cljs.core.truth_(inst_32637)){
var statearr_32671_32727 = state_32655__$1;
(statearr_32671_32727[(1)] = (32));

} else {
var statearr_32672_32728 = state_32655__$1;
(statearr_32672_32728[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (32))){
var inst_32614 = (state_32655[(14)]);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32655__$1,(35),out,inst_32614);
} else {
if((state_val_32656 === (33))){
var inst_32605 = (state_32655[(12)]);
var inst_32582 = inst_32605;
var state_32655__$1 = (function (){var statearr_32673 = state_32655;
(statearr_32673[(7)] = inst_32582);

return statearr_32673;
})();
var statearr_32674_32729 = state_32655__$1;
(statearr_32674_32729[(2)] = null);

(statearr_32674_32729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (13))){
var inst_32582 = (state_32655[(7)]);
var inst_32589 = inst_32582.cljs$lang$protocol_mask$partition0$;
var inst_32590 = (inst_32589 & (64));
var inst_32591 = inst_32582.cljs$core$ISeq$;
var inst_32592 = (cljs.core.PROTOCOL_SENTINEL === inst_32591);
var inst_32593 = (inst_32590) || (inst_32592);
var state_32655__$1 = state_32655;
if(cljs.core.truth_(inst_32593)){
var statearr_32675_32730 = state_32655__$1;
(statearr_32675_32730[(1)] = (16));

} else {
var statearr_32676_32731 = state_32655__$1;
(statearr_32676_32731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (22))){
var inst_32615 = (state_32655[(9)]);
var inst_32614 = (state_32655[(14)]);
var inst_32613 = (state_32655[(2)]);
var inst_32614__$1 = cljs.core.nth.call(null,inst_32613,(0),null);
var inst_32615__$1 = cljs.core.nth.call(null,inst_32613,(1),null);
var inst_32616 = (inst_32614__$1 == null);
var inst_32617 = cljs.core._EQ_.call(null,inst_32615__$1,change);
var inst_32618 = (inst_32616) || (inst_32617);
var state_32655__$1 = (function (){var statearr_32677 = state_32655;
(statearr_32677[(9)] = inst_32615__$1);

(statearr_32677[(14)] = inst_32614__$1);

return statearr_32677;
})();
if(cljs.core.truth_(inst_32618)){
var statearr_32678_32732 = state_32655__$1;
(statearr_32678_32732[(1)] = (23));

} else {
var statearr_32679_32733 = state_32655__$1;
(statearr_32679_32733[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (36))){
var inst_32605 = (state_32655[(12)]);
var inst_32582 = inst_32605;
var state_32655__$1 = (function (){var statearr_32680 = state_32655;
(statearr_32680[(7)] = inst_32582);

return statearr_32680;
})();
var statearr_32681_32734 = state_32655__$1;
(statearr_32681_32734[(2)] = null);

(statearr_32681_32734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (29))){
var inst_32629 = (state_32655[(10)]);
var state_32655__$1 = state_32655;
var statearr_32682_32735 = state_32655__$1;
(statearr_32682_32735[(2)] = inst_32629);

(statearr_32682_32735[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (6))){
var state_32655__$1 = state_32655;
var statearr_32683_32736 = state_32655__$1;
(statearr_32683_32736[(2)] = false);

(statearr_32683_32736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (28))){
var inst_32625 = (state_32655[(2)]);
var inst_32626 = calc_state.call(null);
var inst_32582 = inst_32626;
var state_32655__$1 = (function (){var statearr_32684 = state_32655;
(statearr_32684[(15)] = inst_32625);

(statearr_32684[(7)] = inst_32582);

return statearr_32684;
})();
var statearr_32685_32737 = state_32655__$1;
(statearr_32685_32737[(2)] = null);

(statearr_32685_32737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (25))){
var inst_32651 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32686_32738 = state_32655__$1;
(statearr_32686_32738[(2)] = inst_32651);

(statearr_32686_32738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (34))){
var inst_32649 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32687_32739 = state_32655__$1;
(statearr_32687_32739[(2)] = inst_32649);

(statearr_32687_32739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (17))){
var state_32655__$1 = state_32655;
var statearr_32688_32740 = state_32655__$1;
(statearr_32688_32740[(2)] = false);

(statearr_32688_32740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (3))){
var state_32655__$1 = state_32655;
var statearr_32689_32741 = state_32655__$1;
(statearr_32689_32741[(2)] = false);

(statearr_32689_32741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (12))){
var inst_32653 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32655__$1,inst_32653);
} else {
if((state_val_32656 === (2))){
var inst_32557 = (state_32655[(8)]);
var inst_32562 = inst_32557.cljs$lang$protocol_mask$partition0$;
var inst_32563 = (inst_32562 & (64));
var inst_32564 = inst_32557.cljs$core$ISeq$;
var inst_32565 = (cljs.core.PROTOCOL_SENTINEL === inst_32564);
var inst_32566 = (inst_32563) || (inst_32565);
var state_32655__$1 = state_32655;
if(cljs.core.truth_(inst_32566)){
var statearr_32690_32742 = state_32655__$1;
(statearr_32690_32742[(1)] = (5));

} else {
var statearr_32691_32743 = state_32655__$1;
(statearr_32691_32743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (23))){
var inst_32614 = (state_32655[(14)]);
var inst_32620 = (inst_32614 == null);
var state_32655__$1 = state_32655;
if(cljs.core.truth_(inst_32620)){
var statearr_32692_32744 = state_32655__$1;
(statearr_32692_32744[(1)] = (26));

} else {
var statearr_32693_32745 = state_32655__$1;
(statearr_32693_32745[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (35))){
var inst_32640 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
if(cljs.core.truth_(inst_32640)){
var statearr_32694_32746 = state_32655__$1;
(statearr_32694_32746[(1)] = (36));

} else {
var statearr_32695_32747 = state_32655__$1;
(statearr_32695_32747[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (19))){
var inst_32582 = (state_32655[(7)]);
var inst_32602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32582);
var state_32655__$1 = state_32655;
var statearr_32696_32748 = state_32655__$1;
(statearr_32696_32748[(2)] = inst_32602);

(statearr_32696_32748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (11))){
var inst_32582 = (state_32655[(7)]);
var inst_32586 = (inst_32582 == null);
var inst_32587 = cljs.core.not.call(null,inst_32586);
var state_32655__$1 = state_32655;
if(inst_32587){
var statearr_32697_32749 = state_32655__$1;
(statearr_32697_32749[(1)] = (13));

} else {
var statearr_32698_32750 = state_32655__$1;
(statearr_32698_32750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (9))){
var inst_32557 = (state_32655[(8)]);
var state_32655__$1 = state_32655;
var statearr_32699_32751 = state_32655__$1;
(statearr_32699_32751[(2)] = inst_32557);

(statearr_32699_32751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (5))){
var state_32655__$1 = state_32655;
var statearr_32700_32752 = state_32655__$1;
(statearr_32700_32752[(2)] = true);

(statearr_32700_32752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (14))){
var state_32655__$1 = state_32655;
var statearr_32701_32753 = state_32655__$1;
(statearr_32701_32753[(2)] = false);

(statearr_32701_32753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (26))){
var inst_32615 = (state_32655[(9)]);
var inst_32622 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32615);
var state_32655__$1 = state_32655;
var statearr_32702_32754 = state_32655__$1;
(statearr_32702_32754[(2)] = inst_32622);

(statearr_32702_32754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (16))){
var state_32655__$1 = state_32655;
var statearr_32703_32755 = state_32655__$1;
(statearr_32703_32755[(2)] = true);

(statearr_32703_32755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (38))){
var inst_32645 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32704_32756 = state_32655__$1;
(statearr_32704_32756[(2)] = inst_32645);

(statearr_32704_32756[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (30))){
var inst_32615 = (state_32655[(9)]);
var inst_32607 = (state_32655[(13)]);
var inst_32606 = (state_32655[(11)]);
var inst_32632 = cljs.core.empty_QMARK_.call(null,inst_32606);
var inst_32633 = inst_32607.call(null,inst_32615);
var inst_32634 = cljs.core.not.call(null,inst_32633);
var inst_32635 = (inst_32632) && (inst_32634);
var state_32655__$1 = state_32655;
var statearr_32705_32757 = state_32655__$1;
(statearr_32705_32757[(2)] = inst_32635);

(statearr_32705_32757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (10))){
var inst_32557 = (state_32655[(8)]);
var inst_32578 = (state_32655[(2)]);
var inst_32579 = cljs.core.get.call(null,inst_32578,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32580 = cljs.core.get.call(null,inst_32578,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32581 = cljs.core.get.call(null,inst_32578,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32582 = inst_32557;
var state_32655__$1 = (function (){var statearr_32706 = state_32655;
(statearr_32706[(16)] = inst_32579);

(statearr_32706[(17)] = inst_32581);

(statearr_32706[(18)] = inst_32580);

(statearr_32706[(7)] = inst_32582);

return statearr_32706;
})();
var statearr_32707_32758 = state_32655__$1;
(statearr_32707_32758[(2)] = null);

(statearr_32707_32758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (18))){
var inst_32597 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32708_32759 = state_32655__$1;
(statearr_32708_32759[(2)] = inst_32597);

(statearr_32708_32759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (37))){
var state_32655__$1 = state_32655;
var statearr_32709_32760 = state_32655__$1;
(statearr_32709_32760[(2)] = null);

(statearr_32709_32760[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (8))){
var inst_32557 = (state_32655[(8)]);
var inst_32575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32557);
var state_32655__$1 = state_32655;
var statearr_32710_32761 = state_32655__$1;
(statearr_32710_32761[(2)] = inst_32575);

(statearr_32710_32761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___32715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31582__auto__,c__31670__auto___32715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31583__auto__ = null;
var cljs$core$async$mix_$_state_machine__31583__auto____0 = (function (){
var statearr_32711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32711[(0)] = cljs$core$async$mix_$_state_machine__31583__auto__);

(statearr_32711[(1)] = (1));

return statearr_32711;
});
var cljs$core$async$mix_$_state_machine__31583__auto____1 = (function (state_32655){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_32655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e32712){if((e32712 instanceof Object)){
var ex__31586__auto__ = e32712;
var statearr_32713_32762 = state_32655;
(statearr_32713_32762[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32763 = state_32655;
state_32655 = G__32763;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31583__auto__ = function(state_32655){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31583__auto____1.call(this,state_32655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31583__auto____0;
cljs$core$async$mix_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31583__auto____1;
return cljs$core$async$mix_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___32715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31672__auto__ = (function (){var statearr_32714 = f__31671__auto__.call(null);
(statearr_32714[(6)] = c__31670__auto___32715);

return statearr_32714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___32715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32765 = arguments.length;
switch (G__32765) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32769 = arguments.length;
switch (G__32769) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27989__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27989__auto__,mults){
return (function (p1__32767_SHARP_){
if(cljs.core.truth_(p1__32767_SHARP_.call(null,topic))){
return p1__32767_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32767_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27989__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32770 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32771){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32771 = meta32771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32772,meta32771__$1){
var self__ = this;
var _32772__$1 = this;
return (new cljs.core.async.t_cljs$core$async32770(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32771__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32772){
var self__ = this;
var _32772__$1 = this;
return self__.meta32771;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32770.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32771","meta32771",439366435,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32770";

cljs.core.async.t_cljs$core$async32770.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32770");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32770 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32771){
return (new cljs.core.async.t_cljs$core$async32770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32771));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32770(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31670__auto___32890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___32890,mults,ensure_mult,p){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___32890,mults,ensure_mult,p){
return (function (state_32844){
var state_val_32845 = (state_32844[(1)]);
if((state_val_32845 === (7))){
var inst_32840 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32846_32891 = state_32844__$1;
(statearr_32846_32891[(2)] = inst_32840);

(statearr_32846_32891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (20))){
var state_32844__$1 = state_32844;
var statearr_32847_32892 = state_32844__$1;
(statearr_32847_32892[(2)] = null);

(statearr_32847_32892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (1))){
var state_32844__$1 = state_32844;
var statearr_32848_32893 = state_32844__$1;
(statearr_32848_32893[(2)] = null);

(statearr_32848_32893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (24))){
var inst_32823 = (state_32844[(7)]);
var inst_32832 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32823);
var state_32844__$1 = state_32844;
var statearr_32849_32894 = state_32844__$1;
(statearr_32849_32894[(2)] = inst_32832);

(statearr_32849_32894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (4))){
var inst_32775 = (state_32844[(8)]);
var inst_32775__$1 = (state_32844[(2)]);
var inst_32776 = (inst_32775__$1 == null);
var state_32844__$1 = (function (){var statearr_32850 = state_32844;
(statearr_32850[(8)] = inst_32775__$1);

return statearr_32850;
})();
if(cljs.core.truth_(inst_32776)){
var statearr_32851_32895 = state_32844__$1;
(statearr_32851_32895[(1)] = (5));

} else {
var statearr_32852_32896 = state_32844__$1;
(statearr_32852_32896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (15))){
var inst_32817 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32853_32897 = state_32844__$1;
(statearr_32853_32897[(2)] = inst_32817);

(statearr_32853_32897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (21))){
var inst_32837 = (state_32844[(2)]);
var state_32844__$1 = (function (){var statearr_32854 = state_32844;
(statearr_32854[(9)] = inst_32837);

return statearr_32854;
})();
var statearr_32855_32898 = state_32844__$1;
(statearr_32855_32898[(2)] = null);

(statearr_32855_32898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (13))){
var inst_32799 = (state_32844[(10)]);
var inst_32801 = cljs.core.chunked_seq_QMARK_.call(null,inst_32799);
var state_32844__$1 = state_32844;
if(inst_32801){
var statearr_32856_32899 = state_32844__$1;
(statearr_32856_32899[(1)] = (16));

} else {
var statearr_32857_32900 = state_32844__$1;
(statearr_32857_32900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (22))){
var inst_32829 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
if(cljs.core.truth_(inst_32829)){
var statearr_32858_32901 = state_32844__$1;
(statearr_32858_32901[(1)] = (23));

} else {
var statearr_32859_32902 = state_32844__$1;
(statearr_32859_32902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (6))){
var inst_32823 = (state_32844[(7)]);
var inst_32825 = (state_32844[(11)]);
var inst_32775 = (state_32844[(8)]);
var inst_32823__$1 = topic_fn.call(null,inst_32775);
var inst_32824 = cljs.core.deref.call(null,mults);
var inst_32825__$1 = cljs.core.get.call(null,inst_32824,inst_32823__$1);
var state_32844__$1 = (function (){var statearr_32860 = state_32844;
(statearr_32860[(7)] = inst_32823__$1);

(statearr_32860[(11)] = inst_32825__$1);

return statearr_32860;
})();
if(cljs.core.truth_(inst_32825__$1)){
var statearr_32861_32903 = state_32844__$1;
(statearr_32861_32903[(1)] = (19));

} else {
var statearr_32862_32904 = state_32844__$1;
(statearr_32862_32904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (25))){
var inst_32834 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32863_32905 = state_32844__$1;
(statearr_32863_32905[(2)] = inst_32834);

(statearr_32863_32905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (17))){
var inst_32799 = (state_32844[(10)]);
var inst_32808 = cljs.core.first.call(null,inst_32799);
var inst_32809 = cljs.core.async.muxch_STAR_.call(null,inst_32808);
var inst_32810 = cljs.core.async.close_BANG_.call(null,inst_32809);
var inst_32811 = cljs.core.next.call(null,inst_32799);
var inst_32785 = inst_32811;
var inst_32786 = null;
var inst_32787 = (0);
var inst_32788 = (0);
var state_32844__$1 = (function (){var statearr_32864 = state_32844;
(statearr_32864[(12)] = inst_32787);

(statearr_32864[(13)] = inst_32785);

(statearr_32864[(14)] = inst_32810);

(statearr_32864[(15)] = inst_32788);

(statearr_32864[(16)] = inst_32786);

return statearr_32864;
})();
var statearr_32865_32906 = state_32844__$1;
(statearr_32865_32906[(2)] = null);

(statearr_32865_32906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (3))){
var inst_32842 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32844__$1,inst_32842);
} else {
if((state_val_32845 === (12))){
var inst_32819 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32866_32907 = state_32844__$1;
(statearr_32866_32907[(2)] = inst_32819);

(statearr_32866_32907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (2))){
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32844__$1,(4),ch);
} else {
if((state_val_32845 === (23))){
var state_32844__$1 = state_32844;
var statearr_32867_32908 = state_32844__$1;
(statearr_32867_32908[(2)] = null);

(statearr_32867_32908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (19))){
var inst_32825 = (state_32844[(11)]);
var inst_32775 = (state_32844[(8)]);
var inst_32827 = cljs.core.async.muxch_STAR_.call(null,inst_32825);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32844__$1,(22),inst_32827,inst_32775);
} else {
if((state_val_32845 === (11))){
var inst_32785 = (state_32844[(13)]);
var inst_32799 = (state_32844[(10)]);
var inst_32799__$1 = cljs.core.seq.call(null,inst_32785);
var state_32844__$1 = (function (){var statearr_32868 = state_32844;
(statearr_32868[(10)] = inst_32799__$1);

return statearr_32868;
})();
if(inst_32799__$1){
var statearr_32869_32909 = state_32844__$1;
(statearr_32869_32909[(1)] = (13));

} else {
var statearr_32870_32910 = state_32844__$1;
(statearr_32870_32910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (9))){
var inst_32821 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32871_32911 = state_32844__$1;
(statearr_32871_32911[(2)] = inst_32821);

(statearr_32871_32911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (5))){
var inst_32782 = cljs.core.deref.call(null,mults);
var inst_32783 = cljs.core.vals.call(null,inst_32782);
var inst_32784 = cljs.core.seq.call(null,inst_32783);
var inst_32785 = inst_32784;
var inst_32786 = null;
var inst_32787 = (0);
var inst_32788 = (0);
var state_32844__$1 = (function (){var statearr_32872 = state_32844;
(statearr_32872[(12)] = inst_32787);

(statearr_32872[(13)] = inst_32785);

(statearr_32872[(15)] = inst_32788);

(statearr_32872[(16)] = inst_32786);

return statearr_32872;
})();
var statearr_32873_32912 = state_32844__$1;
(statearr_32873_32912[(2)] = null);

(statearr_32873_32912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (14))){
var state_32844__$1 = state_32844;
var statearr_32877_32913 = state_32844__$1;
(statearr_32877_32913[(2)] = null);

(statearr_32877_32913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (16))){
var inst_32799 = (state_32844[(10)]);
var inst_32803 = cljs.core.chunk_first.call(null,inst_32799);
var inst_32804 = cljs.core.chunk_rest.call(null,inst_32799);
var inst_32805 = cljs.core.count.call(null,inst_32803);
var inst_32785 = inst_32804;
var inst_32786 = inst_32803;
var inst_32787 = inst_32805;
var inst_32788 = (0);
var state_32844__$1 = (function (){var statearr_32878 = state_32844;
(statearr_32878[(12)] = inst_32787);

(statearr_32878[(13)] = inst_32785);

(statearr_32878[(15)] = inst_32788);

(statearr_32878[(16)] = inst_32786);

return statearr_32878;
})();
var statearr_32879_32914 = state_32844__$1;
(statearr_32879_32914[(2)] = null);

(statearr_32879_32914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (10))){
var inst_32787 = (state_32844[(12)]);
var inst_32785 = (state_32844[(13)]);
var inst_32788 = (state_32844[(15)]);
var inst_32786 = (state_32844[(16)]);
var inst_32793 = cljs.core._nth.call(null,inst_32786,inst_32788);
var inst_32794 = cljs.core.async.muxch_STAR_.call(null,inst_32793);
var inst_32795 = cljs.core.async.close_BANG_.call(null,inst_32794);
var inst_32796 = (inst_32788 + (1));
var tmp32874 = inst_32787;
var tmp32875 = inst_32785;
var tmp32876 = inst_32786;
var inst_32785__$1 = tmp32875;
var inst_32786__$1 = tmp32876;
var inst_32787__$1 = tmp32874;
var inst_32788__$1 = inst_32796;
var state_32844__$1 = (function (){var statearr_32880 = state_32844;
(statearr_32880[(12)] = inst_32787__$1);

(statearr_32880[(13)] = inst_32785__$1);

(statearr_32880[(15)] = inst_32788__$1);

(statearr_32880[(16)] = inst_32786__$1);

(statearr_32880[(17)] = inst_32795);

return statearr_32880;
})();
var statearr_32881_32915 = state_32844__$1;
(statearr_32881_32915[(2)] = null);

(statearr_32881_32915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (18))){
var inst_32814 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32882_32916 = state_32844__$1;
(statearr_32882_32916[(2)] = inst_32814);

(statearr_32882_32916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (8))){
var inst_32787 = (state_32844[(12)]);
var inst_32788 = (state_32844[(15)]);
var inst_32790 = (inst_32788 < inst_32787);
var inst_32791 = inst_32790;
var state_32844__$1 = state_32844;
if(cljs.core.truth_(inst_32791)){
var statearr_32883_32917 = state_32844__$1;
(statearr_32883_32917[(1)] = (10));

} else {
var statearr_32884_32918 = state_32844__$1;
(statearr_32884_32918[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___32890,mults,ensure_mult,p))
;
return ((function (switch__31582__auto__,c__31670__auto___32890,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_32885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32885[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_32885[(1)] = (1));

return statearr_32885;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_32844){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_32844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e32886){if((e32886 instanceof Object)){
var ex__31586__auto__ = e32886;
var statearr_32887_32919 = state_32844;
(statearr_32887_32919[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32920 = state_32844;
state_32844 = G__32920;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_32844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_32844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___32890,mults,ensure_mult,p))
})();
var state__31672__auto__ = (function (){var statearr_32888 = f__31671__auto__.call(null);
(statearr_32888[(6)] = c__31670__auto___32890);

return statearr_32888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___32890,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32922 = arguments.length;
switch (G__32922) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32925 = arguments.length;
switch (G__32925) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32928 = arguments.length;
switch (G__32928) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31670__auto___32995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___32995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___32995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32967){
var state_val_32968 = (state_32967[(1)]);
if((state_val_32968 === (7))){
var state_32967__$1 = state_32967;
var statearr_32969_32996 = state_32967__$1;
(statearr_32969_32996[(2)] = null);

(statearr_32969_32996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (1))){
var state_32967__$1 = state_32967;
var statearr_32970_32997 = state_32967__$1;
(statearr_32970_32997[(2)] = null);

(statearr_32970_32997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (4))){
var inst_32931 = (state_32967[(7)]);
var inst_32933 = (inst_32931 < cnt);
var state_32967__$1 = state_32967;
if(cljs.core.truth_(inst_32933)){
var statearr_32971_32998 = state_32967__$1;
(statearr_32971_32998[(1)] = (6));

} else {
var statearr_32972_32999 = state_32967__$1;
(statearr_32972_32999[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (15))){
var inst_32963 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
var statearr_32973_33000 = state_32967__$1;
(statearr_32973_33000[(2)] = inst_32963);

(statearr_32973_33000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (13))){
var inst_32956 = cljs.core.async.close_BANG_.call(null,out);
var state_32967__$1 = state_32967;
var statearr_32974_33001 = state_32967__$1;
(statearr_32974_33001[(2)] = inst_32956);

(statearr_32974_33001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (6))){
var state_32967__$1 = state_32967;
var statearr_32975_33002 = state_32967__$1;
(statearr_32975_33002[(2)] = null);

(statearr_32975_33002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (3))){
var inst_32965 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32967__$1,inst_32965);
} else {
if((state_val_32968 === (12))){
var inst_32953 = (state_32967[(8)]);
var inst_32953__$1 = (state_32967[(2)]);
var inst_32954 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32953__$1);
var state_32967__$1 = (function (){var statearr_32976 = state_32967;
(statearr_32976[(8)] = inst_32953__$1);

return statearr_32976;
})();
if(cljs.core.truth_(inst_32954)){
var statearr_32977_33003 = state_32967__$1;
(statearr_32977_33003[(1)] = (13));

} else {
var statearr_32978_33004 = state_32967__$1;
(statearr_32978_33004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (2))){
var inst_32930 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32931 = (0);
var state_32967__$1 = (function (){var statearr_32979 = state_32967;
(statearr_32979[(9)] = inst_32930);

(statearr_32979[(7)] = inst_32931);

return statearr_32979;
})();
var statearr_32980_33005 = state_32967__$1;
(statearr_32980_33005[(2)] = null);

(statearr_32980_33005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (11))){
var inst_32931 = (state_32967[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32967,(10),Object,null,(9));
var inst_32940 = chs__$1.call(null,inst_32931);
var inst_32941 = done.call(null,inst_32931);
var inst_32942 = cljs.core.async.take_BANG_.call(null,inst_32940,inst_32941);
var state_32967__$1 = state_32967;
var statearr_32981_33006 = state_32967__$1;
(statearr_32981_33006[(2)] = inst_32942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (9))){
var inst_32931 = (state_32967[(7)]);
var inst_32944 = (state_32967[(2)]);
var inst_32945 = (inst_32931 + (1));
var inst_32931__$1 = inst_32945;
var state_32967__$1 = (function (){var statearr_32982 = state_32967;
(statearr_32982[(7)] = inst_32931__$1);

(statearr_32982[(10)] = inst_32944);

return statearr_32982;
})();
var statearr_32983_33007 = state_32967__$1;
(statearr_32983_33007[(2)] = null);

(statearr_32983_33007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (5))){
var inst_32951 = (state_32967[(2)]);
var state_32967__$1 = (function (){var statearr_32984 = state_32967;
(statearr_32984[(11)] = inst_32951);

return statearr_32984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32967__$1,(12),dchan);
} else {
if((state_val_32968 === (14))){
var inst_32953 = (state_32967[(8)]);
var inst_32958 = cljs.core.apply.call(null,f,inst_32953);
var state_32967__$1 = state_32967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32967__$1,(16),out,inst_32958);
} else {
if((state_val_32968 === (16))){
var inst_32960 = (state_32967[(2)]);
var state_32967__$1 = (function (){var statearr_32985 = state_32967;
(statearr_32985[(12)] = inst_32960);

return statearr_32985;
})();
var statearr_32986_33008 = state_32967__$1;
(statearr_32986_33008[(2)] = null);

(statearr_32986_33008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (10))){
var inst_32935 = (state_32967[(2)]);
var inst_32936 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32967__$1 = (function (){var statearr_32987 = state_32967;
(statearr_32987[(13)] = inst_32935);

return statearr_32987;
})();
var statearr_32988_33009 = state_32967__$1;
(statearr_32988_33009[(2)] = inst_32936);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (8))){
var inst_32949 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
var statearr_32989_33010 = state_32967__$1;
(statearr_32989_33010[(2)] = inst_32949);

(statearr_32989_33010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___32995,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31582__auto__,c__31670__auto___32995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_32990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32990[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_32990[(1)] = (1));

return statearr_32990;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_32967){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_32967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e32991){if((e32991 instanceof Object)){
var ex__31586__auto__ = e32991;
var statearr_32992_33011 = state_32967;
(statearr_32992_33011[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33012 = state_32967;
state_32967 = G__33012;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_32967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_32967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___32995,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31672__auto__ = (function (){var statearr_32993 = f__31671__auto__.call(null);
(statearr_32993[(6)] = c__31670__auto___32995);

return statearr_32993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___32995,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33015 = arguments.length;
switch (G__33015) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31670__auto___33069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___33069,out){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___33069,out){
return (function (state_33047){
var state_val_33048 = (state_33047[(1)]);
if((state_val_33048 === (7))){
var inst_33026 = (state_33047[(7)]);
var inst_33027 = (state_33047[(8)]);
var inst_33026__$1 = (state_33047[(2)]);
var inst_33027__$1 = cljs.core.nth.call(null,inst_33026__$1,(0),null);
var inst_33028 = cljs.core.nth.call(null,inst_33026__$1,(1),null);
var inst_33029 = (inst_33027__$1 == null);
var state_33047__$1 = (function (){var statearr_33049 = state_33047;
(statearr_33049[(7)] = inst_33026__$1);

(statearr_33049[(9)] = inst_33028);

(statearr_33049[(8)] = inst_33027__$1);

return statearr_33049;
})();
if(cljs.core.truth_(inst_33029)){
var statearr_33050_33070 = state_33047__$1;
(statearr_33050_33070[(1)] = (8));

} else {
var statearr_33051_33071 = state_33047__$1;
(statearr_33051_33071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (1))){
var inst_33016 = cljs.core.vec.call(null,chs);
var inst_33017 = inst_33016;
var state_33047__$1 = (function (){var statearr_33052 = state_33047;
(statearr_33052[(10)] = inst_33017);

return statearr_33052;
})();
var statearr_33053_33072 = state_33047__$1;
(statearr_33053_33072[(2)] = null);

(statearr_33053_33072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (4))){
var inst_33017 = (state_33047[(10)]);
var state_33047__$1 = state_33047;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33047__$1,(7),inst_33017);
} else {
if((state_val_33048 === (6))){
var inst_33043 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33054_33073 = state_33047__$1;
(statearr_33054_33073[(2)] = inst_33043);

(statearr_33054_33073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (3))){
var inst_33045 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33047__$1,inst_33045);
} else {
if((state_val_33048 === (2))){
var inst_33017 = (state_33047[(10)]);
var inst_33019 = cljs.core.count.call(null,inst_33017);
var inst_33020 = (inst_33019 > (0));
var state_33047__$1 = state_33047;
if(cljs.core.truth_(inst_33020)){
var statearr_33056_33074 = state_33047__$1;
(statearr_33056_33074[(1)] = (4));

} else {
var statearr_33057_33075 = state_33047__$1;
(statearr_33057_33075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (11))){
var inst_33017 = (state_33047[(10)]);
var inst_33036 = (state_33047[(2)]);
var tmp33055 = inst_33017;
var inst_33017__$1 = tmp33055;
var state_33047__$1 = (function (){var statearr_33058 = state_33047;
(statearr_33058[(11)] = inst_33036);

(statearr_33058[(10)] = inst_33017__$1);

return statearr_33058;
})();
var statearr_33059_33076 = state_33047__$1;
(statearr_33059_33076[(2)] = null);

(statearr_33059_33076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (9))){
var inst_33027 = (state_33047[(8)]);
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33047__$1,(11),out,inst_33027);
} else {
if((state_val_33048 === (5))){
var inst_33041 = cljs.core.async.close_BANG_.call(null,out);
var state_33047__$1 = state_33047;
var statearr_33060_33077 = state_33047__$1;
(statearr_33060_33077[(2)] = inst_33041);

(statearr_33060_33077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (10))){
var inst_33039 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33061_33078 = state_33047__$1;
(statearr_33061_33078[(2)] = inst_33039);

(statearr_33061_33078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (8))){
var inst_33026 = (state_33047[(7)]);
var inst_33028 = (state_33047[(9)]);
var inst_33017 = (state_33047[(10)]);
var inst_33027 = (state_33047[(8)]);
var inst_33031 = (function (){var cs = inst_33017;
var vec__33022 = inst_33026;
var v = inst_33027;
var c = inst_33028;
return ((function (cs,vec__33022,v,c,inst_33026,inst_33028,inst_33017,inst_33027,state_val_33048,c__31670__auto___33069,out){
return (function (p1__33013_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33013_SHARP_);
});
;})(cs,vec__33022,v,c,inst_33026,inst_33028,inst_33017,inst_33027,state_val_33048,c__31670__auto___33069,out))
})();
var inst_33032 = cljs.core.filterv.call(null,inst_33031,inst_33017);
var inst_33017__$1 = inst_33032;
var state_33047__$1 = (function (){var statearr_33062 = state_33047;
(statearr_33062[(10)] = inst_33017__$1);

return statearr_33062;
})();
var statearr_33063_33079 = state_33047__$1;
(statearr_33063_33079[(2)] = null);

(statearr_33063_33079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___33069,out))
;
return ((function (switch__31582__auto__,c__31670__auto___33069,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_33064 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33064[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_33064[(1)] = (1));

return statearr_33064;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_33047){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_33047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e33065){if((e33065 instanceof Object)){
var ex__31586__auto__ = e33065;
var statearr_33066_33080 = state_33047;
(statearr_33066_33080[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33081 = state_33047;
state_33047 = G__33081;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_33047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_33047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___33069,out))
})();
var state__31672__auto__ = (function (){var statearr_33067 = f__31671__auto__.call(null);
(statearr_33067[(6)] = c__31670__auto___33069);

return statearr_33067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___33069,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33083 = arguments.length;
switch (G__33083) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31670__auto___33128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___33128,out){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___33128,out){
return (function (state_33107){
var state_val_33108 = (state_33107[(1)]);
if((state_val_33108 === (7))){
var inst_33089 = (state_33107[(7)]);
var inst_33089__$1 = (state_33107[(2)]);
var inst_33090 = (inst_33089__$1 == null);
var inst_33091 = cljs.core.not.call(null,inst_33090);
var state_33107__$1 = (function (){var statearr_33109 = state_33107;
(statearr_33109[(7)] = inst_33089__$1);

return statearr_33109;
})();
if(inst_33091){
var statearr_33110_33129 = state_33107__$1;
(statearr_33110_33129[(1)] = (8));

} else {
var statearr_33111_33130 = state_33107__$1;
(statearr_33111_33130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (1))){
var inst_33084 = (0);
var state_33107__$1 = (function (){var statearr_33112 = state_33107;
(statearr_33112[(8)] = inst_33084);

return statearr_33112;
})();
var statearr_33113_33131 = state_33107__$1;
(statearr_33113_33131[(2)] = null);

(statearr_33113_33131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (4))){
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33107__$1,(7),ch);
} else {
if((state_val_33108 === (6))){
var inst_33102 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33114_33132 = state_33107__$1;
(statearr_33114_33132[(2)] = inst_33102);

(statearr_33114_33132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (3))){
var inst_33104 = (state_33107[(2)]);
var inst_33105 = cljs.core.async.close_BANG_.call(null,out);
var state_33107__$1 = (function (){var statearr_33115 = state_33107;
(statearr_33115[(9)] = inst_33104);

return statearr_33115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33107__$1,inst_33105);
} else {
if((state_val_33108 === (2))){
var inst_33084 = (state_33107[(8)]);
var inst_33086 = (inst_33084 < n);
var state_33107__$1 = state_33107;
if(cljs.core.truth_(inst_33086)){
var statearr_33116_33133 = state_33107__$1;
(statearr_33116_33133[(1)] = (4));

} else {
var statearr_33117_33134 = state_33107__$1;
(statearr_33117_33134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (11))){
var inst_33084 = (state_33107[(8)]);
var inst_33094 = (state_33107[(2)]);
var inst_33095 = (inst_33084 + (1));
var inst_33084__$1 = inst_33095;
var state_33107__$1 = (function (){var statearr_33118 = state_33107;
(statearr_33118[(8)] = inst_33084__$1);

(statearr_33118[(10)] = inst_33094);

return statearr_33118;
})();
var statearr_33119_33135 = state_33107__$1;
(statearr_33119_33135[(2)] = null);

(statearr_33119_33135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (9))){
var state_33107__$1 = state_33107;
var statearr_33120_33136 = state_33107__$1;
(statearr_33120_33136[(2)] = null);

(statearr_33120_33136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (5))){
var state_33107__$1 = state_33107;
var statearr_33121_33137 = state_33107__$1;
(statearr_33121_33137[(2)] = null);

(statearr_33121_33137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (10))){
var inst_33099 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33122_33138 = state_33107__$1;
(statearr_33122_33138[(2)] = inst_33099);

(statearr_33122_33138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (8))){
var inst_33089 = (state_33107[(7)]);
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33107__$1,(11),out,inst_33089);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___33128,out))
;
return ((function (switch__31582__auto__,c__31670__auto___33128,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_33123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33123[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_33123[(1)] = (1));

return statearr_33123;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_33107){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_33107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e33124){if((e33124 instanceof Object)){
var ex__31586__auto__ = e33124;
var statearr_33125_33139 = state_33107;
(statearr_33125_33139[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33140 = state_33107;
state_33107 = G__33140;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_33107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_33107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___33128,out))
})();
var state__31672__auto__ = (function (){var statearr_33126 = f__31671__auto__.call(null);
(statearr_33126[(6)] = c__31670__auto___33128);

return statearr_33126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___33128,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33142 = (function (f,ch,meta33143){
this.f = f;
this.ch = ch;
this.meta33143 = meta33143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33144,meta33143__$1){
var self__ = this;
var _33144__$1 = this;
return (new cljs.core.async.t_cljs$core$async33142(self__.f,self__.ch,meta33143__$1));
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33144){
var self__ = this;
var _33144__$1 = this;
return self__.meta33143;
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33145 = (function (f,ch,meta33143,_,fn1,meta33146){
this.f = f;
this.ch = ch;
this.meta33143 = meta33143;
this._ = _;
this.fn1 = fn1;
this.meta33146 = meta33146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33147,meta33146__$1){
var self__ = this;
var _33147__$1 = this;
return (new cljs.core.async.t_cljs$core$async33145(self__.f,self__.ch,self__.meta33143,self__._,self__.fn1,meta33146__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33147){
var self__ = this;
var _33147__$1 = this;
return self__.meta33146;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33141_SHARP_){
return f1.call(null,(((p1__33141_SHARP_ == null))?null:self__.f.call(null,p1__33141_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33145.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33143","meta33143",1383972894,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33142","cljs.core.async/t_cljs$core$async33142",1480353764,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33146","meta33146",-90495775,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33145";

cljs.core.async.t_cljs$core$async33145.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async33145");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33145 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33145(f__$1,ch__$1,meta33143__$1,___$2,fn1__$1,meta33146){
return (new cljs.core.async.t_cljs$core$async33145(f__$1,ch__$1,meta33143__$1,___$2,fn1__$1,meta33146));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33145(self__.f,self__.ch,self__.meta33143,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27977__auto__ = ret;
if(cljs.core.truth_(and__27977__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27977__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33143","meta33143",1383972894,null)], null);
});

cljs.core.async.t_cljs$core$async33142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33142";

cljs.core.async.t_cljs$core$async33142.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async33142");
});

cljs.core.async.__GT_t_cljs$core$async33142 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33142(f__$1,ch__$1,meta33143){
return (new cljs.core.async.t_cljs$core$async33142(f__$1,ch__$1,meta33143));
});

}

return (new cljs.core.async.t_cljs$core$async33142(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33148 = (function (f,ch,meta33149){
this.f = f;
this.ch = ch;
this.meta33149 = meta33149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33150,meta33149__$1){
var self__ = this;
var _33150__$1 = this;
return (new cljs.core.async.t_cljs$core$async33148(self__.f,self__.ch,meta33149__$1));
});

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33150){
var self__ = this;
var _33150__$1 = this;
return self__.meta33149;
});

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33149","meta33149",-649213972,null)], null);
});

cljs.core.async.t_cljs$core$async33148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33148";

cljs.core.async.t_cljs$core$async33148.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async33148");
});

cljs.core.async.__GT_t_cljs$core$async33148 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33148(f__$1,ch__$1,meta33149){
return (new cljs.core.async.t_cljs$core$async33148(f__$1,ch__$1,meta33149));
});

}

return (new cljs.core.async.t_cljs$core$async33148(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33151 = (function (p,ch,meta33152){
this.p = p;
this.ch = ch;
this.meta33152 = meta33152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33153,meta33152__$1){
var self__ = this;
var _33153__$1 = this;
return (new cljs.core.async.t_cljs$core$async33151(self__.p,self__.ch,meta33152__$1));
});

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33153){
var self__ = this;
var _33153__$1 = this;
return self__.meta33152;
});

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33151.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33152","meta33152",375422336,null)], null);
});

cljs.core.async.t_cljs$core$async33151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33151";

cljs.core.async.t_cljs$core$async33151.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async33151");
});

cljs.core.async.__GT_t_cljs$core$async33151 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33151(p__$1,ch__$1,meta33152){
return (new cljs.core.async.t_cljs$core$async33151(p__$1,ch__$1,meta33152));
});

}

return (new cljs.core.async.t_cljs$core$async33151(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33155 = arguments.length;
switch (G__33155) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31670__auto___33195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___33195,out){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___33195,out){
return (function (state_33176){
var state_val_33177 = (state_33176[(1)]);
if((state_val_33177 === (7))){
var inst_33172 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
var statearr_33178_33196 = state_33176__$1;
(statearr_33178_33196[(2)] = inst_33172);

(statearr_33178_33196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (1))){
var state_33176__$1 = state_33176;
var statearr_33179_33197 = state_33176__$1;
(statearr_33179_33197[(2)] = null);

(statearr_33179_33197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (4))){
var inst_33158 = (state_33176[(7)]);
var inst_33158__$1 = (state_33176[(2)]);
var inst_33159 = (inst_33158__$1 == null);
var state_33176__$1 = (function (){var statearr_33180 = state_33176;
(statearr_33180[(7)] = inst_33158__$1);

return statearr_33180;
})();
if(cljs.core.truth_(inst_33159)){
var statearr_33181_33198 = state_33176__$1;
(statearr_33181_33198[(1)] = (5));

} else {
var statearr_33182_33199 = state_33176__$1;
(statearr_33182_33199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (6))){
var inst_33158 = (state_33176[(7)]);
var inst_33163 = p.call(null,inst_33158);
var state_33176__$1 = state_33176;
if(cljs.core.truth_(inst_33163)){
var statearr_33183_33200 = state_33176__$1;
(statearr_33183_33200[(1)] = (8));

} else {
var statearr_33184_33201 = state_33176__$1;
(statearr_33184_33201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (3))){
var inst_33174 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33176__$1,inst_33174);
} else {
if((state_val_33177 === (2))){
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33176__$1,(4),ch);
} else {
if((state_val_33177 === (11))){
var inst_33166 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
var statearr_33185_33202 = state_33176__$1;
(statearr_33185_33202[(2)] = inst_33166);

(statearr_33185_33202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (9))){
var state_33176__$1 = state_33176;
var statearr_33186_33203 = state_33176__$1;
(statearr_33186_33203[(2)] = null);

(statearr_33186_33203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (5))){
var inst_33161 = cljs.core.async.close_BANG_.call(null,out);
var state_33176__$1 = state_33176;
var statearr_33187_33204 = state_33176__$1;
(statearr_33187_33204[(2)] = inst_33161);

(statearr_33187_33204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (10))){
var inst_33169 = (state_33176[(2)]);
var state_33176__$1 = (function (){var statearr_33188 = state_33176;
(statearr_33188[(8)] = inst_33169);

return statearr_33188;
})();
var statearr_33189_33205 = state_33176__$1;
(statearr_33189_33205[(2)] = null);

(statearr_33189_33205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (8))){
var inst_33158 = (state_33176[(7)]);
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33176__$1,(11),out,inst_33158);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___33195,out))
;
return ((function (switch__31582__auto__,c__31670__auto___33195,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_33190 = [null,null,null,null,null,null,null,null,null];
(statearr_33190[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_33190[(1)] = (1));

return statearr_33190;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_33176){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_33176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e33191){if((e33191 instanceof Object)){
var ex__31586__auto__ = e33191;
var statearr_33192_33206 = state_33176;
(statearr_33192_33206[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33207 = state_33176;
state_33176 = G__33207;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_33176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_33176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___33195,out))
})();
var state__31672__auto__ = (function (){var statearr_33193 = f__31671__auto__.call(null);
(statearr_33193[(6)] = c__31670__auto___33195);

return statearr_33193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___33195,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33209 = arguments.length;
switch (G__33209) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto__){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto__){
return (function (state_33272){
var state_val_33273 = (state_33272[(1)]);
if((state_val_33273 === (7))){
var inst_33268 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33274_33312 = state_33272__$1;
(statearr_33274_33312[(2)] = inst_33268);

(statearr_33274_33312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (20))){
var inst_33238 = (state_33272[(7)]);
var inst_33249 = (state_33272[(2)]);
var inst_33250 = cljs.core.next.call(null,inst_33238);
var inst_33224 = inst_33250;
var inst_33225 = null;
var inst_33226 = (0);
var inst_33227 = (0);
var state_33272__$1 = (function (){var statearr_33275 = state_33272;
(statearr_33275[(8)] = inst_33225);

(statearr_33275[(9)] = inst_33249);

(statearr_33275[(10)] = inst_33224);

(statearr_33275[(11)] = inst_33227);

(statearr_33275[(12)] = inst_33226);

return statearr_33275;
})();
var statearr_33276_33313 = state_33272__$1;
(statearr_33276_33313[(2)] = null);

(statearr_33276_33313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (1))){
var state_33272__$1 = state_33272;
var statearr_33277_33314 = state_33272__$1;
(statearr_33277_33314[(2)] = null);

(statearr_33277_33314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (4))){
var inst_33213 = (state_33272[(13)]);
var inst_33213__$1 = (state_33272[(2)]);
var inst_33214 = (inst_33213__$1 == null);
var state_33272__$1 = (function (){var statearr_33278 = state_33272;
(statearr_33278[(13)] = inst_33213__$1);

return statearr_33278;
})();
if(cljs.core.truth_(inst_33214)){
var statearr_33279_33315 = state_33272__$1;
(statearr_33279_33315[(1)] = (5));

} else {
var statearr_33280_33316 = state_33272__$1;
(statearr_33280_33316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (15))){
var state_33272__$1 = state_33272;
var statearr_33284_33317 = state_33272__$1;
(statearr_33284_33317[(2)] = null);

(statearr_33284_33317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (21))){
var state_33272__$1 = state_33272;
var statearr_33285_33318 = state_33272__$1;
(statearr_33285_33318[(2)] = null);

(statearr_33285_33318[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (13))){
var inst_33225 = (state_33272[(8)]);
var inst_33224 = (state_33272[(10)]);
var inst_33227 = (state_33272[(11)]);
var inst_33226 = (state_33272[(12)]);
var inst_33234 = (state_33272[(2)]);
var inst_33235 = (inst_33227 + (1));
var tmp33281 = inst_33225;
var tmp33282 = inst_33224;
var tmp33283 = inst_33226;
var inst_33224__$1 = tmp33282;
var inst_33225__$1 = tmp33281;
var inst_33226__$1 = tmp33283;
var inst_33227__$1 = inst_33235;
var state_33272__$1 = (function (){var statearr_33286 = state_33272;
(statearr_33286[(8)] = inst_33225__$1);

(statearr_33286[(10)] = inst_33224__$1);

(statearr_33286[(11)] = inst_33227__$1);

(statearr_33286[(12)] = inst_33226__$1);

(statearr_33286[(14)] = inst_33234);

return statearr_33286;
})();
var statearr_33287_33319 = state_33272__$1;
(statearr_33287_33319[(2)] = null);

(statearr_33287_33319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (22))){
var state_33272__$1 = state_33272;
var statearr_33288_33320 = state_33272__$1;
(statearr_33288_33320[(2)] = null);

(statearr_33288_33320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (6))){
var inst_33213 = (state_33272[(13)]);
var inst_33222 = f.call(null,inst_33213);
var inst_33223 = cljs.core.seq.call(null,inst_33222);
var inst_33224 = inst_33223;
var inst_33225 = null;
var inst_33226 = (0);
var inst_33227 = (0);
var state_33272__$1 = (function (){var statearr_33289 = state_33272;
(statearr_33289[(8)] = inst_33225);

(statearr_33289[(10)] = inst_33224);

(statearr_33289[(11)] = inst_33227);

(statearr_33289[(12)] = inst_33226);

return statearr_33289;
})();
var statearr_33290_33321 = state_33272__$1;
(statearr_33290_33321[(2)] = null);

(statearr_33290_33321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (17))){
var inst_33238 = (state_33272[(7)]);
var inst_33242 = cljs.core.chunk_first.call(null,inst_33238);
var inst_33243 = cljs.core.chunk_rest.call(null,inst_33238);
var inst_33244 = cljs.core.count.call(null,inst_33242);
var inst_33224 = inst_33243;
var inst_33225 = inst_33242;
var inst_33226 = inst_33244;
var inst_33227 = (0);
var state_33272__$1 = (function (){var statearr_33291 = state_33272;
(statearr_33291[(8)] = inst_33225);

(statearr_33291[(10)] = inst_33224);

(statearr_33291[(11)] = inst_33227);

(statearr_33291[(12)] = inst_33226);

return statearr_33291;
})();
var statearr_33292_33322 = state_33272__$1;
(statearr_33292_33322[(2)] = null);

(statearr_33292_33322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (3))){
var inst_33270 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33272__$1,inst_33270);
} else {
if((state_val_33273 === (12))){
var inst_33258 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33293_33323 = state_33272__$1;
(statearr_33293_33323[(2)] = inst_33258);

(statearr_33293_33323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (2))){
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33272__$1,(4),in$);
} else {
if((state_val_33273 === (23))){
var inst_33266 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33294_33324 = state_33272__$1;
(statearr_33294_33324[(2)] = inst_33266);

(statearr_33294_33324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (19))){
var inst_33253 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33295_33325 = state_33272__$1;
(statearr_33295_33325[(2)] = inst_33253);

(statearr_33295_33325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (11))){
var inst_33224 = (state_33272[(10)]);
var inst_33238 = (state_33272[(7)]);
var inst_33238__$1 = cljs.core.seq.call(null,inst_33224);
var state_33272__$1 = (function (){var statearr_33296 = state_33272;
(statearr_33296[(7)] = inst_33238__$1);

return statearr_33296;
})();
if(inst_33238__$1){
var statearr_33297_33326 = state_33272__$1;
(statearr_33297_33326[(1)] = (14));

} else {
var statearr_33298_33327 = state_33272__$1;
(statearr_33298_33327[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (9))){
var inst_33260 = (state_33272[(2)]);
var inst_33261 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33272__$1 = (function (){var statearr_33299 = state_33272;
(statearr_33299[(15)] = inst_33260);

return statearr_33299;
})();
if(cljs.core.truth_(inst_33261)){
var statearr_33300_33328 = state_33272__$1;
(statearr_33300_33328[(1)] = (21));

} else {
var statearr_33301_33329 = state_33272__$1;
(statearr_33301_33329[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (5))){
var inst_33216 = cljs.core.async.close_BANG_.call(null,out);
var state_33272__$1 = state_33272;
var statearr_33302_33330 = state_33272__$1;
(statearr_33302_33330[(2)] = inst_33216);

(statearr_33302_33330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (14))){
var inst_33238 = (state_33272[(7)]);
var inst_33240 = cljs.core.chunked_seq_QMARK_.call(null,inst_33238);
var state_33272__$1 = state_33272;
if(inst_33240){
var statearr_33303_33331 = state_33272__$1;
(statearr_33303_33331[(1)] = (17));

} else {
var statearr_33304_33332 = state_33272__$1;
(statearr_33304_33332[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (16))){
var inst_33256 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33305_33333 = state_33272__$1;
(statearr_33305_33333[(2)] = inst_33256);

(statearr_33305_33333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (10))){
var inst_33225 = (state_33272[(8)]);
var inst_33227 = (state_33272[(11)]);
var inst_33232 = cljs.core._nth.call(null,inst_33225,inst_33227);
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33272__$1,(13),out,inst_33232);
} else {
if((state_val_33273 === (18))){
var inst_33238 = (state_33272[(7)]);
var inst_33247 = cljs.core.first.call(null,inst_33238);
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33272__$1,(20),out,inst_33247);
} else {
if((state_val_33273 === (8))){
var inst_33227 = (state_33272[(11)]);
var inst_33226 = (state_33272[(12)]);
var inst_33229 = (inst_33227 < inst_33226);
var inst_33230 = inst_33229;
var state_33272__$1 = state_33272;
if(cljs.core.truth_(inst_33230)){
var statearr_33306_33334 = state_33272__$1;
(statearr_33306_33334[(1)] = (10));

} else {
var statearr_33307_33335 = state_33272__$1;
(statearr_33307_33335[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto__))
;
return ((function (switch__31582__auto__,c__31670__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_33308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33308[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__);

(statearr_33308[(1)] = (1));

return statearr_33308;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____1 = (function (state_33272){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_33272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e33309){if((e33309 instanceof Object)){
var ex__31586__auto__ = e33309;
var statearr_33310_33336 = state_33272;
(statearr_33310_33336[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33337 = state_33272;
state_33272 = G__33337;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__ = function(state_33272){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____1.call(this,state_33272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto__))
})();
var state__31672__auto__ = (function (){var statearr_33311 = f__31671__auto__.call(null);
(statearr_33311[(6)] = c__31670__auto__);

return statearr_33311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto__))
);

return c__31670__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33339 = arguments.length;
switch (G__33339) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33342 = arguments.length;
switch (G__33342) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31670__auto___33392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___33392,out){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___33392,out){
return (function (state_33369){
var state_val_33370 = (state_33369[(1)]);
if((state_val_33370 === (7))){
var inst_33364 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33371_33393 = state_33369__$1;
(statearr_33371_33393[(2)] = inst_33364);

(statearr_33371_33393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (1))){
var inst_33346 = null;
var state_33369__$1 = (function (){var statearr_33372 = state_33369;
(statearr_33372[(7)] = inst_33346);

return statearr_33372;
})();
var statearr_33373_33394 = state_33369__$1;
(statearr_33373_33394[(2)] = null);

(statearr_33373_33394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (4))){
var inst_33349 = (state_33369[(8)]);
var inst_33349__$1 = (state_33369[(2)]);
var inst_33350 = (inst_33349__$1 == null);
var inst_33351 = cljs.core.not.call(null,inst_33350);
var state_33369__$1 = (function (){var statearr_33374 = state_33369;
(statearr_33374[(8)] = inst_33349__$1);

return statearr_33374;
})();
if(inst_33351){
var statearr_33375_33395 = state_33369__$1;
(statearr_33375_33395[(1)] = (5));

} else {
var statearr_33376_33396 = state_33369__$1;
(statearr_33376_33396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (6))){
var state_33369__$1 = state_33369;
var statearr_33377_33397 = state_33369__$1;
(statearr_33377_33397[(2)] = null);

(statearr_33377_33397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (3))){
var inst_33366 = (state_33369[(2)]);
var inst_33367 = cljs.core.async.close_BANG_.call(null,out);
var state_33369__$1 = (function (){var statearr_33378 = state_33369;
(statearr_33378[(9)] = inst_33366);

return statearr_33378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33369__$1,inst_33367);
} else {
if((state_val_33370 === (2))){
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33369__$1,(4),ch);
} else {
if((state_val_33370 === (11))){
var inst_33349 = (state_33369[(8)]);
var inst_33358 = (state_33369[(2)]);
var inst_33346 = inst_33349;
var state_33369__$1 = (function (){var statearr_33379 = state_33369;
(statearr_33379[(7)] = inst_33346);

(statearr_33379[(10)] = inst_33358);

return statearr_33379;
})();
var statearr_33380_33398 = state_33369__$1;
(statearr_33380_33398[(2)] = null);

(statearr_33380_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (9))){
var inst_33349 = (state_33369[(8)]);
var state_33369__$1 = state_33369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33369__$1,(11),out,inst_33349);
} else {
if((state_val_33370 === (5))){
var inst_33346 = (state_33369[(7)]);
var inst_33349 = (state_33369[(8)]);
var inst_33353 = cljs.core._EQ_.call(null,inst_33349,inst_33346);
var state_33369__$1 = state_33369;
if(inst_33353){
var statearr_33382_33399 = state_33369__$1;
(statearr_33382_33399[(1)] = (8));

} else {
var statearr_33383_33400 = state_33369__$1;
(statearr_33383_33400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (10))){
var inst_33361 = (state_33369[(2)]);
var state_33369__$1 = state_33369;
var statearr_33384_33401 = state_33369__$1;
(statearr_33384_33401[(2)] = inst_33361);

(statearr_33384_33401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33370 === (8))){
var inst_33346 = (state_33369[(7)]);
var tmp33381 = inst_33346;
var inst_33346__$1 = tmp33381;
var state_33369__$1 = (function (){var statearr_33385 = state_33369;
(statearr_33385[(7)] = inst_33346__$1);

return statearr_33385;
})();
var statearr_33386_33402 = state_33369__$1;
(statearr_33386_33402[(2)] = null);

(statearr_33386_33402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___33392,out))
;
return ((function (switch__31582__auto__,c__31670__auto___33392,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_33387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33387[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_33387[(1)] = (1));

return statearr_33387;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_33369){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_33369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e33388){if((e33388 instanceof Object)){
var ex__31586__auto__ = e33388;
var statearr_33389_33403 = state_33369;
(statearr_33389_33403[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33404 = state_33369;
state_33369 = G__33404;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_33369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_33369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___33392,out))
})();
var state__31672__auto__ = (function (){var statearr_33390 = f__31671__auto__.call(null);
(statearr_33390[(6)] = c__31670__auto___33392);

return statearr_33390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___33392,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33406 = arguments.length;
switch (G__33406) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31670__auto___33472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___33472,out){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___33472,out){
return (function (state_33444){
var state_val_33445 = (state_33444[(1)]);
if((state_val_33445 === (7))){
var inst_33440 = (state_33444[(2)]);
var state_33444__$1 = state_33444;
var statearr_33446_33473 = state_33444__$1;
(statearr_33446_33473[(2)] = inst_33440);

(statearr_33446_33473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (1))){
var inst_33407 = (new Array(n));
var inst_33408 = inst_33407;
var inst_33409 = (0);
var state_33444__$1 = (function (){var statearr_33447 = state_33444;
(statearr_33447[(7)] = inst_33409);

(statearr_33447[(8)] = inst_33408);

return statearr_33447;
})();
var statearr_33448_33474 = state_33444__$1;
(statearr_33448_33474[(2)] = null);

(statearr_33448_33474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (4))){
var inst_33412 = (state_33444[(9)]);
var inst_33412__$1 = (state_33444[(2)]);
var inst_33413 = (inst_33412__$1 == null);
var inst_33414 = cljs.core.not.call(null,inst_33413);
var state_33444__$1 = (function (){var statearr_33449 = state_33444;
(statearr_33449[(9)] = inst_33412__$1);

return statearr_33449;
})();
if(inst_33414){
var statearr_33450_33475 = state_33444__$1;
(statearr_33450_33475[(1)] = (5));

} else {
var statearr_33451_33476 = state_33444__$1;
(statearr_33451_33476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (15))){
var inst_33434 = (state_33444[(2)]);
var state_33444__$1 = state_33444;
var statearr_33452_33477 = state_33444__$1;
(statearr_33452_33477[(2)] = inst_33434);

(statearr_33452_33477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (13))){
var state_33444__$1 = state_33444;
var statearr_33453_33478 = state_33444__$1;
(statearr_33453_33478[(2)] = null);

(statearr_33453_33478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (6))){
var inst_33409 = (state_33444[(7)]);
var inst_33430 = (inst_33409 > (0));
var state_33444__$1 = state_33444;
if(cljs.core.truth_(inst_33430)){
var statearr_33454_33479 = state_33444__$1;
(statearr_33454_33479[(1)] = (12));

} else {
var statearr_33455_33480 = state_33444__$1;
(statearr_33455_33480[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (3))){
var inst_33442 = (state_33444[(2)]);
var state_33444__$1 = state_33444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33444__$1,inst_33442);
} else {
if((state_val_33445 === (12))){
var inst_33408 = (state_33444[(8)]);
var inst_33432 = cljs.core.vec.call(null,inst_33408);
var state_33444__$1 = state_33444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33444__$1,(15),out,inst_33432);
} else {
if((state_val_33445 === (2))){
var state_33444__$1 = state_33444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33444__$1,(4),ch);
} else {
if((state_val_33445 === (11))){
var inst_33424 = (state_33444[(2)]);
var inst_33425 = (new Array(n));
var inst_33408 = inst_33425;
var inst_33409 = (0);
var state_33444__$1 = (function (){var statearr_33456 = state_33444;
(statearr_33456[(7)] = inst_33409);

(statearr_33456[(8)] = inst_33408);

(statearr_33456[(10)] = inst_33424);

return statearr_33456;
})();
var statearr_33457_33481 = state_33444__$1;
(statearr_33457_33481[(2)] = null);

(statearr_33457_33481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (9))){
var inst_33408 = (state_33444[(8)]);
var inst_33422 = cljs.core.vec.call(null,inst_33408);
var state_33444__$1 = state_33444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33444__$1,(11),out,inst_33422);
} else {
if((state_val_33445 === (5))){
var inst_33409 = (state_33444[(7)]);
var inst_33408 = (state_33444[(8)]);
var inst_33417 = (state_33444[(11)]);
var inst_33412 = (state_33444[(9)]);
var inst_33416 = (inst_33408[inst_33409] = inst_33412);
var inst_33417__$1 = (inst_33409 + (1));
var inst_33418 = (inst_33417__$1 < n);
var state_33444__$1 = (function (){var statearr_33458 = state_33444;
(statearr_33458[(11)] = inst_33417__$1);

(statearr_33458[(12)] = inst_33416);

return statearr_33458;
})();
if(cljs.core.truth_(inst_33418)){
var statearr_33459_33482 = state_33444__$1;
(statearr_33459_33482[(1)] = (8));

} else {
var statearr_33460_33483 = state_33444__$1;
(statearr_33460_33483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (14))){
var inst_33437 = (state_33444[(2)]);
var inst_33438 = cljs.core.async.close_BANG_.call(null,out);
var state_33444__$1 = (function (){var statearr_33462 = state_33444;
(statearr_33462[(13)] = inst_33437);

return statearr_33462;
})();
var statearr_33463_33484 = state_33444__$1;
(statearr_33463_33484[(2)] = inst_33438);

(statearr_33463_33484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (10))){
var inst_33428 = (state_33444[(2)]);
var state_33444__$1 = state_33444;
var statearr_33464_33485 = state_33444__$1;
(statearr_33464_33485[(2)] = inst_33428);

(statearr_33464_33485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (8))){
var inst_33408 = (state_33444[(8)]);
var inst_33417 = (state_33444[(11)]);
var tmp33461 = inst_33408;
var inst_33408__$1 = tmp33461;
var inst_33409 = inst_33417;
var state_33444__$1 = (function (){var statearr_33465 = state_33444;
(statearr_33465[(7)] = inst_33409);

(statearr_33465[(8)] = inst_33408__$1);

return statearr_33465;
})();
var statearr_33466_33486 = state_33444__$1;
(statearr_33466_33486[(2)] = null);

(statearr_33466_33486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___33472,out))
;
return ((function (switch__31582__auto__,c__31670__auto___33472,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_33467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33467[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_33467[(1)] = (1));

return statearr_33467;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_33444){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_33444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e33468){if((e33468 instanceof Object)){
var ex__31586__auto__ = e33468;
var statearr_33469_33487 = state_33444;
(statearr_33469_33487[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33488 = state_33444;
state_33444 = G__33488;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_33444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_33444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___33472,out))
})();
var state__31672__auto__ = (function (){var statearr_33470 = f__31671__auto__.call(null);
(statearr_33470[(6)] = c__31670__auto___33472);

return statearr_33470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___33472,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33490 = arguments.length;
switch (G__33490) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31670__auto___33560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31670__auto___33560,out){
return (function (){
var f__31671__auto__ = (function (){var switch__31582__auto__ = ((function (c__31670__auto___33560,out){
return (function (state_33532){
var state_val_33533 = (state_33532[(1)]);
if((state_val_33533 === (7))){
var inst_33528 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
var statearr_33534_33561 = state_33532__$1;
(statearr_33534_33561[(2)] = inst_33528);

(statearr_33534_33561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (1))){
var inst_33491 = [];
var inst_33492 = inst_33491;
var inst_33493 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33532__$1 = (function (){var statearr_33535 = state_33532;
(statearr_33535[(7)] = inst_33492);

(statearr_33535[(8)] = inst_33493);

return statearr_33535;
})();
var statearr_33536_33562 = state_33532__$1;
(statearr_33536_33562[(2)] = null);

(statearr_33536_33562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (4))){
var inst_33496 = (state_33532[(9)]);
var inst_33496__$1 = (state_33532[(2)]);
var inst_33497 = (inst_33496__$1 == null);
var inst_33498 = cljs.core.not.call(null,inst_33497);
var state_33532__$1 = (function (){var statearr_33537 = state_33532;
(statearr_33537[(9)] = inst_33496__$1);

return statearr_33537;
})();
if(inst_33498){
var statearr_33538_33563 = state_33532__$1;
(statearr_33538_33563[(1)] = (5));

} else {
var statearr_33539_33564 = state_33532__$1;
(statearr_33539_33564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (15))){
var inst_33522 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
var statearr_33540_33565 = state_33532__$1;
(statearr_33540_33565[(2)] = inst_33522);

(statearr_33540_33565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (13))){
var state_33532__$1 = state_33532;
var statearr_33541_33566 = state_33532__$1;
(statearr_33541_33566[(2)] = null);

(statearr_33541_33566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (6))){
var inst_33492 = (state_33532[(7)]);
var inst_33517 = inst_33492.length;
var inst_33518 = (inst_33517 > (0));
var state_33532__$1 = state_33532;
if(cljs.core.truth_(inst_33518)){
var statearr_33542_33567 = state_33532__$1;
(statearr_33542_33567[(1)] = (12));

} else {
var statearr_33543_33568 = state_33532__$1;
(statearr_33543_33568[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (3))){
var inst_33530 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33532__$1,inst_33530);
} else {
if((state_val_33533 === (12))){
var inst_33492 = (state_33532[(7)]);
var inst_33520 = cljs.core.vec.call(null,inst_33492);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33532__$1,(15),out,inst_33520);
} else {
if((state_val_33533 === (2))){
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33532__$1,(4),ch);
} else {
if((state_val_33533 === (11))){
var inst_33500 = (state_33532[(10)]);
var inst_33496 = (state_33532[(9)]);
var inst_33510 = (state_33532[(2)]);
var inst_33511 = [];
var inst_33512 = inst_33511.push(inst_33496);
var inst_33492 = inst_33511;
var inst_33493 = inst_33500;
var state_33532__$1 = (function (){var statearr_33544 = state_33532;
(statearr_33544[(11)] = inst_33512);

(statearr_33544[(7)] = inst_33492);

(statearr_33544[(12)] = inst_33510);

(statearr_33544[(8)] = inst_33493);

return statearr_33544;
})();
var statearr_33545_33569 = state_33532__$1;
(statearr_33545_33569[(2)] = null);

(statearr_33545_33569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (9))){
var inst_33492 = (state_33532[(7)]);
var inst_33508 = cljs.core.vec.call(null,inst_33492);
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33532__$1,(11),out,inst_33508);
} else {
if((state_val_33533 === (5))){
var inst_33500 = (state_33532[(10)]);
var inst_33496 = (state_33532[(9)]);
var inst_33493 = (state_33532[(8)]);
var inst_33500__$1 = f.call(null,inst_33496);
var inst_33501 = cljs.core._EQ_.call(null,inst_33500__$1,inst_33493);
var inst_33502 = cljs.core.keyword_identical_QMARK_.call(null,inst_33493,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33503 = (inst_33501) || (inst_33502);
var state_33532__$1 = (function (){var statearr_33546 = state_33532;
(statearr_33546[(10)] = inst_33500__$1);

return statearr_33546;
})();
if(cljs.core.truth_(inst_33503)){
var statearr_33547_33570 = state_33532__$1;
(statearr_33547_33570[(1)] = (8));

} else {
var statearr_33548_33571 = state_33532__$1;
(statearr_33548_33571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (14))){
var inst_33525 = (state_33532[(2)]);
var inst_33526 = cljs.core.async.close_BANG_.call(null,out);
var state_33532__$1 = (function (){var statearr_33550 = state_33532;
(statearr_33550[(13)] = inst_33525);

return statearr_33550;
})();
var statearr_33551_33572 = state_33532__$1;
(statearr_33551_33572[(2)] = inst_33526);

(statearr_33551_33572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (10))){
var inst_33515 = (state_33532[(2)]);
var state_33532__$1 = state_33532;
var statearr_33552_33573 = state_33532__$1;
(statearr_33552_33573[(2)] = inst_33515);

(statearr_33552_33573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33533 === (8))){
var inst_33492 = (state_33532[(7)]);
var inst_33500 = (state_33532[(10)]);
var inst_33496 = (state_33532[(9)]);
var inst_33505 = inst_33492.push(inst_33496);
var tmp33549 = inst_33492;
var inst_33492__$1 = tmp33549;
var inst_33493 = inst_33500;
var state_33532__$1 = (function (){var statearr_33553 = state_33532;
(statearr_33553[(7)] = inst_33492__$1);

(statearr_33553[(14)] = inst_33505);

(statearr_33553[(8)] = inst_33493);

return statearr_33553;
})();
var statearr_33554_33574 = state_33532__$1;
(statearr_33554_33574[(2)] = null);

(statearr_33554_33574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31670__auto___33560,out))
;
return ((function (switch__31582__auto__,c__31670__auto___33560,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_33555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33555[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_33555[(1)] = (1));

return statearr_33555;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_33532){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_33532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e33556){if((e33556 instanceof Object)){
var ex__31586__auto__ = e33556;
var statearr_33557_33575 = state_33532;
(statearr_33557_33575[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33576 = state_33532;
state_33532 = G__33576;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_33532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_33532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31670__auto___33560,out))
})();
var state__31672__auto__ = (function (){var statearr_33558 = f__31671__auto__.call(null);
(statearr_33558[(6)] = c__31670__auto___33560);

return statearr_33558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31672__auto__);
});})(c__31670__auto___33560,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521204774364
