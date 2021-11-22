import { TestBed, fakeAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';

import { PaymentTransactionStatus } from '../models/payment-transaction-status';
import { TransactionsApiService } from './transactions-api.service';
import { TransactionsControllerService } from './transactions-controller.service';
import { TransactionsConverterService } from './transactions-converter.service';

import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;

const paginatedMock = {
  currentPage: 0,
  numberOfPages: 1,
  items: [],
  hasNext: false,
  pageSize: 5,
  totalNumberOfItems: 1,
};

describe('TransactionsControllerService', () => {
  let mockApi: SpyObj<TransactionsApiService>;
  let mockStore: Store;
  let mockConverter: TransactionsConverterService;
  let service: TransactionsControllerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TransactionsControllerService,
        {
          provide: TransactionsApiService,
          useValue: createSpyObj('TransactionsApiService', ['getPayments']),
        },
        {
          provide: TransactionsConverterService,
          useValue: createSpyObj('TransactionsConverterService', ['fromPaginated']),
        },
        {
          provide: Store,
          useValue: createSpyObj('Store', ['dispatch']),
        },
      ],
    }).compileComponents();

    mockApi = TestBed.inject(TransactionsApiService) as SpyObj<TransactionsApiService>;
    mockApi.getPayments.and.returnValue(of(paginatedMock));

    mockStore = TestBed.inject(Store);

    mockConverter = TestBed.inject(TransactionsConverterService) as SpyObj<TransactionsConverterService>;

    service = TestBed.inject(TransactionsControllerService);
  });

  it('should create the service and fetch initial data', fakeAsync(() => {
    expect(service).toBeTruthy();
    expect(mockApi.getPayments).toHaveBeenCalled();
    expect(mockApi.getPayments).toHaveBeenCalledWith({
      page: 0,
      size: 5,
      status: null,
    });
  }));

  it('should emit new pagingParams when onPageChange is called', done => {
    service.onPageChange(1);

    service.pagingParams$.subscribe(params => {
      expect(params).toEqual({
        page: 1,
        size: 5,
        status: null,
      });
      done();
    });
  });

  it('should emit new pagingParams when onStatusChange is called', done => {
    service.onStatusChange(PaymentTransactionStatus.SETTLED);

    service.pagingParams$.subscribe(params => {
      expect(params).toEqual({
        page: 0,
        size: 5,
        status: PaymentTransactionStatus.SETTLED,
      });
      done();
    });
  });
});
