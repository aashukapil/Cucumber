package implementation;

public class Checkout{
  int count;
  int price;

  public void add(int count, int price){
    this.count = count;
    this.price = price;
  }

  public int total() {
    return count * price;
  }
}
