interface HistoryList {
  createdAt: string;
  name: string;
  status: string;
}

export default class HistoryModel {
  public lists: HistoryList[];

  constructor() {
    function generateRandomDate(start: Date, end: Date) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime()),
      )
        .toISOString()
        .split("T")[0];
    }

    const listNames = [
      "Grocery List",
      "Birthday Grocery List",
      "Christmas Grocery List",
      "Thanksgiving Grocery List",
      "New Year Grocery List",
      "Easter Grocery List",
      "Halloween Grocery List",
      "Party Grocery List",
      "Weekly Grocery List",
      "Monthly Grocery List",
    ];

    const statuses = ["completed", "cancelled"];

    function generateHistory(maxList: number) {
      return Array.from(
        { length: Math.floor(Math.random() * maxList) },
        (_, i) => ({
          createdAt: generateRandomDate(
            new Date(2021, 1, 1),
            new Date(2021, 12, 31),
          ),
          name: listNames[Math.floor(Math.random() * listNames.length)],
          status: statuses[Math.floor(Math.random() * statuses.length)],
        }),
      );
    }

    this.lists = this.listsSortedByDate(generateHistory(20));
  }

  private listsSortedByDate(lists: HistoryList[]) {
    return lists.sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);

      if (aDate < bDate) {
        return -1;
      }
      if (aDate > bDate) {
        return 1;
      }
      return 0;
    });
  }
}
