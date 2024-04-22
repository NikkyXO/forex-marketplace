/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import Long = require("long");

export const protobufPackage = "order";

export interface buyASellerProductPayload {
  userId: string;
  userProductId: string;
  quantity: number;
  fromCurrency: string;
  toCurrency: string;
}

export interface buyASellerProductResponse {
  message?: string | undefined;
  error?: string | undefined;
}

export interface createUserProductResponse {
  sellingPrice: number;
  productId: string;
  userId: string;
  description?: string | undefined;
  productVisibility: boolean;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface allProductResponse {
  products: createUserProductResponse[];
}

export interface createProductPayload {
  title: string;
  price: number;
  image: string;
}

export interface deleteResponse {
  message: string;
}

export interface createProductResponse {
  title: string;
  price: number;
  image: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface addUserProduct {
  sellingPrice: number;
  productId: string;
  userId: string;
  description?: string | undefined;
  productVisibility: boolean;
}

export interface getProductPayload {
  productId: string;
}

export interface getUserProductPayload {
  productId: string;
  userId: string;
}

export interface addBoughtProductToUserPayload {
  productId: string;
  userId: string;
}

export interface getAllUserProductsPayload {
  userId: string;
}

function createBasebuyASellerProductPayload(): buyASellerProductPayload {
  return { userId: "", userProductId: "", quantity: 0, fromCurrency: "", toCurrency: "" };
}

export const buyASellerProductPayload = {
  encode(message: buyASellerProductPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userProductId !== "") {
      writer.uint32(18).string(message.userProductId);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int32(message.quantity);
    }
    if (message.fromCurrency !== "") {
      writer.uint32(34).string(message.fromCurrency);
    }
    if (message.toCurrency !== "") {
      writer.uint32(42).string(message.toCurrency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): buyASellerProductPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasebuyASellerProductPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userProductId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quantity = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fromCurrency = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.toCurrency = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): buyASellerProductPayload {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userProductId: isSet(object.userProductId) ? globalThis.String(object.userProductId) : "",
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      fromCurrency: isSet(object.fromCurrency) ? globalThis.String(object.fromCurrency) : "",
      toCurrency: isSet(object.toCurrency) ? globalThis.String(object.toCurrency) : "",
    };
  },

  toJSON(message: buyASellerProductPayload): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userProductId !== "") {
      obj.userProductId = message.userProductId;
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.fromCurrency !== "") {
      obj.fromCurrency = message.fromCurrency;
    }
    if (message.toCurrency !== "") {
      obj.toCurrency = message.toCurrency;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<buyASellerProductPayload>, I>>(base?: I): buyASellerProductPayload {
    return buyASellerProductPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<buyASellerProductPayload>, I>>(object: I): buyASellerProductPayload {
    const message = createBasebuyASellerProductPayload();
    message.userId = object.userId ?? "";
    message.userProductId = object.userProductId ?? "";
    message.quantity = object.quantity ?? 0;
    message.fromCurrency = object.fromCurrency ?? "";
    message.toCurrency = object.toCurrency ?? "";
    return message;
  },
};

function createBasebuyASellerProductResponse(): buyASellerProductResponse {
  return { message: undefined, error: undefined };
}

export const buyASellerProductResponse = {
  encode(message: buyASellerProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      writer.uint32(10).string(message.message);
    }
    if (message.error !== undefined) {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): buyASellerProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasebuyASellerProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): buyASellerProductResponse {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : undefined,
      error: isSet(object.error) ? globalThis.String(object.error) : undefined,
    };
  },

  toJSON(message: buyASellerProductResponse): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = message.message;
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<buyASellerProductResponse>, I>>(base?: I): buyASellerProductResponse {
    return buyASellerProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<buyASellerProductResponse>, I>>(object: I): buyASellerProductResponse {
    const message = createBasebuyASellerProductResponse();
    message.message = object.message ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBasecreateUserProductResponse(): createUserProductResponse {
  return {
    sellingPrice: 0,
    productId: "",
    userId: "",
    description: undefined,
    productVisibility: false,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const createUserProductResponse = {
  encode(message: createUserProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sellingPrice !== 0) {
      writer.uint32(8).int64(message.sellingPrice);
    }
    if (message.productId !== "") {
      writer.uint32(18).string(message.productId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.productVisibility !== false) {
      writer.uint32(40).bool(message.productVisibility);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): createUserProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecreateUserProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sellingPrice = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.productId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userId = reader.string();
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

          message.productVisibility = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): createUserProductResponse {
    return {
      sellingPrice: isSet(object.sellingPrice) ? globalThis.Number(object.sellingPrice) : 0,
      productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      productVisibility: isSet(object.productVisibility) ? globalThis.Boolean(object.productVisibility) : false,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: createUserProductResponse): unknown {
    const obj: any = {};
    if (message.sellingPrice !== 0) {
      obj.sellingPrice = Math.round(message.sellingPrice);
    }
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.productVisibility !== false) {
      obj.productVisibility = message.productVisibility;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<createUserProductResponse>, I>>(base?: I): createUserProductResponse {
    return createUserProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<createUserProductResponse>, I>>(object: I): createUserProductResponse {
    const message = createBasecreateUserProductResponse();
    message.sellingPrice = object.sellingPrice ?? 0;
    message.productId = object.productId ?? "";
    message.userId = object.userId ?? "";
    message.description = object.description ?? undefined;
    message.productVisibility = object.productVisibility ?? false;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseallProductResponse(): allProductResponse {
  return { products: [] };
}

export const allProductResponse = {
  encode(message: allProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      createUserProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): allProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseallProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(createUserProductResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): allProductResponse {
    return {
      products: globalThis.Array.isArray(object?.products)
        ? object.products.map((e: any) => createUserProductResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: allProductResponse): unknown {
    const obj: any = {};
    if (message.products?.length) {
      obj.products = message.products.map((e) => createUserProductResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<allProductResponse>, I>>(base?: I): allProductResponse {
    return allProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<allProductResponse>, I>>(object: I): allProductResponse {
    const message = createBaseallProductResponse();
    message.products = object.products?.map((e) => createUserProductResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBasecreateProductPayload(): createProductPayload {
  return { title: "", price: 0, image: "" };
}

export const createProductPayload = {
  encode(message: createProductPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.price !== 0) {
      writer.uint32(21).float(message.price);
    }
    if (message.image !== "") {
      writer.uint32(26).string(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): createProductPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecreateProductPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.price = reader.float();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.image = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): createProductPayload {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      image: isSet(object.image) ? globalThis.String(object.image) : "",
    };
  },

  toJSON(message: createProductPayload): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    if (message.image !== "") {
      obj.image = message.image;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<createProductPayload>, I>>(base?: I): createProductPayload {
    return createProductPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<createProductPayload>, I>>(object: I): createProductPayload {
    const message = createBasecreateProductPayload();
    message.title = object.title ?? "";
    message.price = object.price ?? 0;
    message.image = object.image ?? "";
    return message;
  },
};

function createBasedeleteResponse(): deleteResponse {
  return { message: "" };
}

export const deleteResponse = {
  encode(message: deleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): deleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasedeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): deleteResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: deleteResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<deleteResponse>, I>>(base?: I): deleteResponse {
    return deleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<deleteResponse>, I>>(object: I): deleteResponse {
    const message = createBasedeleteResponse();
    message.message = object.message ?? "";
    return message;
  },
};

function createBasecreateProductResponse(): createProductResponse {
  return { title: "", price: 0, image: "", createdAt: undefined, updatedAt: undefined };
}

export const createProductResponse = {
  encode(message: createProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.price !== 0) {
      writer.uint32(21).float(message.price);
    }
    if (message.image !== "") {
      writer.uint32(26).string(message.image);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): createProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasecreateProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.price = reader.float();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.image = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): createProductResponse {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      image: isSet(object.image) ? globalThis.String(object.image) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: createProductResponse): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    if (message.image !== "") {
      obj.image = message.image;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<createProductResponse>, I>>(base?: I): createProductResponse {
    return createProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<createProductResponse>, I>>(object: I): createProductResponse {
    const message = createBasecreateProductResponse();
    message.title = object.title ?? "";
    message.price = object.price ?? 0;
    message.image = object.image ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseaddUserProduct(): addUserProduct {
  return { sellingPrice: 0, productId: "", userId: "", description: undefined, productVisibility: false };
}

export const addUserProduct = {
  encode(message: addUserProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sellingPrice !== 0) {
      writer.uint32(8).int64(message.sellingPrice);
    }
    if (message.productId !== "") {
      writer.uint32(18).string(message.productId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.productVisibility !== false) {
      writer.uint32(40).bool(message.productVisibility);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): addUserProduct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseaddUserProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sellingPrice = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.productId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userId = reader.string();
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

          message.productVisibility = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): addUserProduct {
    return {
      sellingPrice: isSet(object.sellingPrice) ? globalThis.Number(object.sellingPrice) : 0,
      productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      productVisibility: isSet(object.productVisibility) ? globalThis.Boolean(object.productVisibility) : false,
    };
  },

  toJSON(message: addUserProduct): unknown {
    const obj: any = {};
    if (message.sellingPrice !== 0) {
      obj.sellingPrice = Math.round(message.sellingPrice);
    }
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.productVisibility !== false) {
      obj.productVisibility = message.productVisibility;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<addUserProduct>, I>>(base?: I): addUserProduct {
    return addUserProduct.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<addUserProduct>, I>>(object: I): addUserProduct {
    const message = createBaseaddUserProduct();
    message.sellingPrice = object.sellingPrice ?? 0;
    message.productId = object.productId ?? "";
    message.userId = object.userId ?? "";
    message.description = object.description ?? undefined;
    message.productVisibility = object.productVisibility ?? false;
    return message;
  },
};

function createBasegetProductPayload(): getProductPayload {
  return { productId: "" };
}

export const getProductPayload = {
  encode(message: getProductPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getProductPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetProductPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.productId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): getProductPayload {
    return { productId: isSet(object.productId) ? globalThis.String(object.productId) : "" };
  },

  toJSON(message: getProductPayload): unknown {
    const obj: any = {};
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getProductPayload>, I>>(base?: I): getProductPayload {
    return getProductPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getProductPayload>, I>>(object: I): getProductPayload {
    const message = createBasegetProductPayload();
    message.productId = object.productId ?? "";
    return message;
  },
};

function createBasegetUserProductPayload(): getUserProductPayload {
  return { productId: "", userId: "" };
}

export const getUserProductPayload = {
  encode(message: getUserProductPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getUserProductPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetUserProductPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.productId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): getUserProductPayload {
    return {
      productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: getUserProductPayload): unknown {
    const obj: any = {};
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getUserProductPayload>, I>>(base?: I): getUserProductPayload {
    return getUserProductPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getUserProductPayload>, I>>(object: I): getUserProductPayload {
    const message = createBasegetUserProductPayload();
    message.productId = object.productId ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseaddBoughtProductToUserPayload(): addBoughtProductToUserPayload {
  return { productId: "", userId: "" };
}

export const addBoughtProductToUserPayload = {
  encode(message: addBoughtProductToUserPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): addBoughtProductToUserPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseaddBoughtProductToUserPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.productId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): addBoughtProductToUserPayload {
    return {
      productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: addBoughtProductToUserPayload): unknown {
    const obj: any = {};
    if (message.productId !== "") {
      obj.productId = message.productId;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<addBoughtProductToUserPayload>, I>>(base?: I): addBoughtProductToUserPayload {
    return addBoughtProductToUserPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<addBoughtProductToUserPayload>, I>>(
    object: I,
  ): addBoughtProductToUserPayload {
    const message = createBaseaddBoughtProductToUserPayload();
    message.productId = object.productId ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBasegetAllUserProductsPayload(): getAllUserProductsPayload {
  return { userId: "" };
}

export const getAllUserProductsPayload = {
  encode(message: getAllUserProductsPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getAllUserProductsPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetAllUserProductsPayload();
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

  fromJSON(object: any): getAllUserProductsPayload {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: getAllUserProductsPayload): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getAllUserProductsPayload>, I>>(base?: I): getAllUserProductsPayload {
    return getAllUserProductsPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getAllUserProductsPayload>, I>>(object: I): getAllUserProductsPayload {
    const message = createBasegetAllUserProductsPayload();
    message.userId = object.userId ?? "";
    return message;
  },
};

export interface OrderServiceClient {
  createProduct(request: createProductPayload): Promise<createProductResponse>;
  getProduct(request: getProductPayload): Promise<createProductResponse>;
  deleteProduct(request: getProductPayload): Promise<deleteResponse>;
  createUserProduct(request: addUserProduct): Promise<createUserProductResponse>;
  getUserProduct(request: getUserProductPayload): Promise<createUserProductResponse>;
  removeUserProduct(request: getUserProductPayload): Promise<deleteResponse>;
  getAllUserProducts(request: getAllUserProductsPayload): Observable<allProductResponse>;
  buyAProduct(request: buyASellerProductPayload): Promise<buyASellerProductResponse>;
}

export const OrderServiceClientServiceName = "order.OrderServiceClient";
export class OrderServiceClientClientImpl implements OrderServiceClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || OrderServiceClientServiceName;
    this.rpc = rpc;
    this.createProduct = this.createProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.createUserProduct = this.createUserProduct.bind(this);
    this.getUserProduct = this.getUserProduct.bind(this);
    this.removeUserProduct = this.removeUserProduct.bind(this);
    this.getAllUserProducts = this.getAllUserProducts.bind(this);
    this.buyAProduct = this.buyAProduct.bind(this);
  }
  createProduct(request: createProductPayload): Promise<createProductResponse> {
    const data = createProductPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "createProduct", data);
    return promise.then((data) => createProductResponse.decode(_m0.Reader.create(data)));
  }

  getProduct(request: getProductPayload): Promise<createProductResponse> {
    const data = getProductPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "getProduct", data);
    return promise.then((data) => createProductResponse.decode(_m0.Reader.create(data)));
  }

  deleteProduct(request: getProductPayload): Promise<deleteResponse> {
    const data = getProductPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "deleteProduct", data);
    return promise.then((data) => deleteResponse.decode(_m0.Reader.create(data)));
  }

  createUserProduct(request: addUserProduct): Promise<createUserProductResponse> {
    const data = addUserProduct.encode(request).finish();
    const promise = this.rpc.request(this.service, "createUserProduct", data);
    return promise.then((data) => createUserProductResponse.decode(_m0.Reader.create(data)));
  }

  getUserProduct(request: getUserProductPayload): Promise<createUserProductResponse> {
    const data = getUserProductPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "getUserProduct", data);
    return promise.then((data) => createUserProductResponse.decode(_m0.Reader.create(data)));
  }

  removeUserProduct(request: getUserProductPayload): Promise<deleteResponse> {
    const data = getUserProductPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "removeUserProduct", data);
    return promise.then((data) => deleteResponse.decode(_m0.Reader.create(data)));
  }

  getAllUserProducts(request: getAllUserProductsPayload): Observable<allProductResponse> {
    const data = getAllUserProductsPayload.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "getAllUserProducts", data);
    return result.pipe(map((data) => allProductResponse.decode(_m0.Reader.create(data))));
  }

  buyAProduct(request: buyASellerProductPayload): Promise<buyASellerProductResponse> {
    const data = buyASellerProductPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "buyAProduct", data);
    return promise.then((data) => buyASellerProductResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
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
