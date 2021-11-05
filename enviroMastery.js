function evil(xs) {
    function inner(x) {
        const b = "nonsense";
        let c = x => inner(2);
        if (x === true) {
            return a => a === b ? c : inner(a);
        }
    }
    function mapper(xs) {
        return is_null(xs)
               ? null
               : pair(inner(head(xs)), tail(xs));
    }
    return mapper(xs);
}

const xs = list(true, true, 1, "true");
set_head(xs, evil(xs));
display(ls);