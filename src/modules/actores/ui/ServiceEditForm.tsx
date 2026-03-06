"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Service } from '@/modules/actores/services/actorsServices';
import {
  serviceSchema,
  ServiceFormData,
} from "@/modules/actores/validation/serviceSchema";

interface ServiceFormProps {
  onSubmit: SubmitHandler<ServiceFormData>;
  defaultValues?: ServiceFormData;
  isSubmitting: boolean;
  service:Service;
}

export default function ServiceFormEdit({
  onSubmit,
  defaultValues,
  isSubmitting,
  service,
}: ServiceFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name:service.name,
      photo: service.photo,
      birthDate: service.birthDate,
      biography:service.biography,
      nationality:service.nationality,
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">
          Nombre Actor
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="nationality" className="block font-medium">
          Nationality
        </label>
        <textarea
          id="nationality"
          {...register("nationality")}
          className="w-full p-2 border rounded"
        />
        {errors.nationality && (
          <p className="text-red-500 text-sm mt-1">
            {errors.nationality.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="photo" className="block font-medium">
          Photo
        </label>
        <textarea
          id="photo"
          {...register("photo")}
          className="w-full p-2 border rounded"
        />
        {errors.photo && (
          <p className="text-red-500 text-sm mt-1">
            {errors.photo.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="birthDate" className="block font-medium">
          birthDate
        </label>
        <input
          id="birthDate"
          type="date"
          {...register("birthDate")}
          className="w-full p-2 border rounded"
        />
        {errors.birthDate && (
          <p className="text-red-500 text-sm mt-1">
            {errors.birthDate.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="biography" className="block font-medium">
          Biography
        </label>
        <textarea
          id="biography"
          {...register("biography")}
          className="w-full p-2 border rounded"
        />
        {errors.biography && (
          <p className="text-red-500 text-sm mt-1">
            {errors.biography.message}
          </p>
        )}
      </div>


      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 disabled:bg-gray-300"
      >
        {isSubmitting ? "Saving..." : "Save Service"}
      </button>
    </form>
  );
}