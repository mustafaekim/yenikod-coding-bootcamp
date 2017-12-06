var a;

// you can exit a loop with break, or skip to the next iteration with continue
a = 0;
while (true) {
    a++;
    if (a > 3) {
        break;
    }
   
    if (a % 2 == 0) {
        continue;
    }

    console.log(a);
}