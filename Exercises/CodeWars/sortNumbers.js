const solution = nums => {
    if (nums === null)
        return [];
    const sorted = nums.sort( (a,b)=> a - b);
    return sorted;
};
