/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "auth";

export interface tokenPayload {
  userId: string;
}

export interface dataPayload {
  token: string;
}

export interface loginPayload {
  email: string;
  password: string;
}

export interface registerPayload {
  email: string;
  username: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface loginResultData {
  status: number;
  message: string;
  data: dataPayload | undefined;
}

export interface resultData {
  status: number;
  userId: string;
  message: string;
  data: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: number;
  error: string[];
  message: string;
  userId: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  error: string[];
  token: string;
}

export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  userId: string;
}

function createBasetokenPayload(): tokenPayload {
  return { userId: "" };
}

export const tokenPayload = {
  encode(message: tokenPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): tokenPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasetokenPayload();
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

  fromJSON(object: any): tokenPayload {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: tokenPayload): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<tokenPayload>, I>>(base?: I): tokenPayload {
    return tokenPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<tokenPayload>, I>>(object: I): tokenPayload {
    const message = createBasetokenPayload();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBasedataPayload(): dataPayload {
  return { token: "" };
}

export const dataPayload = {
  encode(message: dataPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): dataPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasedataPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): dataPayload {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: dataPayload): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<dataPayload>, I>>(base?: I): dataPayload {
    return dataPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<dataPayload>, I>>(object: I): dataPayload {
    const message = createBasedataPayload();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseloginPayload(): loginPayload {
  return { email: "", password: "" };
}

export const loginPayload = {
  encode(message: loginPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): loginPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseloginPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): loginPayload {
    return {
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: loginPayload): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<loginPayload>, I>>(base?: I): loginPayload {
    return loginPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<loginPayload>, I>>(object: I): loginPayload {
    const message = createBaseloginPayload();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseregisterPayload(): registerPayload {
  return { email: "", username: "", password: "" };
}

export const registerPayload = {
  encode(message: registerPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): registerPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseregisterPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): registerPayload {
    return {
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: registerPayload): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<registerPayload>, I>>(base?: I): registerPayload {
    return registerPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<registerPayload>, I>>(object: I): registerPayload {
    const message = createBaseregisterPayload();
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseToken(): Token {
  return { token: "" };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Token {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Token>, I>>(base?: I): Token {
    return Token.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseloginResultData(): loginResultData {
  return { status: 0, message: "", data: undefined };
}

export const loginResultData = {
  encode(message: loginResultData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.data !== undefined) {
      dataPayload.encode(message.data, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): loginResultData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseloginResultData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = dataPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): loginResultData {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? dataPayload.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: loginResultData): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== undefined) {
      obj.data = dataPayload.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<loginResultData>, I>>(base?: I): loginResultData {
    return loginResultData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<loginResultData>, I>>(object: I): loginResultData {
    const message = createBaseloginResultData();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? dataPayload.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseresultData(): resultData {
  return { status: 0, userId: "", message: "", data: "" };
}

export const resultData = {
  encode(message: resultData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): resultData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseresultData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): resultData {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
    };
  },

  toJSON(message: resultData): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<resultData>, I>>(base?: I): resultData {
    return resultData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<resultData>, I>>(object: I): resultData {
    const message = createBaseresultData();
    message.status = object.status ?? 0;
    message.userId = object.userId ?? "";
    message.message = object.message ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseRegisterRequest(): RegisterRequest {
  return { username: "", email: "", password: "" };
}

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterRequest>, I>>(base?: I): RegisterRequest {
    return RegisterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterRequest>, I>>(object: I): RegisterRequest {
    const message = createBaseRegisterRequest();
    message.username = object.username ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseRegisterResponse(): RegisterResponse {
  return { status: 0, error: [], message: "", userId: "" };
}

export const RegisterResponse = {
  encode(message: RegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): RegisterResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      error: globalThis.Array.isArray(object?.error) ? object.error.map((e: any) => globalThis.String(e)) : [],
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: RegisterResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.error?.length) {
      obj.error = message.error;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterResponse>, I>>(base?: I): RegisterResponse {
    return RegisterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterResponse>, I>>(object: I): RegisterResponse {
    const message = createBaseRegisterResponse();
    message.status = object.status ?? 0;
    message.error = object.error?.map((e) => e) || [];
    message.message = object.message ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseLoginRequest(): LoginRequest {
  return { email: "", password: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { status: 0, error: [], token: "" };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      error: globalThis.Array.isArray(object?.error) ? object.error.map((e: any) => globalThis.String(e)) : [],
      token: isSet(object.token) ? globalThis.String(object.token) : "",
    };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.error?.length) {
      obj.error = message.error;
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.status = object.status ?? 0;
    message.error = object.error?.map((e) => e) || [];
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseValidateRequest(): ValidateRequest {
  return { token: "" };
}

export const ValidateRequest = {
  encode(message: ValidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateRequest {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: ValidateRequest): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateRequest>, I>>(base?: I): ValidateRequest {
    return ValidateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateRequest>, I>>(object: I): ValidateRequest {
    const message = createBaseValidateRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseValidateResponse(): ValidateResponse {
  return { status: 0, error: [], userId: "" };
}

export const ValidateResponse = {
  encode(message: ValidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ValidateResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      error: globalThis.Array.isArray(object?.error) ? object.error.map((e: any) => globalThis.String(e)) : [],
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: ValidateResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.error?.length) {
      obj.error = message.error;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateResponse>, I>>(base?: I): ValidateResponse {
    return ValidateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateResponse>, I>>(object: I): ValidateResponse {
    const message = createBaseValidateResponse();
    message.status = object.status ?? 0;
    message.error = object.error?.map((e) => e) || [];
    message.userId = object.userId ?? "";
    return message;
  },
};

export interface AuthServiceClient {
  register(request: RegisterRequest): Promise<resultData>;
  login(request: loginPayload): Promise<loginResultData>;
  validate(request: ValidateRequest): Promise<ValidateResponse>;
  decodeToken(request: Token): Promise<resultData>;
  createToken(request: tokenPayload): Promise<resultData>;
}

export const AuthServiceClientServiceName = "auth.AuthServiceClient";
export class AuthServiceClientClientImpl implements AuthServiceClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || AuthServiceClientServiceName;
    this.rpc = rpc;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.validate = this.validate.bind(this);
    this.decodeToken = this.decodeToken.bind(this);
    this.createToken = this.createToken.bind(this);
  }
  register(request: RegisterRequest): Promise<resultData> {
    const data = RegisterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "register", data);
    return promise.then((data) => resultData.decode(_m0.Reader.create(data)));
  }

  login(request: loginPayload): Promise<loginResultData> {
    const data = loginPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "login", data);
    return promise.then((data) => loginResultData.decode(_m0.Reader.create(data)));
  }

  validate(request: ValidateRequest): Promise<ValidateResponse> {
    const data = ValidateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "validate", data);
    return promise.then((data) => ValidateResponse.decode(_m0.Reader.create(data)));
  }

  decodeToken(request: Token): Promise<resultData> {
    const data = Token.encode(request).finish();
    const promise = this.rpc.request(this.service, "decodeToken", data);
    return promise.then((data) => resultData.decode(_m0.Reader.create(data)));
  }

  createToken(request: tokenPayload): Promise<resultData> {
    const data = tokenPayload.encode(request).finish();
    const promise = this.rpc.request(this.service, "createToken", data);
    return promise.then((data) => resultData.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
