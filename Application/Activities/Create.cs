using Domain;
using MediatR;
using Persistence;
using System;

namespace Application.Activities
{
	public class Create
	{
		public class Command : IRequest
		{
			public Activity Activity { get; set; }
		}

        public class Handler : IRequestHandler<Command>
        {
            private DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                context.Activities.Add(request.Activity);

                await context.SaveChangesAsync();
            }
        }
    }
}
