export const formatter = (number) => {
    return new Intl.NumberFormat("vi-en",
        {
            style: "currency",
            currency: "VND"
        }).format(number);

}