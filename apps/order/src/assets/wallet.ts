/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { StringValue } from "../../../../google/protobuf/wrappers";
import Long = require("long");

export const protobufPackage = "wallet";

export enum PaymentMethod {
  BANK_TRANSFER = 0,
  CREDIT_CARD = 1,
  BANK_USSD = 2,
  APP_PAY = 3,
  UNRECOGNIZED = -1,
}

export function paymentMethodFromJSON(object: any): PaymentMethod {
  switch (object) {
    case 0:
    case "BANK_TRANSFER":
      return PaymentMethod.BANK_TRANSFER;
    case 1:
    case "CREDIT_CARD":
      return PaymentMethod.CREDIT_CARD;
    case 2:
    case "BANK_USSD":
      return PaymentMethod.BANK_USSD;
    case 3:
    case "APP_PAY":
      return PaymentMethod.APP_PAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentMethod.UNRECOGNIZED;
  }
}

export function paymentMethodToJSON(object: PaymentMethod): string {
  switch (object) {
    case PaymentMethod.BANK_TRANSFER:
      return "BANK_TRANSFER";
    case PaymentMethod.CREDIT_CARD:
      return "CREDIT_CARD";
    case PaymentMethod.BANK_USSD:
      return "BANK_USSD";
    case PaymentMethod.APP_PAY:
      return "APP_PAY";
    case PaymentMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TransactionType {
  DEPOSIT = 0,
  WITHDRAWAL = 1,
  TRANSFER = 2,
  REFUND = 3,
  UNRECOGNIZED = -1,
}

export function transactionTypeFromJSON(object: any): TransactionType {
  switch (object) {
    case 0:
    case "DEPOSIT":
      return TransactionType.DEPOSIT;
    case 1:
    case "WITHDRAWAL":
      return TransactionType.WITHDRAWAL;
    case 2:
    case "TRANSFER":
      return TransactionType.TRANSFER;
    case 3:
    case "REFUND":
      return TransactionType.REFUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransactionType.UNRECOGNIZED;
  }
}

export function transactionTypeToJSON(object: TransactionType): string {
  switch (object) {
    case TransactionType.DEPOSIT:
      return "DEPOSIT";
    case TransactionType.WITHDRAWAL:
      return "WITHDRAWAL";
    case TransactionType.TRANSFER:
      return "TRANSFER";
    case TransactionType.REFUND:
      return "REFUND";
    case TransactionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PaymentProvider {
  BANI = 0,
  PAYSTACK = 1,
  WALLET_PAY = 2,
  BANK = 3,
  UNRECOGNIZED = -1,
}

export function paymentProviderFromJSON(object: any): PaymentProvider {
  switch (object) {
    case 0:
    case "BANI":
      return PaymentProvider.BANI;
    case 1:
    case "PAYSTACK":
      return PaymentProvider.PAYSTACK;
    case 2:
    case "WALLET_PAY":
      return PaymentProvider.WALLET_PAY;
    case 3:
    case "BANK":
      return PaymentProvider.BANK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentProvider.UNRECOGNIZED;
  }
}

export function paymentProviderToJSON(object: PaymentProvider): string {
  switch (object) {
    case PaymentProvider.BANI:
      return "BANI";
    case PaymentProvider.PAYSTACK:
      return "PAYSTACK";
    case PaymentProvider.WALLET_PAY:
      return "WALLET_PAY";
    case PaymentProvider.BANK:
      return "BANK";
    case PaymentProvider.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TransactionStatus {
  PENDING = 0,
  COMPLETED = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function transactionStatusFromJSON(object: any): TransactionStatus {
  switch (object) {
    case 0:
    case "PENDING":
      return TransactionStatus.PENDING;
    case 1:
    case "COMPLETED":
      return TransactionStatus.COMPLETED;
    case 2:
    case "FAILED":
      return TransactionStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransactionStatus.UNRECOGNIZED;
  }
}

export function transactionStatusToJSON(object: TransactionStatus): string {
  switch (object) {
    case TransactionStatus.PENDING:
      return "PENDING";
    case TransactionStatus.COMPLETED:
      return "COMPLETED";
    case TransactionStatus.FAILED:
      return "FAILED";
    case TransactionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SystemPaymentPurpose {
  FUND_WALLET = 0,
  FUND_ORDER = 1,
  UNRECOGNIZED = -1,
}

export function systemPaymentPurposeFromJSON(object: any): SystemPaymentPurpose {
  switch (object) {
    case 0:
    case "FUND_WALLET":
      return SystemPaymentPurpose.FUND_WALLET;
    case 1:
    case "FUND_ORDER":
      return SystemPaymentPurpose.FUND_ORDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SystemPaymentPurpose.UNRECOGNIZED;
  }
}

export function systemPaymentPurposeToJSON(object: SystemPaymentPurpose): string {
  switch (object) {
    case SystemPaymentPurpose.FUND_WALLET:
      return "FUND_WALLET";
    case SystemPaymentPurpose.FUND_ORDER:
      return "FUND_ORDER";
    case SystemPaymentPurpose.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface getUserTransactionRequest {
  userWalletId: string;
  TransactionType?: TransactionType | undefined;
}

export interface getUserWalletRequest {
  userId: string;
}

export interface checkTransactionRequest {
  paymentReference: string;
}

export interface WalletCreatePayload {
  id: string;
  userId: string;
  balance: number;
  totalCredit: number;
  actualSpend: number;
  accountNumber: number;
}

export interface TransactionCreatePayload {
  amount: number;
  paymentPurpose: SystemPaymentPurpose;
  userWalletId: string;
  exchangeRate: number;
  paymentProvider: PaymentProvider;
  paymentReference: string;
  userId: string;
  paymentMethod: PaymentMethod;
  baseCurrency: string;
  transactionType: TransactionType;
  transactionStatus: TransactionStatus;
  objectId?: string | undefined;
  accountNumber: string;
}

export interface ITransaction {
  amount: number;
  paymentPurpose: string;
  userWalletId: string;
  exchangeRate: number;
  paymentProvider: string;
  paymentReference: string;
  userId: string;
  paymentMethod: PaymentMethod;
  baseCurrency: string;
  TransactionType: string;
  TransactionStatus: string;
}

export interface fundWalletPayload {
  amount: number;
  paymentMethod: PaymentMethod;
  transactionStatus: TransactionStatus;
  description?: string | undefined;
  paymentProvider: PaymentProvider;
  paymentReference: string;
  userId: string;
}

export interface createWalletPayload {
  userId: string;
}

export interface IWalletPayload {
  id: string;
  userId: string;
  balance: number;
  totalCredit: number;
  amount: number;
  ActualSpend: number;
  accountNumber: number;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface transferWalletFundPayload {
  amount: number;
  accountNumber: number;
  pin: string;
  paymentPurpose: SystemPaymentPurpose;
  description?: string | undefined;
  paymentProvider: PaymentProvider;
  ref: string;
  userId: string;
}

function createBasegetUserTransactionRequest(): getUserTransactionRequest {
  return { userWalletId: "", TransactionType: undefined };
}

export const getUserTransactionRequest = {
  encode(message: getUserTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userWalletId !== "") {
      writer.uint32(10).string(message.userWalletId);
    }
    if (message.TransactionType !== undefined) {
      writer.uint32(16).int32(message.TransactionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getUserTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetUserTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userWalletId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.TransactionType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): getUserTransactionRequest {
    return {
      userWalletId: isSet(object.userWalletId) ? globalThis.String(object.userWalletId) : "",
      TransactionType: isSet(object.TransactionType) ? transactionTypeFromJSON(object.TransactionType) : undefined,
    };
  },

  toJSON(message: getUserTransactionRequest): unknown {
    const obj: any = {};
    if (message.userWalletId !== "") {
      obj.userWalletId = message.userWalletId;
    }
    if (message.TransactionType !== undefined) {
      obj.TransactionType = transactionTypeToJSON(message.TransactionType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getUserTransactionRequest>, I>>(base?: I): getUserTransactionRequest {
    return getUserTransactionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getUserTransactionRequest>, I>>(object: I): getUserTransactionRequest {
    const message = createBasegetUserTransactionRequest();
    message.userWalletId = object.userWalletId ?? "";
    message.TransactionType = object.TransactionType ?? undefined;
    return message;
  },
};

function createBasegetUserWalletRequest(): getUserWalletRequest {
  return { userId: "" };
}

export const getUserWalletRequest = {
  encode(message: getUserWalletRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getUserWalletRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetUserWalletRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): getUserWalletRequest {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: getUserWalletRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getUserWalletRequest>, I>>(base?: I): getUserWalletRequest {
    return getUserWalletRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getUserWalletRequest>, I>>(object: I): getUserWalletRequest {
    const message = createBasegetUserWalletRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBasecheckTransactionRequest(): checkTransactionRequest {
  return { paymentReference: "" };
}

export const checkTransactionRequest = {
  encode(message: checkTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentReference !== "") {
      writer.uint32(10).string(message.paymentReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): checkTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecheckTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paymentReference = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): checkTransactionRequest {
    return { paymentReference: isSet(object.paymentReference) ? globalThis.String(object.paymentReference) : "" };
  },

  toJSON(message: checkTransactionRequest): unknown {
    const obj: any = {};
    if (message.paymentReference !== "") {
      obj.paymentReference = message.paymentReference;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<checkTransactionRequest>, I>>(base?: I): checkTransactionRequest {
    return checkTransactionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<checkTransactionRequest>, I>>(object: I): checkTransactionRequest {
    const message = createBasecheckTransactionRequest();
    message.paymentReference = object.paymentReference ?? "";
    return message;
  },
};

function createBaseWalletCreatePayload(): WalletCreatePayload {
  return { id: "", userId: "", balance: 0, totalCredit: 0, actualSpend: 0, accountNumber: 0 };
}

export const WalletCreatePayload = {
  encode(message: WalletCreatePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.balance !== 0) {
      writer.uint32(24).int64(message.balance);
    }
    if (message.totalCredit !== 0) {
      writer.uint32(32).int64(message.totalCredit);
    }
    if (message.actualSpend !== 0) {
      writer.uint32(40).int64(message.actualSpend);
    }
    if (message.accountNumber !== 0) {
      writer.uint32(48).int64(message.accountNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WalletCreatePayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletCreatePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.balance = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalCredit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.actualSpend = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.accountNumber = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WalletCreatePayload {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      balance: isSet(object.balance) ? globalThis.Number(object.balance) : 0,
      totalCredit: isSet(object.totalCredit) ? globalThis.Number(object.totalCredit) : 0,
      actualSpend: isSet(object.actualSpend) ? globalThis.Number(object.actualSpend) : 0,
      accountNumber: isSet(object.accountNumber) ? globalThis.Number(object.accountNumber) : 0,
    };
  },

  toJSON(message: WalletCreatePayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.balance !== 0) {
      obj.balance = Math.round(message.balance);
    }
    if (message.totalCredit !== 0) {
      obj.totalCredit = Math.round(message.totalCredit);
    }
    if (message.actualSpend !== 0) {
      obj.actualSpend = Math.round(message.actualSpend);
    }
    if (message.accountNumber !== 0) {
      obj.accountNumber = Math.round(message.accountNumber);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WalletCreatePayload>, I>>(base?: I): WalletCreatePayload {
    return WalletCreatePayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WalletCreatePayload>, I>>(object: I): WalletCreatePayload {
    const message = createBaseWalletCreatePayload();
    message.id = object.id ?? "";
    message.userId = object.userId ?? "";
    message.balance = object.balance ?? 0;
    message.totalCredit = object.totalCredit ?? 0;
    message.actualSpend = object.actualSpend ?? 0;
    message.accountNumber = object.accountNumber ?? 0;
    return message;
  },
};

function createBaseTransactionCreatePayload(): TransactionCreatePayload {
  return {
    amount: 0,
    paymentPurpose: 0,
    userWalletId: "",
    exchangeRate: 0,
    paymentProvider: 0,
    paymentReference: "",
    userId: "",
    paymentMethod: 0,
    baseCurrency: "",
    transactionType: 0,
    transactionStatus: 0,
    objectId: undefined,
    accountNumber: "",
  };
}

export const TransactionCreatePayload = {
  encode(message: TransactionCreatePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int64(message.amount);
    }
    if (message.paymentPurpose !== 0) {
      writer.uint32(16).int32(message.paymentPurpose);
    }
    if (message.userWalletId !== "") {
      writer.uint32(26).string(message.userWalletId);
    }
    if (message.exchangeRate !== 0) {
      writer.uint32(32).int32(message.exchangeRate);
    }
    if (message.paymentProvider !== 0) {
      writer.uint32(40).int32(message.paymentProvider);
    }
    if (message.paymentReference !== "") {
      writer.uint32(50).string(message.paymentReference);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.paymentMethod !== 0) {
      writer.uint32(64).int32(message.paymentMethod);
    }
    if (message.baseCurrency !== "") {
      writer.uint32(74).string(message.baseCurrency);
    }
    if (message.transactionType !== 0) {
      writer.uint32(80).int32(message.transactionType);
    }
    if (message.transactionStatus !== 0) {
      writer.uint32(88).int32(message.transactionStatus);
    }
    if (message.objectId !== undefined) {
      StringValue.encode({ value: message.objectId! }, writer.uint32(98).fork()).ldelim();
    }
    if (message.accountNumber !== "") {
      writer.uint32(106).string(message.accountNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionCreatePayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionCreatePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.paymentPurpose = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userWalletId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.exchangeRate = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.paymentProvider = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.paymentReference = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.paymentMethod = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.baseCurrency = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.transactionType = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.transactionStatus = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.objectId = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.accountNumber = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionCreatePayload {
    return {
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      paymentPurpose: isSet(object.paymentPurpose) ? systemPaymentPurposeFromJSON(object.paymentPurpose) : 0,
      userWalletId: isSet(object.userWalletId) ? globalThis.String(object.userWalletId) : "",
      exchangeRate: isSet(object.exchangeRate) ? globalThis.Number(object.exchangeRate) : 0,
      paymentProvider: isSet(object.paymentProvider) ? paymentProviderFromJSON(object.paymentProvider) : 0,
      paymentReference: isSet(object.paymentReference) ? globalThis.String(object.paymentReference) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      paymentMethod: isSet(object.paymentMethod) ? paymentMethodFromJSON(object.paymentMethod) : 0,
      baseCurrency: isSet(object.baseCurrency) ? globalThis.String(object.baseCurrency) : "",
      transactionType: isSet(object.transactionType) ? transactionTypeFromJSON(object.transactionType) : 0,
      transactionStatus: isSet(object.transactionStatus) ? transactionStatusFromJSON(object.transactionStatus) : 0,
      objectId: isSet(object.objectId) ? String(object.objectId) : undefined,
      accountNumber: isSet(object.accountNumber) ? globalThis.String(object.accountNumber) : "",
    };
  },

  toJSON(message: TransactionCreatePayload): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.paymentPurpose !== 0) {
      obj.paymentPurpose = systemPaymentPurposeToJSON(message.paymentPurpose);
    }
    if (message.userWalletId !== "") {
      obj.userWalletId = message.userWalletId;
    }
    if (message.exchangeRate !== 0) {
      obj.exchangeRate = Math.round(message.exchangeRate);
    }
    if (message.paymentProvider !== 0) {
      obj.paymentProvider = paymentProviderToJSON(message.paymentProvider);
    }
    if (message.paymentReference !== "") {
      obj.paymentReference = message.paymentReference;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.paymentMethod !== 0) {
      obj.paymentMethod = paymentMethodToJSON(message.paymentMethod);
    }
    if (message.baseCurrency !== "") {
      obj.baseCurrency = message.baseCurrency;
    }
    if (message.transactionType !== 0) {
      obj.transactionType = transactionTypeToJSON(message.transactionType);
    }
    if (message.transactionStatus !== 0) {
      obj.transactionStatus = transactionStatusToJSON(message.transactionStatus);
    }
    if (message.objectId !== undefined) {
      obj.objectId = message.objectId;
    }
    if (message.accountNumber !== "") {
      obj.accountNumber = message.accountNumber;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionCreatePayload>, I>>(base?: I): TransactionCreatePayload {
    return TransactionCreatePayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionCreatePayload>, I>>(object: I): TransactionCreatePayload {
    const message = createBaseTransactionCreatePayload();
    message.amount = object.amount ?? 0;
    message.paymentPurpose = object.paymentPurpose ?? 0;
    message.userWalletId = object.userWalletId ?? "";
    message.exchangeRate = object.exchangeRate ?? 0;
    message.paymentProvider = object.paymentProvider ?? 0;
    message.paymentReference = object.paymentReference ?? "";
    message.userId = object.userId ?? "";
    message.paymentMethod = object.paymentMethod ?? 0;
    message.baseCurrency = object.baseCurrency ?? "";
    message.transactionType = object.transactionType ?? 0;
    message.transactionStatus = object.transactionStatus ?? 0;
    message.objectId = object.objectId ?? undefined;
    message.accountNumber = object.accountNumber ?? "";
    return message;
  },
};

function createBaseITransaction(): ITransaction {
  return {
    amount: 0,
    paymentPurpose: "",
    userWalletId: "",
    exchangeRate: 0,
    paymentProvider: "",
    paymentReference: "",
    userId: "",
    paymentMethod: 0,
    baseCurrency: "",
    TransactionType: "",
    TransactionStatus: "",
  };
}

export const ITransaction = {
  encode(message: ITransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int64(message.amount);
    }
    if (message.paymentPurpose !== "") {
      writer.uint32(18).string(message.paymentPurpose);
    }
    if (message.userWalletId !== "") {
      writer.uint32(26).string(message.userWalletId);
    }
    if (message.exchangeRate !== 0) {
      writer.uint32(32).int32(message.exchangeRate);
    }
    if (message.paymentProvider !== "") {
      writer.uint32(42).string(message.paymentProvider);
    }
    if (message.paymentReference !== "") {
      writer.uint32(50).string(message.paymentReference);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.paymentMethod !== 0) {
      writer.uint32(64).int32(message.paymentMethod);
    }
    if (message.baseCurrency !== "") {
      writer.uint32(74).string(message.baseCurrency);
    }
    if (message.TransactionType !== "") {
      writer.uint32(82).string(message.TransactionType);
    }
    if (message.TransactionStatus !== "") {
      writer.uint32(90).string(message.TransactionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ITransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseITransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paymentPurpose = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userWalletId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.exchangeRate = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.paymentProvider = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.paymentReference = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.paymentMethod = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.baseCurrency = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.TransactionType = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.TransactionStatus = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ITransaction {
    return {
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      paymentPurpose: isSet(object.paymentPurpose) ? globalThis.String(object.paymentPurpose) : "",
      userWalletId: isSet(object.userWalletId) ? globalThis.String(object.userWalletId) : "",
      exchangeRate: isSet(object.exchangeRate) ? globalThis.Number(object.exchangeRate) : 0,
      paymentProvider: isSet(object.paymentProvider) ? globalThis.String(object.paymentProvider) : "",
      paymentReference: isSet(object.paymentReference) ? globalThis.String(object.paymentReference) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      paymentMethod: isSet(object.paymentMethod) ? paymentMethodFromJSON(object.paymentMethod) : 0,
      baseCurrency: isSet(object.baseCurrency) ? globalThis.String(object.baseCurrency) : "",
      TransactionType: isSet(object.TransactionType) ? globalThis.String(object.TransactionType) : "",
      TransactionStatus: isSet(object.TransactionStatus) ? globalThis.String(object.TransactionStatus) : "",
    };
  },

  toJSON(message: ITransaction): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.paymentPurpose !== "") {
      obj.paymentPurpose = message.paymentPurpose;
    }
    if (message.userWalletId !== "") {
      obj.userWalletId = message.userWalletId;
    }
    if (message.exchangeRate !== 0) {
      obj.exchangeRate = Math.round(message.exchangeRate);
    }
    if (message.paymentProvider !== "") {
      obj.paymentProvider = message.paymentProvider;
    }
    if (message.paymentReference !== "") {
      obj.paymentReference = message.paymentReference;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.paymentMethod !== 0) {
      obj.paymentMethod = paymentMethodToJSON(message.paymentMethod);
    }
    if (message.baseCurrency !== "") {
      obj.baseCurrency = message.baseCurrency;
    }
    if (message.TransactionType !== "") {
      obj.TransactionType = message.TransactionType;
    }
    if (message.TransactionStatus !== "") {
      obj.TransactionStatus = message.TransactionStatus;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ITransaction>, I>>(base?: I): ITransaction {
    return ITransaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ITransaction>, I>>(object: I): ITransaction {
    const message = createBaseITransaction();
    message.amount = object.amount ?? 0;
    message.paymentPurpose = object.paymentPurpose ?? "";
    message.userWalletId = object.userWalletId ?? "";
    message.exchangeRate = object.exchangeRate ?? 0;
    message.paymentProvider = object.paymentProvider ?? "";
    message.paymentReference = object.paymentReference ?? "";
    message.userId = object.userId ?? "";
    message.paymentMethod = object.paymentMethod ?? 0;
    message.baseCurrency = object.baseCurrency ?? "";
    message.TransactionType = object.TransactionType ?? "";
    message.TransactionStatus = object.TransactionStatus ?? "";
    return message;
  },
};

function createBasefundWalletPayload(): fundWalletPayload {
  return {
    amount: 0,
    paymentMethod: 0,
    transactionStatus: 0,
    description: undefined,
    paymentProvider: 0,
    paymentReference: "",
    userId: "",
  };
}

export const fundWalletPayload = {
  encode(message: fundWalletPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int64(message.amount);
    }
    if (message.paymentMethod !== 0) {
      writer.uint32(16).int32(message.paymentMethod);
    }
    if (message.transactionStatus !== 0) {
      writer.uint32(24).int32(message.transactionStatus);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.paymentProvider !== 0) {
      writer.uint32(40).int32(message.paymentProvider);
    }
    if (message.paymentReference !== "") {
      writer.uint32(50).string(message.paymentReference);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): fundWalletPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasefundWalletPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.paymentMethod = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.transactionStatus = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.paymentProvider = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.paymentReference = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): fundWalletPayload {
    return {
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      paymentMethod: isSet(object.paymentMethod) ? paymentMethodFromJSON(object.paymentMethod) : 0,
      transactionStatus: isSet(object.transactionStatus) ? transactionStatusFromJSON(object.transactionStatus) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      paymentProvider: isSet(object.paymentProvider) ? paymentProviderFromJSON(object.paymentProvider) : 0,
      paymentReference: isSet(object.paymentReference) ? globalThis.String(object.paymentReference) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: fundWalletPayload): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.paymentMethod !== 0) {
      obj.paymentMethod = paymentMethodToJSON(message.paymentMethod);
    }
    if (message.transactionStatus !== 0) {
      obj.transactionStatus = transactionStatusToJSON(message.transactionStatus);
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.paymentProvider !== 0) {
      obj.paymentProvider = paymentProviderToJSON(message.paymentProvider);
    }
    if (message.paymentReference !== "") {
      obj.paymentReference = message.paymentReference;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<fundWalletPayload>, I>>(base?: I): fundWalletPayload {
    return fundWalletPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<fundWalletPayload>, I>>(object: I): fundWalletPayload {
    const message = createBasefundWalletPayload();
    message.amount = object.amount ?? 0;
    message.paymentMethod = object.paymentMethod ?? 0;
    message.transactionStatus = object.transactionStatus ?? 0;
    message.description = object.description ?? undefined;
    message.paymentProvider = object.paymentProvider ?? 0;
    message.paymentReference = object.paymentReference ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBasecreateWalletPayload(): createWalletPayload {
  return { userId: "" };
}

export const createWalletPayload = {
  encode(message: createWalletPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): createWalletPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecreateWalletPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): createWalletPayload {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: createWalletPayload): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<createWalletPayload>, I>>(base?: I): createWalletPayload {
    return createWalletPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<createWalletPayload>, I>>(object: I): createWalletPayload {
    const message = createBasecreateWalletPayload();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseIWalletPayload(): IWalletPayload {
  return {
    id: "",
    userId: "",
    balance: 0,
    totalCredit: 0,
    amount: 0,
    ActualSpend: 0,
    accountNumber: 0,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const IWalletPayload = {
  encode(message: IWalletPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.balance !== 0) {
      writer.uint32(24).int64(message.balance);
    }
    if (message.totalCredit !== 0) {
      writer.uint32(32).int64(message.totalCredit);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int64(message.amount);
    }
    if (message.ActualSpend !== 0) {
      writer.uint32(48).int64(message.ActualSpend);
    }
    if (message.accountNumber !== 0) {
      writer.uint32(56).int64(message.accountNumber);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IWalletPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIWalletPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.balance = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalCredit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.ActualSpend = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.accountNumber = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IWalletPayload {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      balance: isSet(object.balance) ? globalThis.Number(object.balance) : 0,
      totalCredit: isSet(object.totalCredit) ? globalThis.Number(object.totalCredit) : 0,
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      ActualSpend: isSet(object.ActualSpend) ? globalThis.Number(object.ActualSpend) : 0,
      accountNumber: isSet(object.accountNumber) ? globalThis.Number(object.accountNumber) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: IWalletPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.balance !== 0) {
      obj.balance = Math.round(message.balance);
    }
    if (message.totalCredit !== 0) {
      obj.totalCredit = Math.round(message.totalCredit);
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.ActualSpend !== 0) {
      obj.ActualSpend = Math.round(message.ActualSpend);
    }
    if (message.accountNumber !== 0) {
      obj.accountNumber = Math.round(message.accountNumber);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IWalletPayload>, I>>(base?: I): IWalletPayload {
    return IWalletPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IWalletPayload>, I>>(object: I): IWalletPayload {
    const message = createBaseIWalletPayload();
    message.id = object.id ?? "";
    message.userId = object.userId ?? "";
    message.balance = object.balance ?? 0;
    message.totalCredit = object.totalCredit ?? 0;
    message.amount = object.amount ?? 0;
    message.ActualSpend = object.ActualSpend ?? 0;
    message.accountNumber = object.accountNumber ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBasetransferWalletFundPayload(): transferWalletFundPayload {
  return {
    amount: 0,
    accountNumber: 0,
    pin: "",
    paymentPurpose: 0,
    description: undefined,
    paymentProvider: 0,
    ref: "",
    userId: "",
  };
}

export const transferWalletFundPayload = {
  encode(message: transferWalletFundPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).int64(message.amount);
    }
    if (message.accountNumber !== 0) {
      writer.uint32(16).int64(message.accountNumber);
    }
    if (message.pin !== "") {
      writer.uint32(26).string(message.pin);
    }
    if (message.paymentPurpose !== 0) {
      writer.uint32(32).int32(message.paymentPurpose);
    }
    if (message.description !== undefined) {
      writer.uint32(42).string(message.description);
    }
    if (message.paymentProvider !== 0) {
      writer.uint32(48).int32(message.paymentProvider);
    }
    if (message.ref !== "") {
      writer.uint32(58).string(message.ref);
    }
    if (message.userId !== "") {
      writer.uint32(66).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): transferWalletFundPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasetransferWalletFundPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.accountNumber = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pin = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.paymentPurpose = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.paymentProvider = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ref = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): transferWalletFundPayload {
    return {
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      accountNumber: isSet(object.accountNumber) ? globalThis.Number(object.accountNumber) : 0,
      pin: isSet(object.pin) ? globalThis.String(object.pin) : "",
      paymentPurpose: isSet(object.paymentPurpose) ? systemPaymentPurposeFromJSON(object.paymentPurpose) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      paymentProvider: isSet(object.paymentProvider) ? paymentProviderFromJSON(object.paymentProvider) : 0,
      ref: isSet(object.ref) ? globalThis.String(object.ref) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: transferWalletFundPayload): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.accountNumber !== 0) {
      obj.accountNumber = Math.round(message.accountNumber);
    }
    if (message.pin !== "") {
      obj.pin = message.pin;
    }
    if (message.paymentPurpose !== 0) {
      obj.paymentPurpose = systemPaymentPurposeToJSON(message.paymentPurpose);
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.paymentProvider !== 0) {
      obj.paymentProvider = paymentProviderToJSON(message.paymentProvider);
    }
    if (message.ref !== "") {
      obj.ref = message.ref;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<transferWalletFundPayload>, I>>(base?: I): transferWalletFundPayload {
    return transferWalletFundPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<transferWalletFundPayload>, I>>(object: I): transferWalletFundPayload {
    const message = createBasetransferWalletFundPayload();
    message.amount = object.amount ?? 0;
    message.accountNumber = object.accountNumber ?? 0;
    message.pin = object.pin ?? "";
    message.paymentPurpose = object.paymentPurpose ?? 0;
    message.description = object.description ?? undefined;
    message.paymentProvider = object.paymentProvider ?? 0;
    message.ref = object.ref ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

export interface WalletServiceClient {
  createUserWallet(request: createWalletPayload): Promise<IWalletPayload>;
  getUserWallet(request: getUserWalletRequest): Promise<IWalletPayload>;
  fundWallet(request: fundWalletPayload): Promise<IWalletPayload>;
  transferFundsFromWallet(request: fundWalletPayload): Promise<IWalletPayload>;
  transferFundsIntoWallet(request: fundWalletPayload): Promise<IWalletPayload>;
  createTransaction(request: TransactionCreatePayload): Promise<ITransaction>;
  getUserTransaction(request: getUserTransactionRequest): Promise<ITransaction>;
  checkTransactionwithRef(request: checkTransactionRequest): Promise<ITransaction>;
}

export const WalletServiceClientServiceName = "wallet.WalletServiceClient";
export class WalletServiceClientClientImpl implements WalletServiceClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || WalletServiceClientServiceName;
    this.rpc = rpc;
    this.createUserWallet = this.createUserWallet.bind(this);
    this.getUserWallet = this.getUserWallet.bind(this);
    this.fundWallet = this.fundWallet.bind(this);
    this.transferFundsFromWallet = this.transferFundsFromWallet.bind(this);
    this.transferFundsIntoWallet = this.transferFundsIntoWallet.bind(this);
    this.createTransaction = this.createTransaction.bind(this);
    this.getUserTransaction = this.getUserTransaction.bind(this);
    this.checkTransactionwithRef = this.checkTransactionwithRef.bind(this);
  }
  createUserWallet(request: createWalletPayload): Promise<IWalletPayload> {
    const data = createWalletPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "createUserWallet", data);
    return promise.then((data) => IWalletPayload.decode(_m0.Reader.create(data)));
  }

  getUserWallet(request: getUserWalletRequest): Promise<IWalletPayload> {
    const data = getUserWalletRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getUserWallet", data);
    return promise.then((data) => IWalletPayload.decode(_m0.Reader.create(data)));
  }

  fundWallet(request: fundWalletPayload): Promise<IWalletPayload> {
    const data = fundWalletPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "fundWallet", data);
    return promise.then((data) => IWalletPayload.decode(_m0.Reader.create(data)));
  }

  transferFundsFromWallet(request: fundWalletPayload): Promise<IWalletPayload> {
    const data = fundWalletPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "transferFundsFromWallet", data);
    return promise.then((data) => IWalletPayload.decode(_m0.Reader.create(data)));
  }

  transferFundsIntoWallet(request: fundWalletPayload): Promise<IWalletPayload> {
    const data = fundWalletPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "transferFundsIntoWallet", data);
    return promise.then((data) => IWalletPayload.decode(_m0.Reader.create(data)));
  }

  createTransaction(request: TransactionCreatePayload): Promise<ITransaction> {
    const data = TransactionCreatePayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "createTransaction", data);
    return promise.then((data) => ITransaction.decode(_m0.Reader.create(data)));
  }

  getUserTransaction(request: getUserTransactionRequest): Promise<ITransaction> {
    const data = getUserTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getUserTransaction", data);
    return promise.then((data) => ITransaction.decode(_m0.Reader.create(data)));
  }

  checkTransactionwithRef(request: checkTransactionRequest): Promise<ITransaction> {
    const data = checkTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "checkTransactionwithRef", data);
    return promise.then((data) => ITransaction.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
