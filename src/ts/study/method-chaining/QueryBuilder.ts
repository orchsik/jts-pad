class QueryBuilder {
  private collection: string;
  private pageNumber: number = 1;
  private itemsPerPage: number = 100;
  private orderByFields: string[] = [];

  from(collection: string): this {
    this.collection = collection;
    return this;
  }

  page(number: number, itemsPerPage: number = 100): this {
    this.pageNumber = number;
    this.itemsPerPage = itemsPerPage;
    return this;
  }

  orderBy(...fileds: string[]): this {
    this.orderByFields = fileds;
    return this;
  }

  build(): void {
    console.log({
      collection: this.collection,
      pageNumber: this.pageNumber,
      itemsPerPage: this.itemsPerPage,
      orderByFields: this.orderByFields,
    });
  }
}

const queryBuilder = new QueryBuilder();
queryBuilder
  .from('users')
  .page(1, 100)
  .orderBy('firstName', 'lastName')
  .build();

/**
 * 
class QueryBuilder {
  private collection: string;
  private pageNumber: number = 1;
  private itemsPerPage: number = 100;
  private orderByFields: string[] = [];

  from(collection: string): void {
    this.collection = collection;
  }

  page(number: number, itemsPerPage: number = 100): void {
    this.pageNumber = number;
    this.itemsPerPage = itemsPerPage;
  }

  orderBy(...fileds: string[]): void {
    this.orderByFields = fileds;
  }

  build(): void {
    console.log({
      collection: this.collection,
      pageNumber: this.pageNumber,
      itemsPerPage: this.itemsPerPage,
      orderByFields: this.orderByFields,
    });
  }
}

const queryBuilder = new QueryBuilder();
queryBuilder.from('users');
queryBuilder.page(1, 100);
queryBuilder.orderBy('firstName', 'lastName');
queryBuilder.build();
 */
