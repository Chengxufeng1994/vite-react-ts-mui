import axios from 'axios';
import apiClient from '../axiosInstance';

import type { UserDto } from './user.types';
import type { User } from '@/features/users/users.types';

class Users {
  async getList(): Promise<User[]> {
    try {
      const response = await apiClient.get('/users');
      const data = await response.data;
      return data.map(this.dtoToEntity);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const response = error.response;
        throw new Error(response?.data?.message);
      }
      throw new Error('An error occurred');
    }
  }

  dtoToEntity(dto: UserDto): User {
    return {
      id: dto.id,
      name: dto.name,
      username: dto.username,
      email: dto.email,
    };
  }
}

const users = new Users();

export { users };
