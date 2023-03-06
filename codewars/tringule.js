const buldtriangle = (l1, l2, l3) => {
    if((l1 == 0) || (l2 == 0) || (l3 == 0)) return false;

    if((l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2)){
        return true;
    }

    return false;
};


